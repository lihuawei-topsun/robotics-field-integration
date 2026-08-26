I checked the current `foxy-humble` launch and source specifically for the repeated question “can `scans.pcd` be loaded for navigation?” The answer is: not by the current real-robot launch path.

- `mapping_utlidar.launch` starts Point-LIO in online mapping mode each time.
- `system_real_robot.launch` and `system_real_robot_with_route_planner.launch` do not load `scans.pcd`, do not start a fixed-map localization node, and do not consume `/initialpose` as a completed localization contract.
- The only `mapFile` reader I found is `visualization_tools`, which reads the simulation/environment `mesh/<world>/map.ply` for visualization. That include is commented out in both real-robot launch files. It is not a relocalizer.
- `pcd_save_en` therefore proves only that Point-LIO writes a point-cloud file on shutdown. It does not establish pose in that map on the next process start.

Before implementing repeated patrol, please define a separate fixed-map localization stage:

1. choose the map representation and freeze a map-generation ID;
2. define the localization algorithm that registers live observations against that map;
3. publish a verified `map→odom`/robot pose with covariance and freshness;
4. reject navigation until localization passes explicit quality thresholds;
5. test cold restart → localize → short out-and-back → 1–3 checkpoints → stop/recovery.

Converting a PCD to a 2D occupancy image may be useful for a 2D localization stack, but it still needs an initial-pose/relocalization contract and a live obstacle layer. Conversely, a 3D PCD requires a 3D registration/localization implementation; FAR Planner and the online Point-LIO mapper do not supply that missing step by themselves.

This distinction also matters for sensor mapping: radiation/gas/thermal readings should be attached only after fixed-map localization is proven, otherwise repeat visits can place measurements into different drifting map frames.

I work on real-hardware Unitree G1/Go2-W navigation and sensor-payload integration. If affected users can provide the exact Go2 edition/firmware, current Point-LIO odometry trace, saved map and desired restart workflow, I can help scope one localization/acceptance unit. I have not run this repository on your robot and am not claiming the current stack already supports map reuse. Independent integrator; contact details are on my GitHub profile.
