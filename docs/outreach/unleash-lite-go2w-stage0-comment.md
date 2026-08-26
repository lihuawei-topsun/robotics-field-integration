One version clarification first: `1.0.30` should not be shortened to `1.0.3`. There is no evidence in this issue that Go2-W `1.0.30` belongs to the standard Go2 firmware sequence supported by this repository.

The current repo explicitly targets standard Go2 firmware `1.1.7–1.1.15`. Its `init-ssh` path also assumes the standard Go2 LAN/WebRTC/programming-actuator surface, hotkey behavior, filesystem/Python initialization paths and SSH target. The Go2-W may share some Unitree messages while still using a different product firmware, service set, wheel-mode controller and official development-access policy.

I would therefore stop retrying the payload or applying an older Go2 method. “Failed to execute the code” is not enough to distinguish an incompatible API, rejected program, different OS/filesystem, missing hotkey service or a partially changed boot state.

Before any compatibility work, I suggest a **read-only Stage 0 manifest**:

1. exact Go2-W product/hardware revision, region and the full firmware string shown by the official app or supported API;
2. official delivery documentation for SSH/root/developer access — do not assume Go2-W requires a jailbreak;
3. LAN addresses/ports and the redacted `/con_notify` response shape (`data2`, field names and SDP media sections only; no AES key, token, serial or account data);
4. WebRTC channel labels and a read-only list of advertised services/topics, without uploading or binding a program;
5. the exact UnLeash commit, command/mode and complete debug trace from connection through the first nonzero error;
6. a recovery/rollback path approved for this exact firmware before any write is attempted.

That evidence would let the maintainer decide whether Go2-W needs a separate transport/profile or should remain explicitly unsupported. A standard Go2 PASS must not be copied to Go2-W.

I work on real-hardware Unitree G1/Go2-W field integration and have access to a Go2-W for configuration-specific validation. I can help prepare a separate **no-motion, no-payload** Go2-W manifest or compare a sanitized handshake/topic trace, provided the allowed read-only operations and data-removal rules are agreed first. I will not run a jailbreak, change firmware/account/network state, or expose device credentials as part of a generic compatibility claim.

Blank redacted manifest: https://lihuawei-topsun.github.io/robotics-field-integration/assets/unitree-validation-manifest-template.yaml. For this Stage 0, keep `allowed_scope: read_only`, leave write/motion authorization false, and use `null`/`pending` for unknown fields.

Related configuration-boundary checklist: https://lihuawei-topsun.github.io/robotics-field-integration/unitree-go2-edition-development-checklist.html

Independent integrator; not affiliated with Unitree or this repository. Contact: li.huawei@topsunpower.cc.
