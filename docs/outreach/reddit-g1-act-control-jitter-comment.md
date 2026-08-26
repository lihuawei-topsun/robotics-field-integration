The 28D and right-hand fixes are useful contract checks, but matching the length is not enough. Before another hardware run, dump the dataset/checkpoint feature names and exact joint order, compare every index with the live adapter, then do a conservative one-joint-at-a-time dry run before learned output owns all 28 channels.

For the 81 ms spikes, I would decouple inference from the fixed-rate actuator loop. Let inference publish complete chunks through a latest-only slot. The execution loop should own a finite/clamped action plus its monotonic receive time; a stale action must enter an explicit arm hold/safe pose, with no backlog catch-up. Replace each chunk atomically with a new generation, including its normalization and horizon position.

Log monotonic timestamps for observation, preprocessing, inference start/end, postprocessing, DDS send and joint-state receipt. P50/P95/P99 per stage will isolate GPU, synchronization/copy, Python scheduling or DDS. Also verify that ACT chunk/temporal-ensemble indexing advances against the execution clock rather than replaying an old chunk after an overrun.

I would test in this order: static/zero action, single-joint mapping, then a low-amplitude prerecorded chunk with remote/e-stop ready. Keep locomotion and arm command ownership separate.

If you share the exact G1 edition/firmware, SDK commit, Dex3 revision, policy/actuator rates and a short timing trace, I can compare the adapter/safety contract against another G1 integration path. Independent G1/Go2-W integrator, not Unitree. Contact: li.huawei@topsunpower.cc.
