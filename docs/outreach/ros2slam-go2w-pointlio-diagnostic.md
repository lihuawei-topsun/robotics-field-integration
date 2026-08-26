我按这个仓库当前 `main` 和宇树官方 L2 SDK/Point-LIO 的数据合同做了一次源码对照。这个现象先不要靠调滤波阈值碰运气：**“刚开始正常，随后 TF/点云飞走”优先排时间戳、逐点时间字段、IMU 单位/方向和 TF 所有权**，仅把话题改成 `/utlidar/cloud`、`/utlidar/imu` 不能证明消息合同兼容。

建议先用仓库自带的 L2 配置与启动文件，而不是 `go2_l1.yaml`：

- `point_lio/config/unilidar_l2.yaml`
- `point_lio/launch/mapping_unilidar_l2.launch.py`

然后录一个不动 10 秒、再低速直行 5–10 秒的最小 bag：

```bash
ros2 bag record /utlidar/cloud /utlidar/imu /tf /tf_static
ros2 topic hz /utlidar/cloud
ros2 topic hz /utlidar/imu
ros2 topic echo --once /utlidar/cloud --field header
ros2 topic echo --once /utlidar/imu --field header
ros2 topic info /tf -v
ros2 topic info /tf_static -v
```

还需要把 `PointCloud2.fields` 打出来，确认实际包含且类型一致：`x/y/z`、`intensity`、`ring`、`time`。当前 `unilidar_handler()` 按 `ring:uint16 + time:float32` 解码；宇树 L2 SDK 的 `time` 是相对该帧 cloud stamp 的逐点时间，仓库的 L2 配置因此使用 `timestamp_unit: 0`（秒）。如果 Go2-W 内置 `/utlidar/cloud` 的字段、类型或单位不同，话题能收到但运动畸变补偿仍会错。

外参也要核对**方向**，不只是数值。当前配置注释是 IMU→LiDAR，使用：

```yaml
extrinsic_T: [0.007698, 0.014655, -0.00667]
extrinsic_R: [1,0,0, 0,1,0, 0,0,1]
```

如果从官方文档抄了反方向的平移，符号会相反。初始化前请保持 L2/机器人静止几秒；同时确认 IMU 线加速度静止模长接近 `9.81 m/s²`，与配置的 `acc_norm: 9.81` 一致。

TF 侧建议 RViz 的 Fixed Frame 设为 Point-LIO 输出的 `odom_point_lio`，并确认每个 child 只有一个父节点/发布者；不要同时让多个节点发布同一段 `odom→base_link` 或 IMU→LiDAR。可以先用同一份 cloud 跑仓库的 KISS-ICP（不接 IMU）：如果 KISS-ICP 稳而 Point-LIO 飞，范围就收敛到 IMU/时间同步/外参；两者都飞则先查点云字段、帧时间和安装刚性。

源码里还有一个独立可复核点：`standard_pcl_cbk()` 比较的是完整 stamp，却把 `last_timestamp_lidar` 写成了 `msg->header.stamp.sec`，丢掉纳秒；默认 `con_frame: false` 时它未必单独解释本次漂移，但如果打开合帧会直接污染帧间时间，应改为 `get_time_sec(msg->header.stamp)` 后再验证。

如果你还能复现，请贴下面四项，不需要先上传整套现场数据：

1. Go2-W 固件、L2 SDK/驱动 commit、ROS 2 版本；
2. cloud/IMU 的 header 时间、频率和 `PointCloud2.fields`；
3. `view_frames` 或 `/tf -v` 的发布者关系；
4. 静止段与低速直行段各一小段日志/bag。

我可以按同一份最小证据在 Go2-W 导航集成侧做对照，但会把具体配置和复现结果写清楚，不把别的 L2/Go2 结果直接当成你的设备结论。联系方式在我的 GitHub 主页。
