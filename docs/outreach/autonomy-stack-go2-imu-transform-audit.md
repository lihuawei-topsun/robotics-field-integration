I reviewed the current `foxy-humble` source because several later users report the same tilt/drift. I do not think tuning line 73 by eye is a configuration-independent fix.

There are three contracts to resolve first:

1. `transform_everything.py` hard-codes LiDAR pitch `2.878202...`, hard-codes an additional IMU yaw of π, manually flips IMU Y/Z, and applies another 15.1° rotation. Issue evidence shows some firmware/robots report stationary raw Z near `-9.8`, while newer ones report `+9.8`; the current calibration path can turn the latter into an approximately `-2g` bias. A replacement Euler triple such as `(0.2, 3.14, 0.5)` may make one RViz view look level, but it does not prove the raw frame convention or the cloud↔IMU transform.

2. The callback first publishes the fully transformed data as `/utlidar/transformed_raw_imu`, then overwrites orientation with identity and linear acceleration with zero before publishing `/utlidar/transformed_imu`. However, `config/utlidar.yaml` subscribes Point-LIO to `/utlidar/transformed_imu` with both `use_imu_as_input: true` and `imu_en: true`; gravity and gravity-init are also zero. So the configured estimator is not receiving the full transformed IMU message. The maintainer should confirm whether this gyro-only contract is intentional. If it is not intentional, changing only the static Euler angle cannot fix the estimator.

3. The node measures one wall-clock offset from the first cloud and adds it to every later cloud and IMU stamp. That assumes the raw LiDAR/IMU share a stable clock offset. Please verify the offset over time rather than assuming one sample is enough.

Before changing code, record a short bag for: stationary, slow yaw, and a short out-and-back. Include `/utlidar/cloud`, `/utlidar/imu`, both transformed IMU topics, transformed cloud, Point-LIO odometry and `/tf`/`/tf_static`. For each exact robot firmware/SDK revision, check:

- raw stationary acceleration magnitude and sign;
- full axis mapping during slow yaw;
- monotonic cloud/IMU stamps and their skew over time;
- one publisher/parent per TF child;
- stationary pose drift before allowing autonomous motion.

I would then make the transform convention explicit as a versioned configuration and fail fast when stationary gravity contradicts it, rather than shipping another global hard-coded Euler angle.

Separately, saving `scans.pcd` only saves a point cloud. I found no completed cold-start relocalization contract in this repository, so it should not be described as repeatable fixed-map patrol until restart→localize→checkpoint navigation is independently demonstrated.

If a maintainer confirms the intended raw frame and whether `/transformed_imu` is deliberately gyro-only, I can help scope a parameterization/validation PR. I work on real-hardware Unitree G1/Go2-W navigation and sensor integration, but have not run this repository on the affected Go2 configuration. Independent integrator; not affiliated with Unitree. Contact details are on my GitHub profile.
