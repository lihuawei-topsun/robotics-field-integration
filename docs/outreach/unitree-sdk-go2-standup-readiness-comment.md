The current Python source explains one important part of the observation: `SportClient.Move()` uses `_CallNoReply()`. A return value of 0 therefore cannot prove that the sport service accepted or executed the velocity; it only proves the client-side no-reply call did not report an immediate transport error.

I also could not find a readiness/error enumeration in this repository. `SportModeState.error_code` is generated as an undocumented `uint32`, and `mode/progress/gait_type` are plain fields. Without a firmware-specific definition, `1002` should not be treated as “ready” or “not ready.”

The official high-level example is interactive: each action is selected through `input()` and the loop sleeps afterward. It does not implement or validate an automated StandUp→Move handshake, so its lack of an explicit wait is not evidence that immediate Move is guaranteed.

For a bounded reproduction, I would record one timeline with monotonic host time plus the robot state stamp:

1. exact Go2 edition/hardware and firmware, SDK commit (not only package version), sport API version and active app/remote/motion-switcher ownership;
2. `StandUp()` request/return code;
3. every fresh `SportModeState` sample: stamp, mode, progress, error_code, gait_type, body_height, velocity, yaw_speed, IMU and foot forces;
4. each attempted Move generation and no-reply return;
5. first observed physical/state velocity response;
6. StopMove/zero request and observed physical stop.

Run the same matrix from: cold start, already standing via remote/app, and SDK StandUp. This separates posture transition, control ownership and command acceptance. Do not continuously spam nonzero Move while readiness is unknown; a queued/late command could begin moving after the transition completes. Use a clear area, conservative limits and the physical remote/e-stop.

For production navigation, the correct fix is a documented firmware/API readiness or command-acceptance contract. A temporary sleep, `ret=0`, or an inferred `error_code` value is not sufficient. If a state-based guard is required temporarily, its thresholds and consecutive-fresh-sample budget should be configuration-specific, followed by explicit operator arming; failure must remain stopped rather than “retry until it moves.”

I work on real-hardware Unitree G1/Go2-W navigation integration and can help compare the same transition/stop trace on a separately identified platform, but Go2-W evidence must not be used to claim standard Go2 behavior. Independent integrator; not affiliated with Unitree. Contact details are on my GitHub profile.
