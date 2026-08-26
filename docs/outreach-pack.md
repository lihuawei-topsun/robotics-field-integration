# 首轮定向推广素材

## 给机器人厂商 / 集成商

主题：可承接宇树 G1 / Go2-W 自主导航与现场巡检联调

你好，我在做宇树 G1、Go2-W 的二次开发，已经有安防场景自主导航 Demo，也能继续集成机械臂和现场传感器。

我不是销售机器人本体，比较适合补齐项目里的工程环节：路线与检查点配置、导航联调、数据回传、告警接口、机械臂/传感器集成和现场验收支持。

如果你们手上有四足/轮足机器人项目，但缺少现场软件与联调人力，可以先拿一条真实路线做技术对齐。能力与流程见：

https://lihuawei-topsun.github.io/robotics-field-integration/

联系：li.huawei@topsunpower.cc

## 给工厂 / 园区 / 物业安防负责人

主题：先用一条巡检路线验证机器人是否适合你的现场

你好，我在做宇树 Go2-W / G1 的现场二次开发，已有安防自主导航 Demo。

我们建议不先讨论“买一台机器人”，而是选一条人工重复巡检路线，明确 1–3 个检查点和一种回传/告警方式，用现场测试判断地面、坡度、网络和任务是否可行。若现场需要，还可以继续集成机械臂或传感器。

如果你愿意，我可以先根据路线视频或平面图给出试点拆解。说明页：

https://lihuawei-topsun.github.io/robotics-field-integration/

联系：li.huawei@topsunpower.cc

## 30 秒 Demo 视频脚本

1. 0–4 秒：真实现场与任务标题——“一条安防巡检路线”。
2. 4–10 秒：机器人建图/定位后从起点出发，画面叠加真实路线，不写准确率。
3. 10–18 秒：绕障并到达检查点，展示相机/传感器采集结果。
4. 18–24 秒：展示远程回传、异常复核或人工接管界面。
5. 24–30 秒：回到结束点；字幕“从一条路线、一个检查点、一次告警闭环开始”，展示网站和邮箱。

## Reddit G1 Nav2 研究协作回复（待发布确认）

I am working on real-hardware secondary development for Unitree G1 and Go2-W, and I already have an autonomous-navigation demo for security patrol scenarios. Your separation above and below `/cmd_vel` is also the boundary I would preserve, but I would make the hardware adapter an explicit, testable package rather than assuming the built-in interface is transparent.

For the first real-hardware slice I would validate: command rate and watchdog behavior, deterministic stop, velocity/acceleration limits, odom/TF continuity, sensor timestamps, and goal-completion tolerances. Only after those pass would I compare the same Nav2 graph in simulation. This keeps a locomotion or timing fault from looking like a social-costmap problem.

I am interested in collaborating on the G1 hardware validation side if the project is still active. I can share the exact interface evidence from a real navigation route rather than only a simulation recommendation. Independent integrator, not affiliated with Unitree: https://github.com/lihuawei-topsun/robotics-field-integration — li.huawei@topsunpower.cc

## 发布前检查

- 使用真实 Demo 画面，不用 AI 生成图冒充现场。
- 不出现客户 logo、人员正脸、厂区敏感位置或未经许可的监控画面。
- 不承诺 24/7、检测准确率、续航、防爆或防护等级，除非有当前配置测试证据。
- 每一条外联都指出对方的具体场景；不群发“我们做机器人二开”。
