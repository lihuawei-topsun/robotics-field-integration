I may be able to help with the G1 hardware track, provided we keep the exact robot edition/firmware and SDK revision explicit. I reviewed the current Go2 bridge first; the versioned C ABI and model-specific module direction are sensible, but I would close a few shared safety gaps before copying the pattern to G1.

## Shared bridge gates

- `ready` becomes true immediately after client/subscriber construction, before any fresh LowState or service/readiness evidence. Readiness should require a fresh model-specific state generation and should expire when the subscriber becomes stale.
- `unitree_mojo_stop()` disarms the watchdog even when `StopMove()` fails. The watchdog thread also clears its armed state before one StopMove attempt and does not retry/retain a stop-pending state on failure. An unconfirmed stop must remain stop-pending rather than silently returning to “safe.”
- `move_for()` likewise disarms its backup after the synchronous StopMove attempt regardless of the result.
- Mock coverage currently returns success for commands but does not exercise the real watchdog generations, stale state, clamping, stop failure or destructor ordering.

These should become a reusable safety layer with generation-scoped command/stop state, bounded retry policy, and explicit `confirmed_through`/stale-state evidence before adding more robots.

## G1 should not reuse Go2 command semantics

The official G1 C++ `LocoClient::SetVelocity(vx, vy, omega, duration)` uses request/reply `Call()` and carries a duration; Go2 `SportClient::Move()` has different semantics. G1 also uses `unitree_hg::LowState_` and model-specific FSM/mode/control-ownership paths. Please use a separate `G1Client` and C ABI surface rather than adapting the Go2 symbols.

For the first G1 slice I suggest:

1. freeze Unitree SDK2 commit plus exact G1 edition (23/29 DoF), firmware and network interface;
2. compile/mock client creation and typed `unitree_hg::LowState_` ABI;
3. read-only HIL: require consecutive fresh states, expose tick/mode_machine/IMU/foot-force/battery and verify stale-state expiry; no actuation claim;
4. query/document FSM, API version and control ownership without changing state;
5. only after the supported firmware transition is confirmed, test zero velocity/stop and then one conservative bounded nonzero cell with physical remote/e-stop and a clear area;
6. record request/reply status, state timestamps, first physical response, duration expiry and confirmed stop.

Do not hard-code a G1 FSM from a single firmware result. Public G1 reports already show firmware-specific differences where SDK calls can return success without changing the physical state. The README should remain “hardware validation pending” until the exact trace above passes.

Arm/waist control should be a later, separate G1 capability because `rt/arm_sdk` ownership while walking is not equivalent to high-level locomotion and remains configuration-sensitive.

I work on real-hardware Unitree G1/Go2-W integration and can help review/implement this narrow G1 state + high-level locomotion unit or run a bounded configuration-specific validation. Please choose the frozen SDK commit, target G1 edition/firmware and first accepted C ABI operations; I will not use a different G1/Go2-W result to claim blanket G1 support. Independent integrator; not affiliated with Unitree. Contact details are on my GitHub profile.
