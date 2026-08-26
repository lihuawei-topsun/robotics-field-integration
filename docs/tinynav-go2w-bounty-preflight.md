# TinyNav × Go2-W Bounty：无动作预检与实机验收计划

更新时间：2026-08-27  
审计修订：`UniflexAI/tinynav@faa23bbf243a69999a5a2abcf6fb705546bf19ac`

## 目的与边界

这份计划用于准备 TinyNav 公开 bounty 中的 Go2-W 建图与导航验证。在 TinyNav 维护者确认任务仍可领取、验收标准和付款方式之前，不投入正式实机工作；在速度命令失联边界确认之前，不启动机器人动作。

当前只完成了公开源码静态审计和本地 Python 配置导入检查。没有在 Go2-W 上安装或运行 TinyNav，也没有得到兼容、导航成功或 bounty 验收结论。

## 已确认的源码事实

### 1. Go2-W 已进入机器人配置表

`tinynav/core/robot_specs.py` 定义了 `GO2W_CONFIG`。本地在不连接机器人、不加载 ROS 控制栈的条件下执行：

```bash
ROBOT_TYPE=go2w PYTHONPATH=/path/to/tinynav \
  python3 -c 'from tinynav.core.robot_specs import ROBOT_CONFIG; print(ROBOT_CONFIG)'
```

成功解析为 `name='go2w'`。该检查只证明 Python 配置选择可以工作。

源码：https://github.com/UniflexAI/tinynav/blob/faa23bbf243a69999a5a2abcf6fb705546bf19ac/tinynav/core/robot_specs.py#L64-L80

### 2. 速度限制仍是占位值

源码明确说明：当前最小/最大线速度与角速度是各机器人共用的占位值，等待真实平台测量。Go2-W 当前继承：

- `min_linear_vel = 0.1 m/s`
- `max_linear_vel = 1.0 m/s`
- `min_angular_vel = 0.1 rad/s`
- `max_angular_vel = 0.75 rad/s`

这些是代码当前值，不是本集成方验证过的安全或可执行范围，不能直接写入交付承诺。

源码：https://github.com/UniflexAI/tinynav/blob/faa23bbf243a69999a5a2abcf6fb705546bf19ac/tinynav/core/robot_specs.py#L31-L42

### 3. Go2-W 复用 Go2 SportClient

`unitree_control.py` 把 `go2`、`go2w` 归为同一四足分支，Go2-W 复用 Go2 `SportClient`，将 `/cmd_vel` 的非零速度传给 `Move()`，零速度传给 `StopMove()`。

源码：https://github.com/UniflexAI/tinynav/blob/faa23bbf243a69999a5a2abcf6fb705546bf19ac/tinynav/platforms/unitree_control.py#L12-L41  
源码：https://github.com/UniflexAI/tinynav/blob/faa23bbf243a69999a5a2abcf6fb705546bf19ac/tinynav/platforms/unitree_control.py#L86-L98

### 4. ROBOT_TYPE 必须由运行环境显式提供

`unitree_control.py` 使用 `os.environ["ROBOT_TYPE"]`，缺失时会在启动阶段失败；当前 `.devcontainer/devcontainer.json` 没有设置该变量。正式运行记录必须保存 `ROBOT_TYPE=go2w` 的注入位置，不能只依赖某个未记录的终端会话。

### 5. 导航脚本与机器人桥不是同一进程

`scripts/run_navigation.sh` 启动感知、规划、地图、`cmd_vel_control`、RViz 和 POI，但不启动 `unitree_control.py`。`scripts/run_streamer_manager.sh` 才启动 Unitree 控制桥和 ROS2 Node Manager。验收记录必须保存实际进程拓扑，不能只写“运行了 TinyNav”。

### 6. 相机和主机环境有明确前置要求

- 默认 RealSense 脚本要求能运行 `rs-enumerate-devices`，并拒绝低于 `5.17` 的固件。
- Dev Container 使用 `uniflexai/tinynav:latest`、GPU、host network、privileged、`/dev` 挂载和 16 GB shared memory。
- README 要求 x86_64 主机有 NVIDIA Container Toolkit；Jetson 路径要求 JetPack 6.2 或更高。
- Looper 是另一条传感器路径，但需要对应 VIO、深度、图像、CameraInfo 和 TF 输入。

正式证据必须记录镜像 digest，不能只记录可变的 `latest` 标签。

## 实机前必须关闭的安全缺口

### Unitree 桥缺少最后速度命令 watchdog

`cmd_vel_control.py` 在自身仍运行时会按规划路径更新时间减速，并在路径过期后发布零速度；暂停和导航停用也会发布停止命令。这是上游保护。

但 `unitree_control.py` 当前只在收到 `/cmd_vel` 回调时调用 `Move()` 或 `StopMove()`，没有独立记录最后一次速度命令时间，也没有定时器在上游进程、DDS 发布者或链路静默后强制 `StopMove()`。

因此，在任何非零动作测试前，需要 TinyNav 维护者与实机方确认至少一项：

1. Go2-W 固件对单次 `Move()` 的内建命令有效期，并提供可验证证据；或
2. 在 `unitree_control.py` 增加桥层 monotonic watchdog，超过约定预算立即、重复可控地调用 `StopMove()`；或
3. 由另一条独立且已验证的安全控制链提供同等 fail-closed 保证。

未关闭这个边界前，只做不连接机器人动作服务的 ROS topic、配置、地图和离线规划检查。

## 无动作预检

### A. 冻结版本与环境

- 保存 TinyNav Git SHA。
- 保存容器镜像 digest、主机架构、OS、GPU/JetPack、Docker/NVIDIA runtime 版本。
- 保存 Go2-W 型号、固件、App/遥控器状态、Unitree SDK 版本和网卡名称。
- 保存相机型号、固件、序列号、安装位姿和供电/USB 路径。

### B. 验证配置但不连接动作服务

- 导入 `ROBOT_TYPE=go2w` 并打印 `ROBOT_CONFIG`。
- 验证相机图像、深度、CameraInfo、IMU/VIO 和所需 TF 的主题与时间戳。
- 运行 ROS bag / 仿真输入完成建图、POI、全局路径和 `cmd_vel` 生成。
- 记录 `cmd_vel` 频率、最大值、最小非零值、路径过期减速与停止事件。
- 不启动 `unitree_control.py`，确保生成的 `/cmd_vel` 不进入真实机器人。

### C. 审查进入实机的门槛

- 维护者确认 bounty 验收。
- 明确桥层 watchdog 或固件命令有效期。
- 现场清空、远程停止/急停可用、网络隔离与人工观察就位。
- 从比占位上限低得多的保守速度开始；具体数值由维护者和实机负责人共同确认，不在本计划中虚构。

## 实机验收矩阵

| 阶段 | 输入 | 记录 | 通过条件 |
|---|---|---|---|
| 连接只读 | LowState / SportModeState / 相机 | 频率、丢帧、时间戳、模式 | 连续、可解释，不发布动作 |
| 零速度链路 | 持续零 `/cmd_vel` | 桥回调、StopMove、状态 | 无意外动作，停止路径可观察 |
| 单次保守直行 | 一个短距离目标 | cmd_vel、实测响应、停止时间 | 方向正确、速度受限、停止确定 |
| 单次保守转向 | 一个小角度目标 | 角速度、航向、停止时间 | 符号正确、无持续旋转 |
| 上游静默 | 非零运动中停止 cmd_vel 发布 | 最后一帧与 StopMove 时间 | 在约定 watchdog 预算内停止 |
| 路径过期 | 停止规划更新 | stale age、减速、零速度 | 先减速后停止，状态可见 |
| 建图与定位 | 一条短闭环路线 | bag、地图、重定位误差 | 可重复加载并定位 |
| 路线与检查点 | 1 条路线、至少 1 个检查点 | 视频、bag、到点事件 | 完整到点并可人工停止 |

## Bounty 交付包

只有维护者确认任务后才生成：

1. `environment.md`：硬件、固件、计算、相机、SDK、SHA、镜像 digest。
2. `commands.md`：从干净环境到运行的准确命令，不包含密钥或账号。
3. `preflight-results.md`：无动作检查与失败项。
4. ROS bag / 日志：只包含允许公开的数据。
5. 建图与导航视频：显示机器人、路线、检查点和人工停止条件；不包含厂区敏感信息。
6. 需要时提交最小 PR；代码修改与视频验收分开描述。

## 当前执行状态

- [x] 公开 bounty 表核验（显示 Open，但等待维护者确认时效）。
- [x] TinyNav 主分支 Go2-W 静态路径审计。
- [x] `ROBOT_TYPE=go2w` 配置导入检查。
- [x] 关键 Python 文件语法编译检查。
- [ ] 维护者确认领取、验收和付款流程。
- [ ] 在实际 NVIDIA/ROS2/相机主机完成无动作预检。
- [ ] 关闭桥层速度命令失联边界。
- [ ] 获批后进行受控实机测试。

公开提案：https://github.com/UniflexAI/tinynav/issues/234
