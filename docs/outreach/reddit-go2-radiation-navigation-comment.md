I audited the `autonomy_stack_go2` path mentioned here. Before tuning planners, I would freeze the sensor/pose contract because the current repository is hardware/firmware-sensitive:

- `transform_everything.py` hard-codes LiDAR/IMU rotations and manually flips axes;
- users have reported newer units with stationary raw IMU Z near `+9.8` while the calibration path expects the opposite sign, producing a roughly `-2g` bias;
- Point-LIO subscribes to `/utlidar/transformed_imu`, but that publisher overwrites orientation with identity and linear acceleration with zero after publishing a separate `transformed_raw_imu` message.

So changing one Euler angle until RViz looks level is not enough. Record raw cloud/IMU plus TF for three bounded cells: stationary, slow yaw, and a short out-and-back. Confirm timestamps, gravity magnitude/sign, full axis mapping, single TF ownership and stationary pose drift before any autonomous motion.

Also note that saving `scans.pcd` is not the same as having repeatable localization. This stack demonstrates online mapping/navigation; I found no completed contract showing cold-start relocalization against a saved PCD. For repeat patrols, first select a fixed-map localization path (for example a validated 2D occupancy map + localization, or an explicit 3D localization pipeline), assign a map-generation ID, then prove: restart → localize → 1–3 checkpoints → stop/recovery.

Only after pose/map reuse passes would I add radiation data. Each measurement should retain sensor timestamp, frame, dose value/unit, status and map-generation ID; transform it to the map at measurement time, reject stale/missing transforms, and bag both raw and fused outputs. That prevents a visually plausible dose map built on drifting poses.

I work on real-hardware Unitree G1/Go2-W autonomous-navigation and sensor-payload integration. I can help turn one exact Go2 EDU firmware/SDK/sensor configuration into this evidence sequence, but I have not run this repository on your robot and would not claim it is already repeatable. Independent integrator, not Unitree. Contact: li.huawei@topsunpower.cc.
