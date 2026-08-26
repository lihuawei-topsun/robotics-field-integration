# Open collaboration: Unitree G1 / Go2-W real-hardware validation and field integration

I work on real-hardware secondary development for Unitree G1 and Go2-W. I already have an autonomous-navigation demo for security patrol scenarios and can integrate robotic arms, cameras, LiDAR and field sensors.

This discussion is an open contact point for teams that have a real robot workflow, an open-source stack that lacks hardware access, or a project that needs China-side integration and field validation.

## What is available now

- Unitree G1 / Go2-W secondary development and hardware integration;
- an existing security-patrol autonomous-navigation demo;
- route, waypoint, arrival event, data-return and human-takeover integration;
- robotic arm and sensor-payload integration;
- code/log review plus bounded hardware-in-the-loop acceptance design.

The public website uses visual concepts, not customer-site images. A public demo video has not yet been added, so I do not use generated imagery as proof of field performance.

## Good first collaboration shapes

### 1. Open-source hardware-in-the-loop validation

Your project supports G1, Go2 or Go2-W in simulation or declarations but lacks a real-hardware result. We define one narrow observation/action contract, stop/failure behavior and a recorded test cell.

Current example: [TinyNav Unitree cmd_vel watchdog PR #235](https://github.com/UniflexAI/tinynav/pull/235). Its Python 3.10 pure-logic tests pass, but maintainer review and hardware validation are still pending.

### 2. Security or industrial inspection pilot

Start with one real route, 1–3 checkpoints, one sensing action and one alert/data-return loop. Ground, stairs, slopes, lighting, network and recovery conditions must be confirmed before making performance claims.

### 3. Arm or sensor payload integration

Define the exact arm, payload, power, compute, communication interface, physical task and safe-stop behavior. Manipulation is accepted separately from locomotion and navigation.

### 4. Joint delivery

Robot vendors, system integrators and project contractors can use this capability for Unitree-side software, route validation, sensor integration and on-site debugging. Customer ownership, safety responsibility and acceptance evidence must be explicit.

## Send this minimum context

- exact robot model and edition;
- firmware, SDK, onboard/external compute and network interface;
- cameras, LiDAR, arm and other payloads;
- the first physical workflow, route and checkpoint;
- current failure trace or missing capability;
- required stop, recovery and acceptance behavior;
- country/site constraints and preferred collaboration model.

Do not publish confidential factory drawings, precise sensitive locations, credentials or personal data in this public discussion. Send protected material by email only after both sides agree on the scope.

## Evidence boundary

- Independent integrator; not affiliated with Unitree Robotics.
- No 24/7 uptime, accuracy, endurance, IP rating, explosion-proof or safety-certification claim without configuration-specific evidence.
- Public code review is not presented as completed hardware validation.
- AI-generated or illustrative images are never presented as customer deployments.

Engineering notes: https://lihuawei-topsun.github.io/robotics-field-integration/engineering-notes.html  
Project inquiry: https://github.com/lihuawei-topsun/robotics-field-integration/issues/new?template=project-inquiry.yml  
Email: **li.huawei@topsunpower.cc**

---

## 中文简介

面向宇树 G1 / Go2-W 实机二次开发、安防与工业巡检导航、机械臂/传感器集成、开源项目硬件在环验证和机器人项目联合交付。

建议从一个可验收结果开始：一条真实路线、1–3 个检查点、一次采集动作和一次告警/数据回传闭环。请提供准确机型、固件、计算模块、传感器、现场约束、当前问题和停止/恢复要求。

公开讨论中请勿上传保密图纸、敏感厂区位置、账号或个人信息。联系邮箱：**li.huawei@topsunpower.cc**。
