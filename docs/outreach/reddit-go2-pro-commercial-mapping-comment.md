Your evidence already separates “LiDAR produces a visible cloud” from “the commercial navigation product works.” I would ask support to stop treating another video as the only artifact and assign a case ID to a minimum state trace:

1. scan completion timestamp and map identifier;
2. map-save request start/end, exact error/timeout and whether the map appears in the list;
3. cold reboot, map-list result and load request/response;
4. localization state/quality after load;
5. waypoint and patrol state transitions.

Run that once with one small, distinctive map after a robot/app cold restart and record the exact app build, account/region and network path. If saving times out, that is a different failure boundary from “save succeeds but reload/localization fails”; waypoint/patrol should not be debugged until persistence and localization each pass.

I would not jailbreak, downgrade or install an unofficial stack while the warranty/support case is open. Also keep the two options separate: fixing the official Pro Commercial app workflow versus building an external ROS 2 autonomy stack. A Pro Commercial robot must not be assumed to expose the same SDK/DDS contract as EDU or Go2-W; external compute/sensors would be a new integration project, not proof that the official feature is fixed.

If support can provide an exportable diagnostic bundle or the five state results above, I can help turn it into a PASS/FAIL matrix and assess whether an independent navigation path is technically available for this exact edition. I work on G1/Go2-W real-hardware navigation, but I have not tested your Pro Commercial V2.0/V1.1.15 configuration and would not claim equivalence. Independent integrator, not Unitree. Contact: li.huawei@topsunpower.cc.
