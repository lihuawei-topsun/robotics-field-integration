I reviewed the current `main` branch at `281ccca` because the inspection output is unusually close to a real field deliverable: navigation, object observations, a reloadable database, annotated maps and a comparison PDF. Before treating those reports as repeatable hardware evidence, I think two contracts need to be made explicit.

## 1. Preserve acquisition time; do not manufacture simultaneity

Several bridge/restamper paths replace source time with callback time:

- `pointcloud_restamper.py` overwrites every cloud stamp with `now()`;
- `odom_tf_bridge.cpp` independently stamps TF and republished odometry with `now()`;
- `camera_sync_restamper.py` takes the latest cached RGB/image-info messages and the arriving depth frame, then assigns one new timestamp to all of them.

This may suppress TF extrapolation errors, but it also hides transport delay and clock offset. The cached RGB frame may be older than the depth frame, and the cloud/odom callbacks can have different queue/network latency. RTAB-Map, SAM-to-map projection and the final comparison report can then look synchronized without proving that the observations were acquired at the same robot pose.

I suggest retaining the immutable source stamp and adding host receive time/estimated clock offset as separate metadata. If a corrected time domain is required, publish separate `*_corrected` topics with:

- original stamp, receive stamp, correction method/version and estimated uncertainty;
- maximum allowed RGB/depth/cloud/odom age and pairwise skew;
- stale/missing rejection rather than reusing the last cached frame;
- raw and corrected bags plus deterministic replay tests.

A small acceptance set would be 60 s stationary, slow yaw, short out-and-back and one injected sensor delay. The same raw bag should reproduce the same accepted/rejected pairs and map markers.

## 2. Make motion ownership and STOP confirmation fail-closed

`cmdvel_to_sport_bridge.cpp` currently defaults `send_standup_on_start=true`, publishes StandUp as soon as the node starts, waits two seconds, and then marks itself ready. `SportModeState.mode` is stored but not used to require fresh state or an allowed mode. The local 0.5 s command timeout is useful while the process is alive, but it cannot stop the robot if this bridge is killed or disconnected, and the shutdown path does not send/confirm STOP.

The exploration STOP/timeout paths call `async_cancel_all_goals()` but do not wait for cancel acceptance or a zero-velocity/physical-stop confirmation. The timeout path immediately returns to `EXPLORING`, so a new goal can be selected while the previous cancellation is still unresolved.

For field use I would make the bridge start `manual_only` with automatic StandUp disabled, then require:

1. explicit operator arm/stand authorization;
2. consecutive fresh `SportModeState` samples, exact model/firmware and an allowed control mode;
3. one command owner, generation-scoped freshness and stale-callback rejection;
4. a robot-side or independent watchdog for process/network loss;
5. STOP kept `stop_pending` until the cancel result, command result and state/physical evidence agree;
6. no new frontier goal until the previous goal is canceled and zero motion is confirmed.

The minimum HIL matrix should include normal cancel, goal timeout, planner/server restart, bridge SIGINT/SIGKILL, network loss, late old command and launch restart. Record request IDs, command generation, source/receive stamps, action goal/cancel result, sport state and physical stop time.

This is a source review, not a claim that I reproduced the behavior on your Go2. The same evidence contract would also need a separate Go2-W profile; shared Unitree messages do not prove wheel-mode stop or odometry equivalence.

I work on Unitree G1/Go2-W real-hardware navigation and field integration. I can help turn this into a small no-motion replay test or review a configuration-specific STOP/watchdog patch. Related public checklist: https://lihuawei-topsun.github.io/robotics-field-integration/unitree-robot-fail-closed-control.html

Independent integrator; not affiliated with Unitree or this repository. Contact: li.huawei@topsunpower.cc.
