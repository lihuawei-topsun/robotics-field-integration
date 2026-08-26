PR #4 has now moved this repository to SDK `v2.0.3`, but I would keep this issue open until the reporter reruns the exact failing topology. A version upgrade is not yet evidence that the 13 GB/minute failure is fixed.

The maintainer's no-ROS binary is the right next step. I would make the isolation matrix explicit so one run can identify the layer instead of producing another ambiguous heap profile:

| Cell | Process topology | Calls | Rate | Purpose |
|---|---|---|---|---|
| A | one process, left only | motor status only | 10 Hz, then 20 Hz | baseline getter/free slope |
| B | one process, left only | touch status only | 10 Hz, then 20 Hz | isolate touch path |
| C | one process, both hands | motor + touch, sequential | 10 Hz, then 20 Hz | reproduce shared-runtime/dual-handle case |
| D | two processes, one hand each | same as C | 20 Hz | separate per-process state from hardware/load |
| E | C + ROS message construction, no publish | same | 20 Hz | isolate generated message/container allocation |
| F | E + DDS publish | same | 20 Hz | isolate middleware/backpressure/subscriber effects |

For every cell, freeze the header/library pair and record:

- SDK version, header SHA-256, loaded `.so` path/hash from `/proc/<pid>/maps`, and the exact executable hash;
- hand firmware/SN redacted consistently, port, slave ID and whether touch was enabled;
- RSS/PSS/anonymous memory from `/proc/<pid>/smaps_rollup` at 1 Hz, API call counts, failures/timeouts and process exit reason;
- a fixed duration (for example five minutes) or an explicit memory ceiling, not “until it looks stable.”

Run the lightweight `smaps_rollup` trace first. Then run `heaptrack` only on the smallest cell that still has a positive memory slope; profiling all ROS/DDS layers at once will add noise and may change timing. `LD_DEBUG=libs` or the `/proc` mapping is also important here because the repository moved from 1.1.9 to 2.0.3 while the report used a customized 2.0.2 binary.

Interpretation can then be deterministic:

- C grows but A/B/D stay flat → inspect shared SDK/global runtime or dual-handle serialization;
- A or B grows → getter/free or per-device SDK path;
- E grows after C is flat → message construction/copy path;
- only F grows → DDS queue/subscriber/backpressure or allocator retention;
- all cells stay flat on 2.0.3 → bisect the customized node around initialization and timers before closing the issue.

One field-safety addition: a cgroup kill/restart is useful containment, but the service should not restart into an active command state. On memory ceiling, stale state or process loss, enter a documented hand hold/open/disable state, invalidate the previous command generation and require a new operator authorization before resuming.

I work on real-hardware Unitree G1 integration and can help review a sanitized `smaps_rollup`/heaptrack bundle or the minimal dual-hand harness, but I do not have this exact Revo2 firmware/SDK combination and would not claim the upgrade is validated. Independent integrator; not affiliated with BrainCo or Unitree. Contact: li.huawei@topsunpower.cc.
