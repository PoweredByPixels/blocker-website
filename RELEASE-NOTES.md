# Blocker · Four construction worlds

Windows x64 · 03 October 2026 · source 2ce4d6f.

- Creative: freely build with wood against a toggleable Triumphal Arch, Cologne Cathedral or Eiffel Tower silhouette. G toggles the guide, B changes the landmark, Escape → Done evaluates coverage and outside construction from three views.
- Wooden Railway: straights, left/right curves, bridge ramps and a little wooden locomotive. Tab cycles parts, click snaps to an open endpoint, R changes the attaching end, F removes/reuses, T starts/pauses the train.
- Magnetic Tiles: transparent coloured squares and equilateral triangles with matching 15 cm edges. Tab changes shape, wheel chooses an edge, R folds in 90° steps, click connects and F removes.
- Each world saves separately; Continue restores the construction. Q/Y view heights and F1 remain available. Tower keeps its physics and leaderboard. A combined world is planned for later.

Validation: 92 EditMode tests and the full 51 PlayMode tests passed. After the timber-material correction, all six workshop PlayMode tests passed. Windows release build passed. Standalone GPU captures of all three guides, a 10-part railway with locomotive and a seven-part magnetic house were inspected. Save integrity and plastic shader support passed. The diagnostic camera capture was corrected after inspection; native IMGUI typography and subjective snap/control feel still need a client playtest. No claim of manual acceptance of those interactions.

All 184 player files were verified by SHA-256 and ZIP CRC.

File: **Blocker-Windows-x64-2026-10-03-2ce4d6f.zip** · **195,221,803 bytes**.

SHA-256: `57d33079076c75b177a8475e5f719be663b7a0b1c64ceeb52dd4dfbb2677cf38`

The previous macOS Tower preview is unchanged and does not contain these new modes. No Mac rebuild; awaiting on-device testing, not notarized.
