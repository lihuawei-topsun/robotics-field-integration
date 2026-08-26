Short answer: for this repository's **WebRTC path**, you should not need root access or a jailbreak on the Go2 Air. The ROS 2 stack runs on an external computer and the current implementation establishes a local WebRTC connection to the robot. That is different from installing ROS packages on the robot.

There are a few important boundaries in the current `main` branch:

- the WebRTC implementation is a community transport derived from `go2-webrtc` / `unitree_webrtc_connect`; it is not the official Unitree SDK2 client wrapped inside ROS 2;
- the README says to close the mobile-app connection before starting WebRTC;
- for firmware `>= 1.1.15`, the README/code support the newer `data2 == 3` handshake, which needs the per-device AES-128 key associated with the Unitree account that owns the robot. Do not publish that key or account credentials;
- WebRTC access does **not** make an Air equivalent to an EDU. It may expose high-level motion, state, video or compressed LiDAR paths, but it does not prove official SDK2, low-level joint control, onboard SSH/root or every EDU sensor/interface;
- I would not rely on `CONN_TYPE=cyclonedds` as feature-equivalent yet. In the current Python driver the CycloneDDS LowState/pose/LiDAR callbacks are still `pass`, command handling is constructed around `WebRTCAdapter`, and the main launch files compare `cyclonedx` while the README/config uses `cyclonedds`.

For a safe first bring-up on your exact Air/firmware, keep the robot stationary and record:

1. exact SKU, hardware/firmware and repository commit;
2. which handshake branch is used and whether connection succeeds without the app open;
3. actual ROS topics, source timestamps, frame IDs and observed rates for state/video/LiDAR;
4. a clean disconnect/reconnect test with no motion command;
5. only after that, one conservative high-level command with the physical remote ready, a single command publisher, a freshness timeout and a verified stop on process/network loss.

So: **no robot jailbreak should be required for the WebRTC route, but treat every capability as configuration-specific and do not use it as evidence of EDU-level access.**

I maintain a purchase/bring-up checklist that separates the official Air/Pro/X/EDU/Go2-W signals from the interfaces that still need order-level and hardware evidence: https://lihuawei-topsun.github.io/robotics-field-integration/unitree-go2-edition-development-checklist.html

I work on real-hardware Unitree G1/Go2-W navigation and field integration. If you still have the Air, I can help review one sanitized no-motion manifest or compare the observed WebRTC topics against this repository. Independent integrator; not affiliated with Unitree or this project. Contact: li.huawei@topsunpower.cc.
