実装前に、`SportModeState` → `nav_msgs/Odometry` の契約を先に固定した方が安全だと思います。PR #1 のメモにある「position は world/odom 系、velocity は body 系」という整理は、ROS の `Odometry` と相性があります。`pose` は `header.frame_id`、`twist` は `child_frame_id` の座標系なので、例えば親を `odom_leg`、子を `base_link` とし、body 系 velocity を twist に入れる設計が自然です。

ただし、次の境界を明示したいです。

1. **timestamp** — `now()` ではなく `SportModeState.stamp` を ROS time に変換する。stamp の逆行、受信遅延、一定時間の stale を検出し、古い状態を再 publish しない。
2. **TF ownership** — `odom_leg` は EKF のセンサ入力として publish し、この converter 自身は `odom→base_link` TF を broadcast しない。LIO、EKF、既存 driver が同じ child の TF を同時 publish しない構成にする。
3. **pose reset** — 再起動、sport mode 切替、StandDown/Recovery、位置 jump、stamp 逆行で position 原点が変わるか実機確認する。reset を検出したら diagnostic/event を出し、absolute pose をそのまま EKF に流し続けない。
4. **covariance** — 根拠のない小さい固定値を default にしない。最初は twist-only fusion を推奨し、pose/twist covariance は独立パラメータ化する。値は stationary、直進、旋回、往復、滑り/軟地盤の残差から決める。LIO 側 covariance が全 0 のままなら、そちらも「校正済み高信頼」として融合しない設定が必要。
5. **correlation** — SportModeState は脚、足裏力、内蔵 IMU を使う推定値なので、position/velocity/orientation を全部 LIO と融合すると同じ IMU 情報を二重に使う可能性がある。EKF config では独立性が高い成分だけ選ぶ。

最小実装パラメータ案:

- `publish_leg_odom` (default false)
- `leg_odom_parent_frame`, `leg_odom_child_frame`
- `use_msg_stamp`, `state_stale_timeout_ms`
- `publish_pose`, `publish_twist`
- pose/twist 6×6 diagonal covariance
- mode/gait allowlist、reset jump threshold
- `publish_tf` は default false（可能なら converter では非対応）

実機 acceptance は、60 秒静止、低速直進、左右旋回、短い往復、mode 切替、再起動、足滑り/持ち上げ、LIO が劣化する低特徴環境で行い、source stamp、position、body velocity、IMU yaw、LIO residual、reset event を同時記録したいです。EKF 導入前に rosbag replay で frame/sign/covariance を deterministic に確認できます。

Go2-W は同じ IDL を使っていても、wheel mode の接地・滑り・横速度・yaw 推定は標準 Go2 の脚 FK と同じと仮定できません。標準 Go2 の PASS を Go2-W に流用せず、別の hardware profile と covariance/acceptance を持たせるべきです。

私は Unitree G1 / Go2-W の実機ナビゲーション統合を行っています。標準 Go2 の代わりにはなりませんが、#1 merge 後の converter design/code review、rosbag contract test、または独立した Go2-W profile の実機確認には協力できます。独立インテグレーターで、Unitree 公式ではありません。連絡先は GitHub profile にあります。
