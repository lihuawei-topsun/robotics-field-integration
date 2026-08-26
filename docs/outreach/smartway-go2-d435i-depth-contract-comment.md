I audited the released code to reconstruct the model's input contract. The public repository does not contain the TurtleBot/OAK-D or Go2 real-world adapter, so the exact deployment preprocessing cannot be reproduced from this repo alone. The maintainer would need to publish that missing adapter for a definitive answer.

What the released training/evaluation path does show:

- Habitat-Lab is pinned to v0.1.7. Its default depth sensor clips metric depth to `MIN_DEPTH=0.0`, `MAX_DEPTH=10.0` and, with `NORMALIZE_DEPTH=True`, converts it to `[0,1]` as `(depth-min)/(max-min)`.
- SmartWay sets depth to `256×256`, HFOV `90°`; the depth encoder receives `[batch, 256, 256, 1]` float input and has no additional running normalization.
- `MODEL.NUM_ANGLES=12`, and the policy constructs RGB/depth observations for twelve camera orientations before waypoint prediction. This is a panoramic multi-view contract, not a single forward D435i frame.
- The simulator camera pose comes from Habitat defaults unless overridden. A Go2-mounted D435i has a different height, pitch, optical frame, HFOV/intrinsics and occlusion pattern from the reported TurtleBot4/OAK-D setup.

For D435i, first inspect the actual adapter output rather than assuming units. Raw RealSense depth is commonly integer depth units requiring multiplication by the device's `depth_scale`, but some wrappers already return meters. Convert exactly once to float meters, align/rectify depth to the intended RGB view, clip to the model range, then normalize to `[0,1]`. Log min/max/percentiles and the percentage of zero/invalid pixels before and after each step. The released model has no invalid-depth mask, so D435i holes left as zero become an additional distribution shift.

The larger issue is view geometry: document how the twelve orientations are produced on the real robot (physical yaw sweep, multiple cameras, or another panorama method), their order, timestamp skew and camera extrinsics. Repeating one front frame twelve times or feeding only one view cannot match the waypoint model's angular bins. Also verify that predicted angle/distance bins are transformed from the model camera frame into the Go2 navigation frame with the correct handedness and yaw convention.

I suggest an offline parity test before any motion:

1. save the exact twelve RGB/depth tensors reaching the model plus metadata;
2. compare their shape, dtype, range, HFOV/view order and histograms with a known Habitat sample;
3. visualize every predicted angle/distance in the camera frame, then after the camera→base transform;
4. replay the same tensors deterministically and confirm identical waypoints;
5. only after parity, pass candidates through collision/navigability checks and a bounded robot controller.

Please share the real-world adapter code, D435i stream profiles/intrinsics/extrinsics, one preprocessed 12-view tensor set, depth histogram, checkpoint commit and the angle/distance conversion. Avoid uploading private site imagery if it is not necessary.

I work on real-hardware Unitree G1/Go2-W navigation and camera/sensor integration and can help compare this adapter contract or design a bounded Go2 validation, but I have not run SmartWay on your Go2 and would not present its TurtleBot result as Go2 evidence. Independent integrator; not affiliated with Unitree or SmartWay. Contact details are on my GitHub profile.
