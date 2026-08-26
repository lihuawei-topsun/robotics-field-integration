# 线索与市场信号清单

更新时间：2026-08-27

## 自有渠道发布

- 正式版本：Unitree G1 / Go2-W Field Integration v1.0.0
- 发布日期：2026-08-27
- 内容：中英文网站、工业质检选型指南、结构化询盘、四步试点与能力一页纸附件。
- 永久链接：https://github.com/lihuawei-topsun/robotics-field-integration/releases/tag/v1.0.0
- 事实边界：Release 明确独立集成商身份、配置/现场验证边界和 AI 图片非客户案例。
- 转化入口优化：2026-08-27 将 GitHub 个人资料主链接改为能力网站，个人主页首屏增加网站、工业质检选型指南和结构化询盘入口；主仓库补充 industrial-inspection、field-robotics、quadruped-robot、humanoid-robotics 等精准检索标签。
- 技术内容入口：2026-08-27 上线 G1 / Go2-W 工程笔记集合，首批包含网络控制动作新鲜度/fail-closed 安全边界与 Go2 自动回充 `TIMEOUT_DETECT` 分层诊断。页面直接链接公开源码修订与 Issue，明确标注代码事实、工程推断和待实机验证；未把第三方问题描述为客户案例。
- 工程笔记：https://lihuawei-topsun.github.io/robotics-field-integration/engineering-notes.html
- 公开合作讨论：2026-08-27 启用自有仓库 Discussions，发布中英文长期合作入口，明确四类合作：开源项目实机验证、安防/工业巡检试点、机械臂/传感器集成、机器人厂商/集成商联合交付；包含最小上下文清单、保密提醒和能力边界。
- 讨论：https://github.com/lihuawei-topsun/robotics-field-integration/discussions/1

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
- 验证：watchdog、跨平台停止分发、迟到 generation 和未确认停止的 13 个 Python 3.10 测试通过，修改文件 Ruff 与语法编译通过；没有连接或驱动机器人。PR 当前开放，等待维护者审查默认预算和实机验收。
- 审查迭代：自动代码审查先后指出 Move 前启动/steady clock、非有限超时、共享调用锁阻塞、跨客户端乱序四类问题，已分别在 `e7493fe`、`e414eee`、`e5e6e39`、`3a4d1cb` 修复。第五次复审指出显式零命令在主 `StopMove()` 成功前就解除 watchdog；已在 `73527b1` 拆分 `request_stop`/`confirm_stop`，停止请求保持 watchdog 活跃，旧停止确认不能解除新 generation。所有 thread 已回复并解决，已触发第六次复审。
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

### FastCrest Tether：Unitree Go2 / Z1 机械臂动作空间

- 对方信号：Tether 是面向 VLA 机器人策略的开源部署与验证工具，公开将“增加 Unitree Go2 / Z1 preset、定义 Z1 机械臂动作空间”标为 `good first issue`。项目贡献指南还公开邀请生产/研究实验室成为 design partner。
- 代码审计：Issue 中的旧路径 `src/reflex/...` 已不存在；当前 preset 需要同时更新 `configs/embodiments/`、`src/tether/embodiments/presets/`、schema enum、emitter、`ALL_PRESETS` 和验证测试。现有 schema 是扁平 continuous action vector，包含范围、归一化、夹爪、相机、控制频率/horizon 和约束。
- 核心歧义：标题写 Go2/Z1，但任务只要求 Z1 JSON；必须先确认是 6 关节 Z1 arm-only，还是包含底盘 `vx/vy/vyaw` + 机械臂/夹爪的移动操作机器人。还缺准确 Z1/夹爪型号、关节顺序、命令模式、单位、硬限制、状态向量、停止/保持和真实数据归一化。
- 已执行：2026-08-27 发布源码级澄清，指出不能为了通过 schema 而虚构动作空间；说明可验证 Unitree 移动底盘与系统集成侧，但未声称拥有确切 Z1 型号。维护者确认配置与交付边界后再准备 scoped PR。
- 当前状态：等待 FastCrest 维护者确认 Issue 是否仍有效、arm-only/combined 方案、硬件型号和是否要求 runtime adapter/实机证据。
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

## 社区触达

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
