I would not keep tuning waist offsets or kp/kd until the exact joint-ownership contract is confirmed for the robot/firmware/motion mode. A physical 3-DoF waist does not mean that `rt/arm_sdk` is allowed to own all three waist joints while the locomotion controller is active.

The current official sources are not consistent enough to infer that contract:

- `unitree_sdk2_python`'s G1 arm7 example includes waist 12–14 in its command list, while the same source comments that WaistRoll/WaistPitch are invalid for a 23/29-DoF G1 with the waist locked;
- the current `xr_teleoperate` motion-mode implementation uses `rt/arm_sdk` but defines `G1_29_JointArmIndex` as arms only (15–28), excluding waist 12–14;
- its documentation says motion mode is Regular mode only (R1+X in that documented firmware path), not Running mode, and warns that this mode has not undergone large-scale testing.

So “waist lock frame” or a manually chosen negative WaistPitch may make one standing pose look better, but it is not evidence that walking ownership or center-of-mass compensation is correct.

For a safe, bounded diagnosis, please record one exact configuration: G1 edition/29-DoF waist variant, firmware, SDK/xr_teleoperate commit, remote mode/FSM, `mode_machine`, command topic/rate, weight value and exact controlled indices. Then test with a gantry/clear area and physical remote/e-stop:

1. stock walking with arms in the motion-controller pose;
2. standing, arms-only 15–28, small symmetric pose, conservative velocity/acceleration limit, no payload;
3. walking with that same small pose;
4. one arm, then two arms, increasing displacement only after the previous cell passes;
5. only after Unitree confirms ownership, a separate waist experiment.

Log commanded/actual q and dq, IMU roll/pitch, body motion, foot forces, motor temperatures and the exact moment walking begins. Add an interlock: excessive torso angle/rate, stale arm command, foot-contact anomaly or mode change must stop locomotion and return to a confirmed safe arm/stand state. Do not use “it did not fall” as the acceptance criterion.

The reference `xr_teleoperate` controller also clips arm targets by a velocity limit before publishing. That is a better starting point than sending a fixed pose step, but it still does not prove that a raised carrying pose is inside the locomotion controller's supported center-of-mass envelope. If stock walking passes and any meaningful arm displacement consistently fails, the missing capability may be coordinated loco-manipulation/whole-body control, not a waist angle or gain tweak.

Issue #173 was closed without a maintainer answer, and a later user still reported the same problem, so closure is not evidence of resolution.

I work on real-hardware Unitree G1/Go2-W integration and can help compare the evidence contract or scope one arm-state/locomotion interlock, but I would not run a payload-carrying walk until Unitree confirms the supported mode and waist/arm ownership for the exact firmware. Independent integrator; not affiliated with Unitree. Contact details are on my GitHub profile.

I consolidated the public source links, joint-ownership matrix and five hardware gates here: https://lihuawei-topsun.github.io/robotics-field-integration/unitree-g1-arm-walking-integration.html. The page is an engineering checklist, not a hardware pass claim.
