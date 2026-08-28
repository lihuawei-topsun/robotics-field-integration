Thanks @gaolebaigao — coordinating makes sense. I agree we should not start two competing presets before the maintainer resolves the target contract.

Proposed split after maintainer confirmation:

- **You:** own the schema-compatible preset, enum/registry/emitter updates and validation tests.
- **Me:** own the hardware/system contract review: exact Z1 + gripper variant, action/state ordering, units and source-backed ranges, base/arm command ownership, control frequency and stop/hold evidence. I can also prepare a configuration-specific validation manifest for the mobile-base side.

Decision gate for @DsThakurRawat / FastCrest:

1. Z1 arm-only or combined Go2 + Z1 embodiment?
2. Exact Z1/gripper model and command mode?
3. Is the deliverable preset + schema tests only, or does it also require a runtime adapter and hardware trace?

If the answer is **arm-only**, one PR authored by you with my hardware-contract review should avoid duplication. If it is **combined**, I suggest keeping the flat dataset/action schema separate from the runtime ownership adapter, and keeping Go2 and Go2-W as different hardware validation profiles. I do not have the exact Z1/gripper configuration yet, so ranges and normalization should remain blocked until a source or trace is selected.

I will not open a competing implementation while we wait for that decision. Once the maintainer confirms the three items above, please tag me and I can turn the hardware side into a concise review checklist or follow-up commit.
