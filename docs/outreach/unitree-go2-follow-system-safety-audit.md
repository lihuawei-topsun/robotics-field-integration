## Scope

This is a source-only safety review of the current `main`; I have not run this project on your university Go2. The FOLLOW/APPROACH/HOLD structure is clear, but I found several fail-open paths that should be closed before broader real-robot testing.

## Findings

### 1. UWB loss replays the last nonzero command indefinitely

`UwbStateManager` stores only the latest message, with no monotonic receive time. `FollowController` reads `distance_est`/`orientation_est` at 25 Hz and keeps calling `Move()` from those values. If `rt/uwbstate` stops after a nonzero estimate, the application continues sending motion; `error_state` and `enabled_from_app` are also ignored.

The firmware may or may not have its own command expiry, but that is configuration-specific and is not a replacement for an application freshness contract.

### 2. Camera/target loss can leave APPROACH motion active

If `Camera.get_frame()` returns `None`, the vision loop continues without changing `behavior`, while the follow thread keeps sending the previous APPROACH velocity. Target misses are counted in frames rather than elapsed time, and the last box/velocity remains active during the miss budget. A camera stall or slow inference can therefore extend motion for an unbounded wall-clock time.

### 3. The UWB X-button “emergency stop” bypasses cleanup

`UwbButtonMonitor` calls a callback that only prints, sleeps 0.1 s, then executes `os._exit(0)`. `os._exit()` skips the `finally` block in `yolo_follow.py`, including:

- `avoid.Move(0, 0, 0)`;
- `avoid.UseRemoteCommandFromApi(False)`;
- follower join and normal resource cleanup.

This should not be described as an immediate safe stop unless a bounded physical stop has been proven independently for the exact firmware.

### 4. The advertised motion limits/smoothing are not enforced

`AppConfig.MAX_VX = 0.40` and `SMOOTH_ALPHA` are passed into `FollowConfig`, but `FollowController` does not use `vx_cmd`/`wz_cmd`, smoothing, `MAX_VX`, or `MAX_WZ`. FOLLOW can send `MAX_VX_FOLLOW = 0.9`. APPROACH uses `K_VX_FWD = 0.8` directly and also bypasses the central `MAX_VX` value. The README statement that constraints are centralized is therefore not true for the current command path.

The shared `behavior` dictionary is also updated across threads in multiple writes, so mode and velocity are not published as one atomic generation.

## Proposed narrow safety unit

I suggest one command-arbiter thread as the only owner of `Move()`:

1. Each input source publishes a complete snapshot: source, generation, finite/clamped `vx/wz`, monotonic receive time and validity.
2. UWB is valid only when fresh and when the relevant `error_state`/enable fields meet an explicitly documented contract.
3. APPROACH is valid only with a fresh camera frame and a fresh target lock measured in seconds, not frame count.
4. All modes pass through one final physical clamp/slew limiter; unused “smoothing” settings should either be implemented and tested or removed.
5. Any stale source, RPC error, unhandled exception, SIGINT or X-button event goes to a single STOPPING state. It stops the command producer, sends zero using a bounded safety path, disables remote API control, and records whether stop was confirmed. `os._exit()` must not run before that sequence.
6. Startup remains disarmed until fresh UWB/camera state and the exact robot/firmware control contract are confirmed.

## Acceptance/fault-injection matrix

Please record the exact Go2 edition, firmware, SDK commit and expected `Move()` expiry/stop response, then test at conservative limits with remote/e-stop ready:

- UWB publisher stops after a nonzero command;
- camera freezes or returns `None` during APPROACH;
- target disappears and inference stalls longer than the miss budget;
- behavior switches FOLLOW↔APPROACH while the command thread is reading;
- `Move()` raises/returns an error;
- X button, SIGINT and an exception occur during nonzero motion;
- cleanup is interrupted before API control is released.

For each case, log input timestamps, selected command generation, zero/stop attempt, API release result and observed physical stop time. Source tests can validate the state machine, but a physical stop claim requires the exact hardware trace.

I work on real-hardware Unitree G1/Go2-W navigation and field integration. I can help scope or review this safety unit, and separately define a Go2-W compatibility track, but I would not use Go2-W evidence to claim standard Go2 compatibility. Independent integrator; not affiliated with Unitree. Contact details are on my GitHub profile.
