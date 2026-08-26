This is one of the few Go2 field reports I have found that keeps transport, sensor provenance, recording integrity and motion claims separate. I may be able to contribute a **separate Go2-W evidence profile**, provided it does not count toward the existing Go2 Air acceptance.

The useful common unit would be the evidence schema, not assumed capability equivalence.

## Proposed Go2-W track

### Stage 0 — immutable configuration manifest

- exact Go2-W edition, firmware, SDK/ROS revisions, onboard/external compute and network interface;
- available WebRTC/DDS/API control surfaces and current motion mode;
- each camera/LiDAR/odom/TF topic with publisher, frame, rate, stamp clock and provenance;
- remote/e-stop ownership and the operator-approved safe state;
- source commit plus hashes for the raw recording and any sanitized derivative.

No motion and no “Go2 compatible” claim at this stage.

### Stage 1 — read-only/no-motion evidence

- fresh/stale detection for camera, state, odom and selected point cloud;
- explicit “topic silent” versus “decoder failed” outcomes;
- TF single-owner check and timestamp-span summary;
- raw versus onboard-SLAM/static-map source labels preserved through record/replay;
- repeated clean lifecycle start/stop with no robot command authority.

### Stage 2 — command/stop contract

Only after the exact Go2-W receiver is confirmed:

- one command producer and explicit `manual_only`/latched STOP state;
- generation-scoped freshness watchdog and stale-callback rejection;
- zero/StopMove result kept stop-pending when unconfirmed;
- conservative bounded nonzero cell with physical remote/e-stop, clear area and recorded physical stop time;
- disconnect, process interruption and late old-command fault injection.

The Go2-W wheel mode must retain its own posture, readiness, velocity, lateral/yaw, slip and stop semantics. Shared Unitree IDL or Sport APIs do not make Air, Pro, EDU, Go2 and Go2-W interchangeable.

### Stage 3 — cross-platform comparison

Report only exact mappings such as:

| Evidence field | Go2 Air | Go2-W |
|---|---|---|
| sensor source | Air onboard-SLAM / static export | measured configuration only |
| velocity transport | selected Air transport | measured Go2-W transport |
| stop/watchdog | Air trace | independent Go2-W trace |
| odometry | Air native odom | wheel-mode trace; no leg-odom assumption |
| map artifact | validated Air dimensions | separately validated output |

Missing or different fields should remain `not_available`/`not_validated`, not be normalized away.

I work on real-hardware Unitree G1/Go2-W navigation and field integration. I can help prepare this Go2-W manifest, review the STOP/watchdog contract, or produce a bounded recording if the exact hardware configuration and safety authority are agreed first. I will not run nonzero motion, change firmware/account/network state, or expose site/credential data as part of a generic compatibility claim.

Related public checklist for the action-freshness boundary: https://lihuawei-topsun.github.io/robotics-field-integration/unitree-robot-fail-closed-control.html

Independent integrator; not affiliated with Unitree, DimOS or WorldForge. Contact: li.huawei@topsunpower.cc.
