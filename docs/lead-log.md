# 线索与市场信号清单

更新时间：2026-08-27

## 自有渠道发布

- 正式版本：Unitree G1 / Go2-W Field Integration v1.0.0
- 发布日期：2026-08-27
- 内容：中英文网站、工业质检选型指南、结构化询盘、四步试点与能力一页纸附件。
- 永久链接：https://github.com/lihuawei-topsun/robotics-field-integration/releases/tag/v1.0.0
- 事实边界：Release 明确独立集成商身份、配置/现场验证边界和 AI 图片非客户案例。
- 转化入口优化：2026-08-27 将 GitHub 个人资料主链接改为能力网站，个人主页首屏增加硬件验证表单、Fleet Reliability、项目询盘、工业质检指南等入口；协作范围新增 connection generation、command freshness、confirmed STOP 与 recovery evidence。主仓库补充 industrial-inspection、field-robotics、quadruped-robot、humanoid-robotics、ros2、fleet-reliability、robot-watchdog 等精准检索标签。
- 技术内容入口：2026-08-27 上线 G1 / Go2-W 工程笔记集合，首批包含网络控制动作新鲜度/fail-closed 安全边界与 Go2 自动回充 `TIMEOUT_DETECT` 分层诊断。页面直接链接公开源码修订与 Issue，明确标注代码事实、工程推断和待实机验证；未把第三方问题描述为客户案例。
- 工程笔记：https://lihuawei-topsun.github.io/robotics-field-integration/engineering-notes.html
- 公开合作讨论：2026-08-27 启用自有仓库 Discussions，发布中英文长期合作入口，明确四类合作：开源项目实机验证、安防/工业巡检试点、机械臂/传感器集成、机器人厂商/集成商联合交付；包含最小上下文清单、保密提醒和能力边界。
- 讨论：https://github.com/lihuawei-topsun/robotics-field-integration/discussions/1
- Go2-W 高意向服务页：2026-08-27 上线“宇树 Go2-W 二次开发”独立页面，覆盖配置门槛、自主导航、安防/工业巡检、机械臂/传感器、路线闭环、停止恢复和试点验收矩阵；不包含未经验证的性能数字或客户案例。
- 服务页：https://lihuawei-topsun.github.io/robotics-field-integration/unitree-go2w-secondary-development.html
- G1 行走机械臂技术页：2026-08-27 新增“G1 行走中机械臂控制”工程笔记，将 locomotion/waist/arm SDK/weight/停止恢复拆成关节所有权矩阵，并定义配置冻结、原厂行走、站立控臂、行走控臂、载荷任务五级验收门；依据固定公开源码与三组真机问题记录，明确 HIL 尚未执行，不提供通用腰角或 kp/kd。
- G1 技术页：https://lihuawei-topsun.github.io/robotics-field-integration/unitree-g1-arm-walking-integration.html
- Go2 版本确认技术页：2026-08-27 新增 Air/Pro/X/EDU/Go2-W 二次开发前确认清单，原样引用官方 Secondary development 的 ○/◕/● 相对标记但不擅自解释为具体权限；覆盖准确 SKU/固件、SDK/DDS/WebRTC/SSH、传感器来源、地图复用、控制权、TTL/STOP、售后与五级实机验收。
- Go2 版本页：https://lihuawei-topsun.github.io/robotics-field-integration/unitree-go2-edition-development-checklist.html
- 舰队可靠性服务页：2026-08-27 新增英文 Unitree fleet reliability validation 页面，以一个 failure class + 一个准确配置为入口，定义连接、命令、STOP、sensor time、fault injection 和 rollout 五级证据门；明确不声称 99% 在线率或跨型号兼容，Go2 Air/Pro/EDU 必须在目标硬件上验证。
- 舰队可靠性页：https://lihuawei-topsun.github.io/robotics-field-integration/unitree-fleet-reliability-validation.html
- 硬件验证入口：2026-08-27 新增 `hardware-validation.yml` GitHub Issue Form 与公开 YAML manifest，强制填写准确型号/硬件、版本、第一故障类、期望/实际、安全状态、脱敏证据和下一步；公开表单明确禁止账号、密钥、序列号、IP、客户身份和精确位置。fleet reliability 页面提供直接提交和下载入口。
- 硬件验证表单：https://github.com/lihuawei-topsun/robotics-field-integration/issues/new?template=hardware-validation.yml
- Manifest：https://lihuawei-topsun.github.io/robotics-field-integration/assets/unitree-validation-manifest-template.yaml
- UniStore 方向：2026-08-27 核验宇树官方 G1 应用平台、开发者手册与 2026-01-23 版开发者协议，确认开发者主体须为合法独立法人，代表公司接受协议者必须有充分授权；未经书面许可不得暗示宇树合作/认可或使用品牌。平台流程包含不可修改 action ID、动作/版本、素材、包/镜像/权限/启动脚本、本地测试与 1–5 个工作日审核；协议未给出售价、分成、结算或奖励条款，并包含开发者知识产权授权、隐私/赔偿责任和平台无持续支持义务。因此只列为需公司/法务批准的官方分发试验，不计作收入，也未登录、注册或创建动作。
- 持续监测：Codex heartbeat `机器人二开获客持续推进` 保持 ACTIVE，每天 09:30 检查人工回复、PR/Issue、Reddit 私信、询盘、Release/流量与近 30 天新机会；2026-08-27 已加入 unitree-mojo PR #10、UnLeash-Lite #7、BrainCo G1 双手 OOM #3、Go2-Inspector #1、Undaunted 邮件授权边界，并明确自动审查不算联系人。
- 收款码边界：原始目标提到附件收款码，但当前工作区未发现真实收款码文件，仅有邮箱授权二维码；因此网站没有发布、替代或伪造任何收款码。

## 主动目标账户

### YY Group：G1 设施管理数据与自动化计划

- 官方公告日期：2026-06-09。
- 已确认事实：YY Group 已部署 Unitree G1 Edu Ultimate B-U4 与 Jetson Orin，用于商场、酒店和资产密集型商业地产的设施管理数据采集、模仿学习与 Sim2Real 自动化。
- 匹配依据：现有安防自主导航 Demo、路线/检查点闭环、传感器与机械臂集成能力，可从一个设施工作流和现场试点切入。
- 公开联系人：Jason Zhi Yong Phua（CFO），enquiries@yygroupholding.com。该邮箱是投资者联系人，因此邮件只请求转交机器人计划负责人，不假设其本人负责技术采购。
- 当前状态：已准备定向英文草稿，等待确认真实飞书发件邮箱与用户发送批准。
- 草稿：docs/outreach/yy-group-intro.html
- 官方来源：https://www.globenewswire.com/news-release/2026/06/09/3309337/0/en/YY-Group-NASDAQ-YYGH-Launches-Commercial-Humanoid-Robotics-Initiative-to-Drive-AI-Driven-Margin-Expansion-and-Address-Global-Facility-Management-Labor-Shortages.html

### RoboticsLive：G1/R1/Go2 美国部署与软件合作

- 已确认事实：公司自有 G1、R1、Go2，开发 RoboticsLiveOS，承接商业试点、软件定制、操作员、培训和长期支持；明确声明为独立 Unitree 服务商。
- 匹配依据：中国侧实机二开、Go2-W 导航巡检、传感器/机械臂集成，可作为远程工程分包或兼容性验证能力。
- 公开业务邮箱：contact@roboticslive.com。
- 当前状态：已准备独立合作草稿，等待邮箱授权、发件身份核对和发送确认。
- 草稿：docs/outreach/roboticslive-partnership.html
- 官方来源：https://roboticslive.com/about/

### Work E Robotics：马来西亚 Unitree 联合交付

- 已确认事实：公司提供 Unitree 人形与四足平台集成；公开岗位曾要求 G1/H1/B2 部署、ROS/ROS2、传感器/控制器、定制行为、培训和中文能力。
- 匹配依据：可为东南亚项目补充 G1/Go2-W 二开、导航巡检、现场联调和中文技术协作。
- 公开合作邮箱：sam@workerobotics.com（Events & Partnerships）。
- 当前状态：已准备联合交付草稿，等待邮箱授权、发件身份核对和发送确认。
- 草稿：docs/outreach/work-e-robotics-partnership.html
- 官方来源：https://www.workerobotics.com/contact

## 已执行公开触达

### Mark Hadley / Conscious Creatures：Go2 安防巡逻实施需求

- 对方信号：在 `Kodo-Robotics/go2-autonomous-patrol` 唯一 Issue 中主动表示“准备使用、如何联系”，公开邮箱 `mark@consciouscreatures.co.uk`；GitHub 简介为“Working with robots. Unitree Go2 to start with”，2026-07 仍更新账号。
- 仓库审计：仓库 README 描述 ROS2/Nav2/巡逻/视频/充电/地理围栏，但全部 Roadmap 阶段未完成，最后代码推送为 2025-10；不能把它当成已交付系统。
- 已执行：2026-08-27 透明公开回复，明确不是仓库作者，提供现有 Go2-W 安防自主导航 Demo 与现场路线/检查点/告警闭环试点支持。
- 状态：等待 Mark 回复；若 48 小时无回复，可考虑用其公开业务邮箱发送一次简短跟进，不重复轰炸。
- 留言：https://github.com/Kodo-Robotics/go2-autonomous-patrol/issues/1#issuecomment-5427843791
- 对方网站：https://www.consciouscreatures.co.uk/

### autonomous-os：Go2-W 实机适配协作

- 对方需求：项目已声明 Go2-W 设备模型，但缺少真实轮足底盘；公开邀请有实机的人参与底盘接口、速度/停止、深度路由和安装器设计验证。
- 匹配依据：有 Go2-W 实机、安防自主导航 Demo，可进行硬件侧验证。
- 已执行：2026-08-26 公开留言，提供实机验证与联调协作，并留下网站仓库和邮箱。
- 状态：等待回复。
- 留言：https://github.com/autonomous-ai/autonomous-os/issues/205#issuecomment-5427379874

### Unitree Python SDK：路线到点触发拍照与网页直播

- 对方需求：Go2 EDU 激光雷达建图、自主经过多个检查点、到点触发外部电脑拍照，并通过浏览器直播。
- 匹配依据：与现有“自主路线 + 检查点 + 回传闭环”能力高度一致。
- 已执行：2026-08-26 公开回复可拆分的工程架构，明确提出实机验证与适配合作，并留下邮箱。
- 状态：等待需求方确认项目是否仍在继续。
- 留言：https://github.com/unitreerobotics/unitree_sdk2_python/issues/94#issuecomment-5427383379

### Uniflex AI / TinyNav：Go2-W 导航验证付费 Bounty

- 对方信号：TinyNav 面向 Unitree Go2 等平台提供轻量视觉导航，并在公开表格中将“支持你的机器人运行 TinyNav，分享建图与导航视频”标为 Open，价值 20 美元；另有控制器、模型量化和 Isaac Sim 集成任务。该表格可能滞后，必须由维护者确认后才投入实机时间。
- 代码匹配：当前主分支已声明 `GO2W_CONFIG`，但速度上下限注释明确仍是跨机器人共用的占位值，等待真实平台测量；控制层复用 Go2 `SportClient`，将 `cmd_vel` 映射到 `Move()` / `StopMove()`。
- 已执行：2026-08-27 在 TinyNav 创建 Go2-W bounty 范围提案，承诺记录准确固件/计算/相机/SDK/代码版本，完成一次建图、定位、路线与检查点视频，并同步命令频率、`cmd_vel` 和停止状态；任何故障单独保留，不把未运行的 TinyNav 描述为已兼容。
- 待确认：bounty 是否仍开放且 Go2-W 可领取、要求的相机/计算配置、最小路线/视频、是否需要合并代码，以及实机速度/停止证据是否作为单独平台验证任务。
- 静态预检：已确认 `ROBOT_TYPE=go2w` 可导入配置，但 Dev Container 未默认注入该变量，导航脚本和 Unitree 控制桥分属不同启动路径；默认 RealSense 路径还有固件、GPU、host network、privileged 与设备挂载要求。
- 安全门槛：上游 `cmd_vel_control` 有路径过期减速/停止，但 `unitree_control.py` 桥层没有最后速度命令 watchdog。非零 `Move()` 后若上游或 DDS 静默，当前桥代码不能单独证明会调用 `StopMove()`；在维护者确认固件命令有效期或接受桥层 watchdog 之前不启动实机动作。
- 代码贡献：2026-08-27 已提交桥层 watchdog PR：每次非零 `Move()` 调用前启动 steady-clock freshness timer；独立短超时 safety client 不受主 RPC 阻塞；递增 generation 与补偿性停止处理跨客户端迟到命令；显式零命令保持 stop-pending，只有成功且没有更新代数时才解除。0.5 秒是可配置初值，明确不是 Go2-W 实测结论。
- 验证：watchdog、跨平台停止分发、迟到 generation、未确认停止和 generation-scoped 重试的 16 个 Python 3.10 测试通过，修改文件 Ruff 与语法编译通过；没有连接或驱动机器人。PR 当前开放，等待维护者审查默认预算和实机验收。
- 审查迭代：前六轮发现的 Move 前启动/steady clock、非有限超时、主 RPC 阻塞、跨客户端乱序、stop-pending 和旧失败覆盖新 deadline 问题均已逐项修复并补回归测试。第七次自动复审对 `a7701bd` 返回 `Didn't find any major issues`。停止重复触发自动审查；当前只等待 `junlinp`/维护者人工审查、上游 CI、默认预算确认和实机验收，自动复审通过不等于已合并或已验证硬件。
- 当前状态：无动作预检和实机验收计划已形成；GitHub 不允许外部 PR 作者直接添加 reviewer，已仅一次定向 @ TinyNav 最高贡献者兼其固定 Unitree SDK fork 维护者 `junlinp` 请求人工审查。等待维护者回复验收与付款流程，未开始安装或实机运行。
- 预检计划：docs/tinynav-go2w-bounty-preflight.md
- Bounty：https://docs.google.com/spreadsheets/d/1fyFSkiyfSGVeO8uW97gS7-gIt9qTbGIpYaMcHcjPF4Q/edit?usp=sharing
- 提案：https://github.com/UniflexAI/tinynav/issues/234
- PR：https://github.com/UniflexAI/tinynav/pull/235

### Unitree Python SDK：Go2-W StandDown 状态与模式排障

- 对方需求：活跃的 TinyNav/Uniflex AI 贡献者在宇树官方 Python SDK 报告 Go2-W 无法执行 `StandDown()`，原 Issue 没有返回码、固件或状态信息。
- 代码判断：官方 Go2-W 高层示例确实包含 `StandDown()`；该方法走 API 1005 的 request/reply 路径，其返回值是服务端状态码。官方低层示例还会在释放当前高层运动模式前依次调用 `StandUp()`、`StandDown()` 和 `MotionSwitcherClient.ReleaseMode()`，因此活动 motion mode 是必要证据，但尚不能认定为根因。
- 已执行：2026-08-27 请求准确固件/SDK 修订、一次 `StandDown()` 返回值、`CheckMode()`、调用前后 `SportModeState` 和遥控器/App 状态，并给出单次命令、持续记录、不重复轰炸的安全复现顺序；提出可在真实 Go2-W 上做同一最小状态对比。
- 当前状态：等待对方补充日志或确认需要跨机对比。
- 留言：https://github.com/unitreerobotics/unitree_sdk2_python/issues/174#issuecomment-5429726094

### Unitree Python SDK：Go2 StandUp 后 Move 静默忽略与 readiness 缺失

- 对方需求：真实 Go2、SDK 1.0.1、Python 3.8、有线网络；`StandUp()` 后连续 `Move(0,0,1.5)` 均返回 0，但机器人 4 秒到 10 秒以上不动作，等待窗口非确定；`SportModeState` 的 mode/progress/gait_type 不变，error_code 从 1001 变 1002 后也无法表示 readiness。
- 源码判断：`SportClient.Move()` 使用 `_CallNoReply()`，返回 0 不能证明服务端接受或物理执行，只能证明客户端没有立即报告传输错误。Python IDL 将 `error_code` 生成为未解释的 `uint32`，仓库没有 readiness/error 枚举；不能推断 1002 的语义。
- 示例边界：官方 Go2 high-level 示例由人工 `input()` 逐次选择动作并在循环末 sleep，不是自动 StandUp→Move 握手；示例中没有显式等待不等于保证 Move 可立即执行。
- 已执行：2026-08-27 发布诊断，要求按冷启动/遥控已站立/SDK StandUp 三种路径记录固件、SDK commit、API/控制权、状态 stamp、姿态/足力/速度、Move generation、首次物理响应和 StopMove/零速度；明确禁止 readiness 未知时持续轰炸非零命令。
- 商业匹配：导航启动、恢复与任务重启都需要可观测 command-acceptance/readiness 合同；可协助做配置明确的过渡/停止对照，但 Go2-W 不能替代标准 Go2 结论。
- 当前状态：等待机主或宇树维护者提供固件/API readiness 定义和完整时序证据。
- 留言：https://github.com/unitreerobotics/unitree_sdk2_python/issues/175#issuecomment-5431314158
- 底稿：docs/outreach/unitree-sdk-go2-standup-readiness-comment.md

### Unitree Python SDK：G1 行走时双臂/腰部控制失稳

- 对方需求：至少三名 G1 29-DoF 真机用户在 gamepad/遥控行走同时通过 `rt/arm_sdk` 控制双臂时复现腰部前折、重踏、侧移、躯干振荡甚至突然前冲；目标包含固定搬运/预抓取姿态与 pick-and-place。所谓“waist lock frame”只改善部分站立平衡，没有解决行走。
- 官方源码冲突：SDK arm7 示例把腰 12–14 混入命令列表，却在同一文件注释 WaistRoll/WaistPitch 对 waist-locked 23/29-DoF 无效；当前 `xr_teleoperate` motion-mode 的 `G1_29_JointArmIndex` 只含 15–28，排除腰部，并仅声明 Regular mode 支持、未大规模测试。
- 工程判断：三自由度腰硬件存在不等于 locomotion controller 允许应用接管腰部；固定高举双臂会改变质心，公开资料没有证明现有步态控制器会补偿。手调腰俯仰或 kp/kd 不能替代固件/模式/关节所有权合同。
- 已执行：2026-08-27 发布源码级回复，要求按 stock walk→站立小幅双臂→相同姿态行走→单臂/双臂递增→官方确认后的腰实验逐级验收；记录 q/dq、IMU、足力、温度、mode_machine、weight 和命令时序，并设置躯干/足接触/模式/新鲜度 interlock。
- 技术页推广：专题页上线后只编辑原有评论追加关节所有权/五级验收链接，没有新增重复留言；GitHub 个人主页首行也新增该专题入口。
- 商业匹配：同时覆盖 G1 机械臂集成、底盘/步态协同与搬运任务验收；若 stock walk 通过而任何有意义的臂位移都失败，缺口可能是协调式 loco-manipulation/WBC，而不是简单角度或增益。
- 当前状态：等待复现者或宇树维护者确认准确 G1 版本、固件、Regular/Running 模式、腰/臂所有权与支持的质心范围。
- 留言：https://github.com/unitreerobotics/unitree_sdk2_python/issues/146#issuecomment-5431347786
- 底稿：docs/outreach/unitree-g1-arm-while-walking-comment.md

### Ros2SLAM：Go2-W + L2 Point-LIO 点云/TF 漂移

- 对方需求：真实 Go2-W 搭载宇树 L2，Point-LIO 初始点云正常，随后 TF 姿态不同步并严重漂移；仅改了 `/utlidar/cloud`、`/utlidar/imu` 订阅和官方外参，Fast-LIO 还遇到消息结构不一致。
- 源码判断：该仓库有独立 `unilidar_l2.yaml`/launch；L2 预处理按 `ring:uint16 + time:float32` 解码并把 `time` 当逐点相对秒。仅 remap 话题不能证明 Go2-W 内置 `/utlidar/cloud` 的字段、类型、单位与外部 L2 SDK 的 `/unilidar/cloud` 合同一致。外参还必须核对 IMU→LiDAR 方向，不能只核对绝对数值。
- 诊断单元：固定 L2 配置，录制静止 10 秒与低速直行 5–10 秒的 cloud/IMU/TF；核对 header 单调性、频率、逐点字段、IMU 静止模长、单一 TF 发布者，并用同一 cloud 的 KISS-ICP 将点云问题与 IMU/时间/外参问题分离。
- 代码缺陷线索：`standard_pcl_cbk()` 用完整时间比较，却把 `last_timestamp_lidar` 写成整数秒；默认 `con_frame: false` 时未把它直接认定为本次根因，但开启合帧会污染帧间时间，需单独修复验证。
- 已执行：2026-08-27 发布源码和官方 L2 数据合同对照，给出最小 rosbag/日志清单，并提出可在 Go2-W 导航集成侧做配置明确的对照，不宣称已复现对方故障。
- 当前状态：等待对方提供固件、驱动 commit、PointCloud2 fields、TF 发布者和最小静止/直行证据。
- 留言：https://github.com/ShineMinxing/Ros2SLAM/issues/4#issuecomment-5430901771
- 回复底稿：docs/outreach/ros2slam-go2w-pointlio-diagnostic.md

### autonomy_stack_go2：Go2 EDU IMU 坐标、点云倾斜与地图复用

- 对方信号：该 Go2 EDU 自主导航栈有 500+ stars、70+ forks，多名真实用户持续报告 RViz 点云倾斜、静止漂移、导航旋转/丢目标、保存 PCD 后无法冷启动重定位；Issue #27 仍开放，2026-05 仍有人建议为单机手调 Euler 角。
- 源码审计：`transform_everything.py` 硬编码 LiDAR pitch、IMU yaw、Y/Z 翻转与 15.1° 旋转；不同固件的静止原始 IMU Z 已出现 `-9.8`/`+9.8` 差异。回调先发布完整 `/transformed_raw_imu`，随后把姿态改为单位四元数、线加速度清零后发布 `/transformed_imu`，而 Point-LIO 配置恰好订阅后者，并同时声明 `use_imu_as_input`/`imu_en` 为 true、gravity 为零。
- 时间风险：节点只在第一帧点云上计算一次 wall-clock 偏移，随后同样加到所有 cloud/IMU stamp，默认假设长期稳定且两源同钟；需用静止、慢速 yaw、短往返 bag 验证偏移、坐标与漂移，不能靠 RViz 看起来水平认定正确。
- 地图边界：保存 `scans.pcd` 只证明点云文件写出；仓库没有完成的“冷启动→固定地图重定位→重复航点”合同，不应把 PCD 保存等同于可复用巡逻地图。
- 已执行：2026-08-27 在 Issue #27 发布源码级审计，要求维护者确认 raw frame 与 gyro-only `/transformed_imu` 是否为有意设计；确认后可帮助形成参数化/自检 PR，并留下 GitHub 主页联系方式。
- 地图复用审计：真实机器人 launch 每次启动在线 Point-LIO；没有加载 `scans.pcd` 的定位节点，也没有完成的 `/initialpose`/`map→odom` 合同。唯一 `mapFile` 读取器只读取仿真/可视化 `map.ply`，并在真实 launch 中被注释。已在专门讨论 3D 地图导航的 Issue #19 明确“保存 PCD≠加载地图≠冷启动重定位”，提出 map-generation、定位质量、freshness 和 restart→localize→checkpoints 验收单元。
- 当前状态：等待维护者或受影响用户提供准确固件/SDK、bag 和设计意图；未在其 Go2 上运行该仓库。
- 留言：https://github.com/jizhang-cmu/autonomy_stack_go2/issues/27#issuecomment-5431150652
- 地图复用留言：https://github.com/jizhang-cmu/autonomy_stack_go2/issues/19#issuecomment-5431197610
- 底稿：docs/outreach/autonomy-stack-go2-imu-transform-audit.md
- 地图复用底稿：docs/outreach/autonomy-stack-go2-fixed-map-localization-audit.md

### unitree-go2-follow-system：UWB 跟随 + YOLO 目标接近安全合同

- 对方信号：近期作者公开发布大学 Go2 真机 Demo，将 UWB 用户跟随、YOLO 目标检测、APPROACH/HOLD/FOLLOW 状态机组合，明确征求真实 Go2 用户对控制、UWB 可靠性、急停和目标接近行为的批评；12 天前仍回复 Go2 Air 兼容问题，账号活跃。
- 源码审计：UWB 只保存最后消息、没有单调接收时间，`error_state`/`enabled_from_app` 未使用；UWB 停更后应用会继续以 25 Hz 发送旧的非零估计。相机返回 `None` 时视觉循环跳过，但 APPROACH 的旧速度仍由另一个线程持续发送；目标丢失按帧数而非墙钟时间计数。
- 急停缺口：UWB X 键回调只打印并在 0.1 秒后 `os._exit(0)`，直接绕过 finally 中的 `Move(0,0,0)`、`UseRemoteCommandFromApi(False)` 和线程清理，不能在没有固件特定物理停止证据时称为安全急停。
- 限幅缺口：配置中的 `MAX_VX=0.40` 与 `SMOOTH_ALPHA` 没有进入最终命令；FOLLOW 可发送 0.9 m/s、APPROACH 可发送 0.8 m/s，共享 behavior 字典也不是原子 generation。
- 已执行：2026-08-27 创建该仓库首个 Issue，提出单一 Move 命令仲裁器、来源 generation/新鲜度、最终物理限幅/斜率、统一 STOPPING 状态、无 `os._exit` 的确认式清理，以及 UWB/相机/目标/RPC/信号/异常故障注入矩阵。
- 事实边界：明确为源码审查，未在其大学 Go2 上运行；Go2-W 只能作为独立兼容轨道，不能替代标准 Go2 证据。
- 当前状态：等待作者确认固件、SDK、`Move()` TTL/停止合同和是否接受 scoped safety PR。
- Issue：https://github.com/orisharabi/unitree-go2-follow-system/issues/1
- 底稿：docs/outreach/unitree-go2-follow-system-safety-audit.md

### unitree-mojo：G1 模型绑定与物理硬件验证

- 对方信号：2026-08-27 刚创建并持续推送的 BSD-3-Clause 项目，为 Unitree SDK2 构建版本化 C ABI + Mojo 1.0 绑定；现有 Go2 Sport/LowState、Docker/CI/Mock/watchdog 已有实现。路线图 Issue 明确要求 B2/G1/H1 各自独立客户端、模型特定限幅/watchdog，并在 README 标支持前做物理硬件验证。
- 可信度：不是空路线图；已发布 `v0.2.0`，加入 PointCloud2 perception、C++ bridge、Mojo wrapper、固定 SDK2 commit、Docker CI 与 mock。仍属早期，需要继续用代码和 HIL 证据判断采用价值。
- 共用安全缺口：现有 `ready` 在任何 fresh LowState 前即为 true，状态永不过期；`StopMove()` 失败时仍解除 watchdog，watchdog 本身先清 armed 再单次停止且失败不重试；`move_for()` 也在 stop 失败后解除备份。Mock 不覆盖 generation、stale state、clamp、stop failure 或析构顺序。
- G1 边界：官方 G1 `LocoClient::SetVelocity` 是含 duration 的 request/reply `Call()`，不能复用 Go2 `SportClient::Move()` 语义；G1 使用 `unitree_hg::LowState_` 及固件特定 FSM/mode/control ownership，臂/腰 `rt/arm_sdk` 必须另设能力轨道。
- 已执行：2026-08-27 在 Issue #1 提出先修 generation-scoped stop-pending/stale-state 共用层；随后基于 `a1e7e1d` 实现 PR #10：失败的 `StopMove()` 保持 stop pending 并每 250 ms 重试，stop 结果按 generation 结算，pending 时拒绝新 Move/skill，并向 C ABI/Mojo 暴露查询。Move/STOP/skill 的 SDK 调用与 watchdog 转移统一在 `command_mutex → watchdog_mutex` 临界区，避免迟到结果解除新 watchdog。
- 验证：纯 C++ 状态机在 `-DNDEBUG -Wall -Wextra -Werror` 下通过，C mock ABI 编译通过；fork 上与上游相同的固定 SDK2 + Release Docker/Mojo workflow 对 `d14a462` 全部通过（run `33021541484`）。自动 review 提出的两项 P1 并发竞态和一项 P2 Release assert 问题已修复、回复并 resolved；对 `d14a462` 的最终复审未发现 major issue。
- 当前状态：PR 可合并，等待维护者复审/决定；`stop_pending=false` 只表示 SDK2 StopMove 成功，不表示物理停止，Go2 HIL 仍未运行。G1 扩展仍等待准确 23/29-DoF、固件和第一组 C ABI 操作；硬件入口上线后已将结构化表单与 YAML manifest 补到原进度评论，不再重复催促。
- 留言：https://github.com/wendylabsinc/unitree-mojo/issues/1#issuecomment-5431385572
- PR 进度回链：https://github.com/wendylabsinc/unitree-mojo/issues/1#issuecomment-5432143634
- PR：https://github.com/wendylabsinc/unitree-mojo/pull/10
- CI：https://github.com/lihuawei-topsun/unitree-mojo/actions/runs/33021541484
- 底稿：docs/outreach/unitree-mojo-g1-hardware-track-comment.md
- 进度底稿：docs/outreach/unitree-mojo-pr10-issue-followup.md

### SmartWay：Go2 + D435i 真实部署的 waypoint 偏差

- 对方需求：研究用户已把 IROS 2025 SmartWay waypoint predictor 部署到真实 Unitree Go2，使用 RealSense D435i，但多数预测航点不在正确路径，怀疑 depth scale/filter/normalization/alignment；Issue 自 2026-07 无人回复。
- 代码边界：公开仓库只有 Habitat/训练评估路径，没有论文所称 TurtleBot4+OAK-D 或 Go2 真机 adapter，因此无法从仓库复现“官方真实部署预处理”，需要维护者发布缺失桥接代码。
- 精确输入合同：Habitat-Lab v0.1.7 默认 depth 为 metric 0–10 m 裁剪并归一化 `[0,1]`；SmartWay 深度输入 256×256、HFOV 90°，depth encoder 不再做运行归一化。策略使用 `NUM_ANGLES=12` 并构造 12 个 RGB/depth 方向，不是单个前向 D435i 帧。
- 实机风险：RealSense raw uint16 需要按设备 depth_scale 转米，但某些 wrapper 已返回米，重复缩放会错误；还需 RGB-D 对齐、D435i 空洞处理、实际 HFOV/安装高度/俯仰、12 视角生成顺序/时间偏差，以及 camera→base 的角度手性/偏航变换。
- 已执行：2026-08-27 发布源码级 input-parity 流程，要求保存实际 12-view tensor、shape/dtype/range/histogram/invalid 比例，与 Habitat 样本对比，先在 camera frame 可视化 angle/distance，再验证 base-frame 转换和确定性 replay，最后才接碰撞/可达性与有界控制。
- 当前状态：等待对方/维护者提供真机 adapter、D435i profiles/内外参、预处理 tensor、depth histogram、checkpoint 和角度/距离转换；未运行 SmartWay 或驱动其 Go2。
- 留言：https://github.com/sxyxs/SmartWay-Code/issues/7#issuecomment-5431423660
- 底稿：docs/outreach/smartway-go2-d435i-depth-contract-comment.md

### sbgisen/go2_driver：SportModeState 脚里程计与 LIO 融合

- 对方信号：ROS 2 Jazzy Go2 driver 当天仍在开发，计划把 `/sportmodestate` 转为 `nav_msgs/Odometry`，用于未来与 LIO 的 robot_localization EKF 融合；明确需要实机确认 twist 符号/坐标，Issue #10 在 #1/#5 后实施。
- 已知语义：维护者与宇树官方示例均把 SportModeState position/velocity 描述为 odometry frame，但维护者进一步确认 position 为 world/odom 系、velocity 为 body 系；这符合 ROS Odometry 的 pose-parent/twist-child 结构，但不能只复制字段。
- 关键设计：使用原始 `SportModeState.stamp`，检测 stale/逆行；发布独立 `odom_leg` 作为传感器输入而不广播第二套 `odom→base_link` TF；检测重启/mode/StandDown/Recovery/位置 jump 的原点重置；pose/twist covariance 分离且从残差标定，初期优先 twist-only。
- 融合风险：leg odom 已用脚、足力和内置 IMU，LIO 也使用 IMU，全部 position/velocity/orientation 同时融合可能双重使用相关信息。LIO covariance 当前为全 0，也不能直接当作经过校准的高置信度。
- 已执行：2026-08-27 用日语发布完整 converter 参数建议和 HIL/replay 矩阵；提出 #1 merge 后做 code review/rosbag contract test，以及独立 Go2-W profile 验证。
- Go2-W 边界：轮式模式的接地、滑移、横速度与 yaw 估计不能继承标准 Go2 的脚 FK/covariance PASS，必须另设 profile。
- 当前状态：等待维护者确认 parent/child、reset/协方差策略和是否需要 Go2-W 独立轨道；未修改代码或运行实机。
- 留言：https://github.com/sbgisen/go2_driver/issues/10#issuecomment-5431595330
- 底稿：docs/outreach/sbgisen-go2-leg-odometry-comment-ja.md

### WorldForge / DimOS：Go2 Air 现场证据与独立 Go2-W 对照轨道

- 对方证据：真实 Go2 Air + DimOS + Memory2 现场验证保留准确环境、12,993 相机帧、1,404 onboard-SLAM clouds、16,825 odom、51,126 TF、地图 PCD/PGM 行数/像素完整性和 SQLite quick_check。公开区分 Air onboard-SLAM point cloud、静态地图导出与 raw L1，不伪称 EDU 表面。
- 安全价值：现场发现 viewer STOP 仅发一次零命令，planner 在 cooldown 后恢复约 -0.55 rad/s 旋转；作者已拆成 manual_only/STOP latch、watchdog、replay lifecycle、planner race 等小 PR，并报告具体测试数与未通过审查门。
- 可信度：作者长期 GitHub 账号、150 followers、Starknet/Hugging Face 背景，公开项目有 MIT 许可、真实代码/PR/硬件数据；不是只写概念宣言。仓库本身 0 stars/forks 且上游 PR 尚未提交，仍需按实际接受度判断投入。
- 已执行：2026-08-27 提出独立 Go2-W evidence profile：immutable config→read-only/no-motion→命令/STOP→跨平台对照；共享证据 schema，不共享 Air/Go2-W 结论。明确 wheel mode posture/readiness/velocity/slip/stop 独立，保留 not_available/not_validated 字段。
- 合作边界：只在准确配置、safety authority 和隐私边界确认后做 Go2-W manifest、STOP/watchdog review 或 bounded recording；不授权非零动作、固件/账号/网络变更或现场敏感数据公开。
- 当前状态：等待作者确认是否接受 Go2-W 独立轨道、冻结 schema/commit 和第一阶段 no-motion 证据。
- 留言：https://github.com/omarespejel/worldforge/issues/59#issuecomment-5431628876
- 底稿：docs/outreach/worldforge-go2w-evidence-track-comment.md

### FastCrest Tether：Unitree Go2 / Z1 机械臂动作空间

- 对方信号：Tether 是面向 VLA 机器人策略的开源部署与验证工具，公开将“增加 Unitree Go2 / Z1 preset、定义 Z1 机械臂动作空间”标为 `good first issue`。项目贡献指南还公开邀请生产/研究实验室成为 design partner。
- 代码审计：Issue 中的旧路径 `src/reflex/...` 已不存在；当前 preset 需要同时更新 `configs/embodiments/`、`src/tether/embodiments/presets/`、schema enum、emitter、`ALL_PRESETS` 和验证测试。现有 schema 是扁平 continuous action vector，包含范围、归一化、夹爪、相机、控制频率/horizon 和约束。
- 核心歧义：标题写 Go2/Z1，但任务只要求 Z1 JSON；必须先确认是 6 关节 Z1 arm-only，还是包含底盘 `vx/vy/vyaw` + 机械臂/夹爪的移动操作机器人。还缺准确 Z1/夹爪型号、关节顺序、命令模式、单位、硬限制、状态向量、停止/保持和真实数据归一化。
- 已执行：2026-08-27 发布源码级澄清，指出不能为了通过 schema 而虚构动作空间；说明可验证 Unitree 移动底盘与系统集成侧，但未声称拥有确切 Z1 型号。维护者确认配置与交付边界后再准备 scoped PR。
- 公开设计合作入口：项目 `CONTRIBUTING.md` 邀请生产/研究实验室 design partner，并公开邮箱 `playindus@gmail.com`。已准备主题为 `Unitree G1 / Go2-W hardware integration design-partner inquiry` 的定向草稿，内容明确未部署 Tether、未确认 Z1 访问，只提出一个 embodiment/action/safety/HIL 合同单元。
- 当前状态：等待 FastCrest 维护者确认 Issue 是否仍有效、arm-only/combined 方案、硬件型号和是否要求 runtime adapter/实机证据；邮件仍等待真实发件邮箱授权和逐封发送确认，未创建草稿或发送。
- 邮件草稿：docs/outreach/fastcrest-tether-design-partner.html
- 留言：https://github.com/FastCrest/tether/issues/69#issuecomment-5430165899

### unitree_ui：Go2 自动回充板检测失败排障

- 对方需求：Go2 能导航到充电站附近，但进入自动回充后反复出现 `TIMEOUT_DETECT`，无法重新定位并连接充电板。
- 代码与日志判断：该项目当前文档和实现把 `TIMEOUT_DETECT` 定义为雷达未识别/未对准充电板，发生在 `TIMEOUT_CONNECT_POWER` 触点连接失败之前；对方日志还出现过 `TIMEOUT_POINTCLOUD`，需要先排除点云链路不稳定。
- 已执行：2026-08-27 发布分层排障流程，要求先验证点云连续性、充电板点云几何和最终横向/航向误差，再小步调整默认 0.47 m 的 plate distance；同时请求确切机型、固件、雷达模式和最后一米点云记录。
- 身份边界：明确说明是独立 Go2-W/G1 集成者，不是该仓库维护者，也不隶属于宇树。
- 当前状态：等待对方上传点云/配置或回复；若收到证据，可继续做一次针对性的实机对比。
- 留言：https://github.com/legion1581/unitree_ui/issues/10#issuecomment-5429431732

### dimensionalOS：G1 实机导航与语言命令

- 对方需求：在真实 G1 上运行首个 agent，目标包含导航和简单语言命令。
- 匹配依据：G1 二次开发方向与已有自主导航经验；但尚未验证 dimos，因此留言中明确没有把框架描述成已跑通。
- 已执行：2026-08-26 公开给出安全的最小落地顺序，并提出硬件集成协作。
- 状态：等待回复。
- 留言：https://github.com/dimensionalOS/dimos/issues/3579#issuecomment-5427390692

### vLLM-Omni：Unitree 实机硬件在环验证

- 对方需求：机器人策略托管 RFC 已有仿真评估入口，但明确缺少真实机器人 rollout，并把 LeRobot/Unitree G1 列为下一步真实机器人覆盖方向。
- 匹配依据：具备 G1、Go2-W 实机二次开发与自主导航 Demo，可验证 observation/action contract、停止/超时边界和真实硬件失败状态。
- 已执行：2026-08-26 公开提出一个窄范围、可记录的硬件在环矩阵单元，请维护者明确愿意接受的最小 policy × client 配对。
- 状态：等待维护者回复最小验收范围。
- 留言：https://github.com/vllm-project/vllm-omni/issues/3554#issuecomment-5427458691

### PSI0 / SONIC：G1 动作流中断与失联安全边界

- 对方需求：真实 G1 EDU + BrainCo 手在 PSI0/SONIC 部署时随机停止接收新动作；观测仍持续发送，机器人端重复最后一帧并偶发提示 `robot data late`。
- 代码判断：当前 RTC 客户端收到动作后只覆盖全局 action buffer，没有同时记录动作版本/接收时间；控制循环持续读取且不消费/清空该 buffer。WebSocket 只有在显式 close 时才清理运行状态，因此半开连接或静默响应中断可能持续重放过期动作。
- 已执行：2026-08-27 发布 fail-closed 建议：动作新鲜度预算、单调时钟、观测/动作序列号、latest-only 背压、失联进入零速度/全身保持，以及延迟、静默丢响应、硬断网的硬件在环验收矩阵。
- 事实边界：明确说明尚未在本地硬件上运行 PSI0，当前是基于公开代码和日志的诊断；只有维护者确认安全保持 API 和超时预算后才建议做实机故障注入。
- 当前状态：等待维护者确认最小 HIL 验证单元或对方补充运行证据。
- 留言：https://github.com/physical-superintelligence-lab/Psi0/issues/95#issuecomment-5429517293

### xr_teleoperate：G1 1.5.3 高层行走 FSM 修订安全审查

- 对方证据：G1 EDU+ 29-DoF、软件 1.5.3 在 FSM 802 时对 `SetFsmId(500)`/`SetVelocity()` 返回 0 但不动作；提交者在真机观察到可行路径为 damp(1)→stand(4)→501，并创建 PR #312 将其放入 `LocoClientWrapper` 启动流程。
- 源码风险：`--motion --input-mode controller` 构造 wrapper 时会无条件触发物理 damp/站起/501；所有 `SetFsmId` 返回码和 `GetFsmId` 状态被忽略；12 次确认失败后仅告警，仍返回可调用 `Move()` 的对象。`fsm_explore.py`/`wrapper_test.py` 的非零速度循环也没有 `try/finally`，EOF/中断可能跳过零速度和 damping。
- 已执行：2026-08-27 提交公开 review，要求精确固件/配置的显式操作员确认、状态确认式转换、失败时 zero/damp + raise、禁止构造可移动对象、测试脚本中断兜底，以及 happy path 之外的控制器丢失/进程中断验收记录。
- 事实边界：明确这是源码审查，未在 G1 1.5.3 上运行该 PR；不把提交者的单次真机可行路径推广到其他 G1 版本。
- 当前状态：等待提交者或宇树维护者回应；若其提供准确修订和失败路径日志，可继续给出 scoped patch 或硬件对照合同。
- Review：https://github.com/unitreerobotics/xr_teleoperate/pull/312#pullrequestreview-5035022625
- 底稿：docs/outreach/xr-teleoperate-pr312-safety-review.md

### Oya-Tomo / NaVILA：Go2 Zenoh 导航物理验证

- 对方需求：NaVILA 已在 Jetson AGX Orin 完成环境、依赖、配置和 4-bit 模型加载的 Stage 1–4；明确把机器人外 Zenoh E2E、安全故障矩阵和物理 Go2 验证列为 Stage 5–7 PENDING，并给出逐项 PASS/FAIL/BLOCKED/SKIPPED 报告标准。
- 独立接收器：`unitree-go2-zenoh-node` 通过 Zenoh 接收速度/姿态命令，用高层 `SportClient` 控制一个标准 Go2；当前 README 和代码搜索没有 Go2-W 专用合同或证据。
- 硬件边界：现有设备是 Go2-W，不能替代标准 Go2 的 Stage 7 PASS。共享部分 API 不足以证明轮式模式的 posture、state、command acceptance、TTL 和 stop/down 语义等价。
- 已执行：2026-08-27 提出两个可选合作单元：协助 Stage 5–6 的 robot-free Zenoh/安全矩阵，或由维护者明确批准后建立独立 Go2-W compatibility track。Go2-W 结果只报告为 Go2-W，不写入标准 Go2 通过表；非零动作前要求命令 watchdog、停止/下蹲所有权、单一发布者和物理遥控/急停闭环。
- 当前状态：等待维护者选择合作单元和冻结的 NaVILA/接收器修订；未改代码、未连接硬件、未执行运动。
- 留言：https://github.com/Oya-Tomo/NaVILA/issues/2#issuecomment-5430783727

### go2_ros2_sdk：Go2 Air 无越狱 WebRTC 能力边界

- 对方需求：真实 Go2 Air 用户使用最新固件，询问运行 `go2_ros2_sdk` 是否必须取得 root 或 jailbreak；GitHub Discussion 自 2026-02-23 创建后一直没有回答。
- 源码核验：当前 `main`（`b440609`）的 WebRTC 路径在外置计算机运行，来自 `go2-webrtc` / `unitree_webrtc_connect` 社区传输，不是官方 SDK2 客户端；固件 `>=1.1.15` 的 `data2 == 3` 握手需要机器人所属 Unitree 账号对应的单机 AES-128 key。
- 重要边界：WebRTC 可用不等于 Air 变成 EDU，也不证明官方 SDK2、低层关节控制、机载 SSH/root 或全部 EDU 传感器。当前 Python driver 的 CycloneDDS LowState/pose/LiDAR callback 仍为 `pass`，命令服务围绕 `WebRTCAdapter` 构造，主 launch 还使用 `cyclonedx` 与 README/config 的 `cyclonedds` 不一致，因此不能声称两条传输已功能等价。
- 已执行：2026-08-27 在 Discussion #232 回答 WebRTC 路径无需机器人 root/jailbreak，并给出 SKU/固件/commit 冻结、无动作连接、topic/stamp/frame/rate、断连重连和保守运动/停止五级验证；提醒不公开 AES key/账号凭据，附 Go2 版本确认页和配置级审查合作入口。
- 当前状态：评论已公开显示，等待 Air 用户提供脱敏无动作 manifest 或实测 topic；未接触其账号、密钥或机器人，也未执行刷机/越狱。
- 留言：https://github.com/abizovnuralem/go2_ros2_sdk/discussions/232#discussioncomment-18168211
- 底稿：docs/outreach/go2-ros2-sdk-air-no-jailbreak-comment.md

### Amber Handal / Go2-Inspector：建筑巡检时间证据与停止合同

- 项目信号：`Go2-Inspector` 有实际 C++/Python 实现，不是空 README；包含 Nav2→Sport bridge、frontier exploration、RTAB-Map、RealSense/SAM 检测、可重载数据库、2D/3D 标注地图和 PDF 比较报告。仓库当前无许可证、Issue 或 PR，最近代码提交为 2026-03-25，因此先按个人工程项目而非商业采购线索处理。
- 时间证据缺口：point cloud 与 odom/TF 分别在 callback 中改成主机 `now()`；camera sync 又把最新缓存的 RGB/image-info 与新到 depth 统一改成同一 `now()`。这会掩盖网络/队列延迟并制造“同时采集”外观，使 RTAB-Map、SAM 投影和比较报告无法证明观察发生在同一机器人姿态。
- 运动安全缺口：bridge 默认启动即发送 StandUp，只等待两秒而不要求 fresh/allowed SportModeState；0.5 秒本地 timeout 仅在进程存活时有效。explorer 的 STOP/timeout 只异步 cancel，未等待 cancel 接受、零速度或物理停止，timeout 后立即回到 EXPLORING，可能在旧 cancel 未确认时选择新目标。
- 已执行：2026-08-27 创建 Issue #1，建议保留 source/receive/corrected time 与 uncertainty，拒绝 stale pair，做静止/慢转/往返/注入延迟确定性 replay；运动侧改为 manual-only、显式授权、fresh state、单一 owner、独立 watchdog、stop-pending 和 cancel/零运动确认，并给出 SIGINT/SIGKILL/断网/旧命令/重启 HIL 矩阵。
- 事实边界：这是基于 `281ccca` 的源码审查，未在对方 Go2 上运行；Go2-W 必须单独验证 wheel-mode 时间、里程计和停止合同。
- 当前状态：等待作者确认是否接受 no-motion replay test 或配置明确的 STOP/watchdog patch；不在无许可证仓库直接提交代码。
- Issue：https://github.com/amberhandal/Go2-Inspector/issues/1
- 底稿：docs/outreach/go2-inspector-time-stop-issue.md

### Undaunted：Go2 Pro 安防队列可靠性合作邮件

- 对方信号：美国机器人安防公司公开运营 Unitree Go2 Pro 安防队列，工程岗位明确列出提高舰队在线率、Unitree 连接问题、服务器依赖、极端天气、安防载荷和长期自主巡逻；官网仍在持续发布实际巡逻与扩张内容。
- 匹配切入：不冒充美国现场求职者，提出中国侧 SKU/固件/SDK/网络配置冻结、连接与 command/STOP 故障复现、传感器/计算载荷接口、脱敏 recording contract 和版本回归验证。
- 当前状态：已形成发给公开工程联系人 `chris@getundaunted.com` 的 HTML 草稿内容，并新增与其公开问题直接匹配的英文 fleet reliability 页面；但飞书邮箱缺少 mail scope，已按 `lark-mail` 要求向用户展示授权链接和二维码，尚未创建飞书草稿、尚未发送，也没有绕过授权。LinkedIn 在 Chrome 与应用内浏览器均要求登录，也未绕过认证。
- 草稿：docs/outreach/undaunted-go2-fleet-reliability-email.html

### UnLeash-Lite：Go2-W 1.0.30 独立无动作兼容轨道

- 对方信号：真实 Go2-W 用户在固件 `1.0.30` 上运行标准 Go2 `init-ssh` 失败；MIT 项目有 22 Stars、6 Forks，维护者在标准 Go2 1.1.14/15 真机上快速修复过 WebRTC/SSH 问题，并在 Issue #7 明确表示若能拿到 Go2-W 才可能支持。
- 源码边界：项目公开范围是标准 Go2 1.1.7–1.1.15，默认地址、WebRTC/programming actuator、hotkey、Python/sitecustomize 和 SSH target 都来自标准 Go2 假设。Go2-W `1.0.30` 不能缩写成“旧 1.0.3”，也没有证据证明它与标准 Go2 使用同一固件版本族、OS、服务或官方开发访问政策。
- 已执行：2026-08-27 在 Issue #7 建议停止重复 payload/旧方法，先做 exact product/firmware、官方访问文档、脱敏 `con_notify` shape、SDP media、WebRTC channel/service/topic、完整 debug trace 和回滚授权的 Stage 0 manifest；提供 Go2-W 独立 no-motion/no-payload 配置对照。硬件验证表单上线后，已将可下载 YAML manifest 补到原评论，并要求保持 `allowed_scope: read_only`、write/motion authorization=false。
- 安全边界：未运行 jailbreak、未上传/绑定程序、未修改固件/账号/网络，也不收集 AES key、token、序列号或客户站点数据。标准 Go2 PASS 不写成 Go2-W PASS。
- 当前状态：2026-08-27 09:29 原 Stage 0 评论被删除，09:30 维护者将 Issue 以 `NOT_PLANNED` 关闭，未接受 Go2-W profile、未索要配置或联系方式，也没有文字回复。该结果按明确不推进处理，不计作联系人；不重发、不重开、不私信、不申诉，也不运行任何 jailbreak/写入动作。
- 已关闭 Issue：https://github.com/a-bissell/UnLeash-Lite/issues/7
- 底稿：docs/outreach/unleash-lite-go2w-stage0-comment.md

### BrainCo：G1 双 Revo2 Touch 10–30 秒 OOM 隔离

- 对方需求：真实 Unitree G1 双 Revo2 Touch、双 RS-485/USB、SDK 2.0.2、ROS 2 Foxy 单进程集成在 10–30 秒内增长至 2–13 GB RSS 并 OOM，7/7 可重复；问题会拖垮同机其他服务。维护者已说明 getter 返回固定数组 Box、free 函数成对，要求确认实际 header/.so 并建立无 ROS 最小复现。
- 活跃度：BrainCo 仓库 24 Stars，2026-08-25 合并 PR #4 将官方 ROS 2 集成升级到 SDK 2.0.3；Issue #3 仍开放，升级本身还不能证明 OOM 修复。
- 已执行：2026-08-27 给出 A–F 隔离矩阵：单手 motor、单手 touch、单进程双手、双进程单手、仅构造 ROS message、加入 DDS publish；每格冻结 header/.so/executable hash、记录 `/proc/<pid>/smaps_rollup` 1 Hz、API 计数/错误并运行固定时长，只有最小正斜率格再用 heaptrack。
- 判定边界：C 泄漏但 A/B/D 稳定指向共享 SDK/global runtime；A/B 指向 getter/free 或设备路径；E 指向消息构造；仅 F 指向 DDS/backpressure。2.0.3 全稳则回到自定义 node 初始化/定时器二分，不能直接关 Issue。
- 安全补充：cgroup kill/restart 只是 containment；内存上限、stale state 或进程丢失时必须进入已定义 hand hold/open/disable、作废旧命令 generation，并要求新操作员授权。
- 当前状态：等待报告者用 2.0.3 和准确加载库重跑，或提供脱敏 smaps/heaptrack/minimal harness；硬件验证入口上线后已将结构化表单与 YAML manifest 补到原评论，降低对方整理成本。未持有该 Revo2 固件/SDK 组合，不声称升级已验证。
- 留言：https://github.com/BrainCoTech/unitree-g1-brainco-hand/issues/3#issuecomment-5432217895
- 底稿：docs/outreach/brainco-g1-dual-hand-oom-isolation-comment.md

## 社区触达

### Reddit：吉隆坡企业寻找 Unitree G1 开发者

- 对方信号：`u/badcookie911` 代表吉隆坡企业明确表示计划采购 Unitree G1，并主动寻找有 G1 实际经验、愿意参与项目的开发者；原帖发布后一直没有公开回复。
- 后续活跃度：该账号此后仍发布 G1 定制头部/硅胶面部相关问题，说明 G1 方向至少持续到约 10 个月前；这不能证明机器人已经采购或项目仍有预算，因此回复先询问当前状态，不假设成交阶段。
- 匹配依据：G1 实机二次开发、安防自主导航、传感器/载荷与机械臂侧集成均直接相关；中国侧远程工程与硬件验证可执行，吉隆坡现场工作则需先明确本地合作方和责任边界。
- 已执行：2026-08-27 通过用户已登录的 Reddit 账号发布首条公开回复，提出以“准确 G1/EDU 版本 + 固件 + 计算/传感器 + 一个物理任务 + 停止/接管/验收证据”为最小合作单元，留下 `li.huawei@topsunpower.cc`；没有销售网站链接，没有假设隶属宇树。
- 当前状态：评论已公开显示，等待原作者回复、私信或邮件；不重复追发。
- 评论：https://www.reddit.com/r/unitree/comments/1nzb5t9/comment/p632al9/
- 目标：https://www.reddit.com/r/unitree/comments/1nzb5t9/any_unitree_g1_developer_in_malaysia/
- 回复底稿：docs/outreach/reddit-malaysia-g1-developer-comment.md

### Reddit：Go2 Pro 商用版地图、航点与巡逻全部不可用

- 对方信号：近期真实机主使用 Go2 Pro Commercial V2.0、固件 V1.1.15、2026-01-28 出厂、官方 App/固件且未安装 ROS/SDK。行走、避障、LiDAR 点云和扫描流程可用，但地图创建/保存/重开、航点和巡逻均失败；已与宇树支持往返一个月并提供多段视频，仍没有日志、固件对比、恢复步骤或 RMA 判断。
- 商业匹配：现有设备的自主导航/巡逻业务被阻断，且用户已投入大量排查时间。可先提供状态证据矩阵；若官方 App 路径无法恢复，再单独评估外部计算/传感器/ROS 2 导航集成，但不能默认 Pro Commercial 暴露 EDU 或 Go2-W 的 SDK/DDS 合同。
- 已执行：2026-08-27 发布首条公开回复，要求把“点云可见、地图保存、冷启动后列表/加载、定位、航点/巡逻状态”分层记录；建议保持官方保修/支持路径，不 jailbreak、不擅自降级；留下 `li.huawei@topsunpower.cc` 供对方提供最小状态结果。
- 事实边界：明确没有测试其 Pro Commercial V2.0/V1.1.15，不用 Go2-W/G1 结果宣称配置等价；官方功能修复与外部自主导航是两个不同项目。
- 当前状态：评论已公开显示，等待原作者回复、私信或邮件；不重复追发。
- 评论：https://www.reddit.com/r/unitree/comments/1uheg45/comment/p6358ok/
- 目标：https://www.reddit.com/r/unitree/comments/1uheg45/unitree_go2_pro_commercial_3d_mapping_waypoints/
- 回复底稿：docs/outreach/reddit-go2-pro-commercial-mapping-comment.md

### Reddit / r/robotica：Go2 EDU + MID360 的 RTAB-Map/TF 时间错位

- 对方需求：Go2 EDU、Livox MID360、RealSense D435i、ROS 2 Jazzy 与 RTAB-Map；3D 点云/轨迹可见，但 `/map` 几乎全为 unknown，地图破裂/位移，`odom→base_link/base_laser` 出现 future extrapolation，`point_cloud_assembler` 因无法变换全部云而清空缓存。已尝试增大等待、关闭 expected rate、assembled cloud 和多组固定时间 offset，仍未解决。
- 源码依据：RTAB-Map ROS 2 的 assembler 对每个原始 cloud stamp 查询 `fixed_frame_id→cloud_frame`；TF 返回空即清空缓存。`wait_for_transform` 只等待有效变换，不会修复未来时间戳或漂移的双时钟；assembled cloud 会增加新的时间边界，不能替代原始 cloud/TF 合同。
- 诊断顺序：统一 `use_sim_time`/时钟；静止 30–60 秒记录 cloud/odom/TF 并确认单一 TF 所有权；只运行原始云+ICP odometry；再运行 RTAB-Map 并核对 `Grid/*`、local grid、Z 范围和有效 pose；最后才接 Nav2 与 D435i。
- 已执行：2026-08-27 发布西语首条回复，要求提供 MID360 driver/RTAB-Map/ROS 2 精确版本、view_frames、TF 发布者、20–30 个 cloud/odom stamps 和 launch/YAML；留下邮箱并明确未在其配置上运行。
- 当前状态：评论已公开显示，等待原作者回复、私信或邮件；不重复追发。
- 评论：https://www.reddit.com/r/robotica/comments/1rq6dxn/comment/p638jfm/
- 目标：https://www.reddit.com/r/robotica/comments/1rq6dxn/navegacion_autonoma_robot_go2_edu/
- 回复底稿：docs/outreach/reddit-go2-rtabmap-jazzy-spanish-comment.md

### Reddit：Go2 EDU 室内自主导航与辐射地图

- 对方需求：真实 Go2 EDU 项目面向 GNSS 缺失、杂乱实验室的室内导航/避障，后续挂载轻量辐射传感器并生成空间剂量地图；原帖和后续用户持续遇到点云倾斜、漂移、预建图后无法重复定位。
- 匹配依据：现有自主导航 Demo、路线/检查点闭环与传感器载荷集成能力可直接覆盖；正确最小顺序应为原始坐标/时间合同→固定地图重定位→1–3 检查点→停止恢复→带 map-generation ID 的辐射数据融合。
- 发布状态：2026-08-27 经用户明确确认，通过已登录 Reddit 账号 `u/Delicious-Major-750` 成功发布基于 `autonomy_stack_go2` 源码的定向回复；评论已在页面公开显示。此前两次限流失败均未创建评论，本次发布前已核对无重复内容。审计内容也已分别发布到该栈 GitHub Issue #27（IMU/TF）和 #19（地图复用/重定位）。
- 评论：https://www.reddit.com/r/unitree/comments/1novsbx/comment/p63k6f7/
- 回复底稿：docs/outreach/reddit-go2-radiation-navigation-comment.md
- 目标：https://www.reddit.com/r/unitree/comments/1novsbx/unitree_go2_edu_for_indoor_autonomous_navigation/

### Reddit：G1 ACT / Dex3 真机动作映射与 81 ms 抖动

- 对方信号：活跃 G1 EDU 用户将宇树 G1 Dex3 PickBottle 数据集训练为 ACT checkpoint，真机遇到 28D 状态维度、左右手索引和 30 Hz→约 12 Hz/81 ms 推理抖动，公开征求反馈。
- 拟议帮助：核对数据集/模型特征名与关节顺序；单关节映射测试；推理与固定频率执行解耦；latest-only action chunk、单调时钟新鲜度、过期进入 arm hold、安全的静止/单关节/低幅预录三步验收。
- 发布状态：2026-08-27 在已登录 Reddit 页面提交时连续返回“服务器错误，请稍后重试”，评论没有创建；已停止重试并清除未提交编辑器内容，不计为公开触达。随后把精力转到同类 G1 官方 `xr_teleoperate` PR #312 的可复核安全审查。
- 目标：https://www.reddit.com/r/UnitreeG1/comments/1t6c5q8/need_feedback_on_implementing_the_unitree_act/
- 草稿：docs/outreach/reddit-g1-act-control-jitter-comment.md

### Reddit：AI 公司获得约 2 万美元机器人预算

- 发布时间：2026-04-30；作者 `u/Living_Concert_241`。
- 对方需求：明确比较 Unitree G1 EDU、Go2 EDU 和 Booster K1；要求 ROS2、Python/C++、Orin、相机/视觉访问，并称可接受不完整软件但不希望硬件妨碍开发。
- 现有回答：仅一条 OpenArm 泛化推荐，没有覆盖 Unitree 版本边界、实机接口或采购验收。
- 风险：作者账号只有两条帖子、4 个月未互动，回复概率较低。
- 策略：准备纯技术选型/验收清单，不放网站或邮箱，先通过 Reddit 产生对话，降低广告过滤风险。
- 当前状态：暂缓。作者仅两条帖子且 4 个月未互动；已被更新、更匹配的工业质检目标替代。
- 目标：https://www.reddit.com/r/AskRobotics/comments/1t0508x/were_an_ai_company_and_we_just_got_budget/

### Reddit：工业质量控制与 AI 集成平台选型

- 发布时间：2026-08-25；作者 `u/PsychologicalEnd3927`，创业公司项目，预算不是约束。
- 对方需求：机器人在工业环境移动并执行质量检查；后续增加声学诊断、热成像；自研软件栈；比较 Unitree G1 EDU/H2 EDU 与 TIAGo Pro，也接受轮式/四足建议；关注自动充电。
- 活跃度：作者发布后持续回复，明确愿意听取其他方案。
- 现有回答缺口：没有把生产质检与人形研发拆开，也没有完整覆盖路线、自动充电、传感器时间同步、停止/恢复和业务系统输出验收。
- 策略：提供平台无关的生产/R&D 双轨建议和统一验收矩阵，不放网址或邮箱，先通过 Reddit 产生对话。
- 已执行：2026-08-27 通过用户已登录并明确确认的 Reddit 账号 `u/Delicious-Major-750` 发布生产/R&D 双轨建议和统一验收矩阵；未放网址或邮箱。
- 当前状态：评论已在登录会话中显示，等待原作者或社区回复。
- 评论：https://www.reddit.com/r/AskRobotics/comments/1vrme9a/comment/p624363/
- 目标：https://www.reddit.com/r/AskRobotics/comments/1vrme9a/choosing_a_robot_platform_for_industrial_quality/

### Reddit：G1 的 Nav2 社交导航仿真/实机一致性

- 发布时间：2026-08-02。
- 对方需求：已有 G1 硬件访问权和自定义 Nav2 社交代价地图，希望同一套导航代码覆盖仿真与实机，并确认速度接口、雷达、里程计和 TF 边界。
- 匹配依据：G1 二次开发与自主导航经验，可从实机集成和验收边界切入；对方是研究合作线索，不应按商业采购口吻回复。
- 已执行：2026-08-27 通过用户已登录并明确确认的 Reddit 账号 `u/Delicious-Major-750` 发布实机适配器、安全契约和 G1 硬件验证合作回复，包含网站与邮箱。
- 当前状态：等待原作者或社区回复。
- 评论：https://www.reddit.com/r/robotics/comments/1vdali3/comment/p61f9zp/
- 目标：https://www.reddit.com/r/robotics/comments/1vdali3/structuring_a_nav2_socialnavigation_stack_for/

### Reddit：Unitree cmd_vel 失联保护实机行为征集

- 目标社区：`r/unitree` 非官方 Unitree 社区；读取时显示约 576 名周访客、每周约 2 名贡献者，未显示额外社区规则，触达精准但规模有限。
- 内容方向：以 TinyNav PR #235 为公开代码证据，说明 steady clock、独立 safety client、motion generation、stop-pending 与 generation-scoped retry；明确 16 个 Python 3.10 测试和自动复审无 major issues 仍不等于实机通过。
- 征集信息：准确机型、固件、SDK、单次速度命令 TTL、发布者消失后的停止行为、G1 `SetVelocity(0,0,0)` 返回与物理停止时间，以及避免误停的 watchdog 预算。
- 风险控制：不放销售链接和客户案例，只链接上游 PR；提醒保守速度、清空区域和物理遥控/急停。
- 已执行：2026-08-27 经用户明确确认，通过已登录 Reddit 账号 `u/Delicious-Major-750` 创建技术帖。
- 当前状态：帖子创建成功，但页面立即显示“此帖子已被 Reddit 筛选器移除”，当前不可计为公开触达；未擅自改文案规避过滤，也未联系版主申诉。
- 帖子：https://www.reddit.com/r/unitree/comments/1vz93pg/sourceauditing_a_failclosed_cmd_vel_watchdog_for/
- 草稿：docs/outreach/reddit-unitree-watchdog-post.md

## A 级：值得主动寻找项目承包方或集成商

### 中国移动宁夏：行业级四足巡检机器人采购计划

- 来源日期：2026-07-14
- 采购方向：轮足机器人用于办公大楼区域巡检；足式机器人用于数据中心变电站巡检；需要机器人管理、任务管控、巡检记录、安装调试和售后。
- 公开预估规模：861,061.95 元（不含税）。
- 适配度：高。与 Go2-W、自主导航、巡检平台和现场调试直接相符。
- 限制：正式投标偏向原厂或唯一代理商，并要求既往供货业绩；当前更适合联系投标方/集成商，提供导航与现场调试分包，而不是独立投标。
- 下一步：追踪正式询比结果和中选单位；准备“轮足办公楼路线 Demo + 数据中心检查点回传”联合交付说明。
- 来源：https://www.chinamae.com/purchases/01303cc204b5ec7ee7c1094814d45b29.html

### 野外管道四足机器人巡检应用调试

- 来源日期：2026-07-17
- 采购方向：上装集成、自研算法现场调试、威胁目标识别、异常检测、信息输出；农田、草地、林地、泥路和碎石斜坡多场景验证。
- 适配度：高，但 Go2-W 是否满足全部地形必须实测。
- 限制：原项目响应已截止；要求至少一项四足机器人调试/系统开发/数据服务业绩。
- 下一步：把该项目当作下一轮需求模板，主动寻找油气管道、长输管线、园区管廊的总包和现有机器人供应商；切入点是“现场应用调试分包”。
- 来源：https://www.chinamae.com/purchases/43f18eac36a9e652a44d17ce9002c6a4.html

### 中石油上海石化：智能机器人巡检系统开发信号

- 来源日期：2026-08（聚合页面显示近期公开招标）
- 采购方向：储运部智能机器人巡检系统开发。
- 适配度：中高。属于明确的软件与系统开发需求，可能需要与具备石化资质和案例的总包联合。
- 风险：目前只找到聚合页面，尚未核验原始公告、截止时间和资格条件。
- 下一步：下一轮搜索必须先找到中石油/招标平台原始公告，再决定是否外联。
- 来源：https://www.bidcenter.com.cn/zhaobiao/zbkeyw-102507-310100-1.html

## B 级：验证市场规格，但当前不直接投标

### 重庆园区四足巡检设备项目

- 公告日期：2026-08-14；投标截止：2026-08-21（已截止）。
- 已公开范围：机器人本体、双光云台、自动回充、自组网和巡检平台，最高限价 37.4 万元。
- 关键门槛：原厂/行业伙伴认证、ISO、至少 3 个已验收案例，不接受联合体。
- 结论：这类整包项目目前不适合独立投标，但非常适合向有资质的机器人厂商或集成商出售“导航、平台接口与现场联调”分包服务。
- 来源：https://www.qianlima.com/bid-622251056.html

### 中国铁塔浙江：多种四足机器人研究采购

- 公告日期：2026-05-14；项目编号 ZJZT-2026-13228。
- 公开预算：87.14 万元；采购大型轮足、中型四足、小型四足各一台，并要求交付后调试。
- 结论：研究型采购会同时比较多种底盘，说明“跨本体适配与二次开发”可以独立成服务；需继续查中选单位并寻找合作入口。
- 原始来源：https://ebid.chinatowercom.cn/zgtt/gggs/003001/20260514/dc210884-f4f2-4bd2-ae85-2d1af20952d2.html

## 已确认的市场规律

1. 客户采购的是“路线 + 检查点 + 传感器 + 告警/回传 + 管理平台 + 现场调试”，不是单独的机器人动作演示。
2. 大型采购通常要求原厂授权、资质和历史案例；当前更现实的商业模式是给总包/原厂/集成商做二次开发与现场联调分包。
3. Go2-W 的轮足形态适合办公楼、园区道路和有台阶/坡度的半结构化环境，但所有现场参数必须测试后再承诺。
4. G1 二次开发要明确版本；宇树公开资料指出 G1 EDU 支持二次开发，普通 G1 不支持。

## 排除 / 不触达

### UnLeash-Lite：Go2-W WebRTC jailbreak

- 对方需求：Go2-W 1.0.30 的 `init-ssh` jailbreak 执行失败；维护者表示自己没有 Go2-W，拿到设备才可能支持。
- 决策：不触达。该目标是绕过设备访问限制/获取 root，不属于安防导航、机械臂、传感器或获授权的实机集成验收；不为获客目的参与越权或安全绕过。
- 来源：https://github.com/a-bissell/UnLeash-Lite/issues/7

### HNL-ULTIMATE-2026：所谓 90 天 G1 硬件验证合作

- 公开声明：账号声称拥有 Jetson AGX Thor、43-DoF G1、35.5 ms 控制、无线供能与政府 MSME 注册，并寻找硬件实验室伙伴。
- 核验结果：Issue 正文中的所谓核心控制代码只对 NumPy 向量执行 `tanh`、阈值判断和 `clip`，与传感器到执行器控制、CAN/DDS、G1 关节或实时调度无直接实现关系。
- 证据质量：全部评论由同一账号连续发布，主要为宣言、图片和未经独立验证的技术/搜索排名声明；没有可复现仓库、硬件状态日志、示波器原始数据、G1 视频、第三方审查或真实协作者。公开主页网址还包含空格，无法作为有效组织入口。
- 资质边界：即使 UDYAM/MSME 注册真实，也只能说明主体注册，不能证明机器人、延迟、供能或控制栈指标。
- 决策：不回复、不发送邮件、不提供 G1/Go2-W 硬件或实验室访问，不把它计入潜在线索；除非未来出现独立可验证的硬件与工程证据。
- 来源：https://github.com/HussainNilporiLegacy/MSME-Govt.-of-India-UDYAM-WB-13-0148319-/issues/1
