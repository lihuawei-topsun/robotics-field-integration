# 搜索发现与提交记录

更新时间：2026-08-27

## 已部署

- `robots.txt` 公开允许抓取并引用 `sitemap.xml`。
- `sitemap.xml` 包含默认、中文 `?lang=zh` 和英文 `?lang=en` URL。
- 页面包含 canonical、hreflang、动态语言标题/描述/OG URL。
- 页面包含 `ProfessionalService` 与 `FAQPage` JSON-LD，内容仅使用已确认能力和独立服务免责声明。
- IndexNow 所有权密钥文件：`/0b32949b850c428d8d4d5b5b16646db3.txt`。
- 可重复提交脚本：`scripts/submit-indexnow.sh`。

## IndexNow 记录

- 2026-08-27 首次批量提交返回 HTTP 202：请求已接收，密钥等待验证。
- 确认公开密钥文件内容与提交密钥一致后再次提交，返回 HTTP 200：IndexNow 已成功接收 URL 集合。
- 2026-08-27 网站新增可下载能力一页纸后，按内容变更再次提交，返回 HTTP 200。
- 2026-08-27 新增工业质检机器人选型专题页，将其加入 sitemap 与 IndexNow URL 集合。
- 2026-08-27 新增 G1 行走机械臂关节所有权与验收技术页，将其加入 sitemap 与 IndexNow URL 集合；提交返回 HTTP 200。
- 2026-08-27 新增 Go2 Air/Pro/X/EDU/Go2-W 二次开发版本确认页，将其加入 sitemap 与 IndexNow URL 集合；页面只保留官方相对标记，并将具体权限留作订单与实机验收；部署后提交返回 HTTP 200。
- 2026-08-27 新增英文 Unitree fleet reliability validation 服务页，覆盖连接 generation、命令新鲜度、confirmed STOP、传感器原始时间、故障注入和版本回归；未使用虚构在线率或舰队数据；部署后提交返回 HTTP 200。
- 提交 URL：默认首页、中文 URL、英文 URL、sitemap。

注意：HTTP 200 只证明搜索引擎收到 URL，不保证抓取、收录或排名。
