I implemented the first shared safety gate from the earlier review in #10: https://github.com/wendylabsinc/unitree-mojo/pull/10

The PR does **not** add G1 support or claim physical HIL. It keeps failed `StopMove()` calls `stop_pending`, retries them every 250 ms, scopes completion to the issuing generation, rejects new motion/skills while pending, and exposes the state through the C ABI and Mojo wrapper. Move, STOP, skill and watchdog transitions now share one serialized command boundary.

The initial automated review found two P1 races and one Release-test problem; all three were fixed and resolved. The updated pinned SDK2 + Release Docker/Mojo workflow passed on commit `d14a462`: https://github.com/lihuawei-topsun/unitree-mojo/actions/runs/33021541484. Final automated review reported no major issue.

This still only treats a successful SDK2 `StopMove()` as protocol-level confirmation. Physical stop time, stale LowState expiry and exact G1 mode/FSM ownership remain separate HIL work. If you want to continue the G1 track after reviewing #10, please choose the target 23/29-DoF edition, firmware, frozen SDK commit and first accepted C ABI operations; I can keep the G1 result configuration-specific.

Structured hardware-validation request: https://github.com/lihuawei-topsun/robotics-field-integration/issues/new?template=hardware-validation.yml. Blank redacted manifest: https://lihuawei-topsun.github.io/robotics-field-integration/assets/unitree-validation-manifest-template.yaml. A public request can omit all serials, IPs, credentials and private endpoints; unknown fields should remain `null`/`pending`.
