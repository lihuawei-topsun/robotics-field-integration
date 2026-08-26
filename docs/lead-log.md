# 线索与市场信号清单

更新时间：2026-08-27

## 自有渠道发布

- 正式版本：Unitree G1 / Go2-W Field Integration v1.0.0
- 发布日期：2026-08-27
- 内容：中英文网站、工业质检选型指南、结构化询盘、四步试点与能力一页纸附件。
- 永久链接：https://github.com/lihuawei-topsun/robotics-field-integration/releases/tag/v1.0.0
- 事实边界：Release 明确独立集成商身份、配置/现场验证边界和 AI 图片非客户案例。

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
- 当前状态：等待用户确认发布。
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
