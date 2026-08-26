# 待确认发布：r/unitree 技术主帖

目标社区：https://www.reddit.com/r/unitree/

## Title

Source-auditing a fail-closed cmd_vel watchdog for Unitree Go2-W/G1 — looking for hardware behavior

## Body

I work on real-hardware secondary development for Unitree G1 and Go2-W, including an autonomous-navigation demo for security patrol scenarios.

While preparing a source-only Go2-W validation path for TinyNav, I found that its Unitree bridge forwarded non-zero `cmd_vel` to `Move()` but had no independent last-command watchdog. The upstream planner stopped on a stale path while it was still alive, but a silent publisher/DDS failure at the bridge boundary was a different case.

I opened a patch and iterated it through automated review. The current design now:

- arms before every non-zero motion attempt;
- uses a steady-clock timer, independent of ROS time;
- sends stop through an independent short-timeout safety client;
- handles the Go2/B2 no-reply `Move()` path separately from the G1 synchronous `SetVelocity()` wrapper;
- tracks motion generations so a late old command is followed by a compensating stop;
- keeps explicit zero commands stop-pending until stop is confirmed;
- prevents an old failed stop from delaying a newer command deadline or re-arming an already stopped bridge.

There are 16 focused Python 3.10 tests, and the latest automated review reported no major issues. The PR is still waiting for human maintainer review and hardware validation:

https://github.com/UniflexAI/tinynav/pull/235

I do **not** want to present source review as a real-robot result. I am looking for configuration-specific evidence from Go2/Go2-W/G1 owners or integrators:

1. Does your firmware enforce a time-to-live for a single `Move()` / velocity command?
2. What stop behavior do you observe when the command publisher disappears but DDS/network remains partly alive?
3. For G1, what does the exact `SetVelocity(0,0,0)` response and physical stop timing look like on your firmware?
4. What watchdog budget is realistic for your normal command rate without false stops?

If you can share the exact model, firmware, SDK revision and a bounded state trace, I can compare it against the current contract. Any motion test should use conservative limits, a clear area and a physical remote/e-stop.

Independent integrator; not affiliated with Unitree or TinyNav. Contact details and the full source-bounded preflight are available from my GitHub profile.
