# Blocker — Calm Atelier · Windows playtest

Warm mineral plaster returns to the window architecture and alcoves. Stone is reserved for two calmer accent walls. Three trees now stand near the windows, while subtle soft foliage shading stays on the walls and the central floor remains quiet.

- Warm-neutral daylight, six-bounce baked GI, 859 light probes and baked static shadow masks retain room shadows at every camera distance. Dynamic wooden blocks keep crisp realtime cast shadows.
- The ceiling has its own matte finish; black tracks remain black. Normal building gameplay has no depth of field. Floor material and restrained local reflection settings are unchanged.
- Open crates use a bottom and four physical walls, with no invisible lid. Wooden blocks cannot be placed on them; crates still stack and work as steps. Aim at a shelf crate and press **E / controller X** to pick it up from up to 2.4 m away.
- **Shift + WASD** walks faster. The decorative spilled pile is pre-simulated until all 65 pieces sleep, then ships as fixed decoration.
- The welcome name stays on one line and entry is limited to 24 characters.
- Compact result panels keep the tower central: **THIS RUN**, height, snapshot time / blocks and **YOUR BEST** are separate. **RETRY** is primary; a small leaderboard retains your own row and opens saved towers.
- Existing Tower autosave / Continue, build-area limits, contact pads, online highscores and World finishes remain.

Extract the complete ZIP and launch **Blocker.exe** with its data folder and DLLs alongside it. F1 hides the interface and cursor block for screenshots. Controls, a file manifest and applicable licenses are included.

## Validation

Unity 6000.5.5f1, source **e12c818**. **58/58 EditMode and 30/30 PlayMode tests passed**. Windows release build and standalone GPU review passed. Shader GI acceptance checks the opaque meta pass and indirect light even in shaded probes. Fixed-camera renders retain the same room occlusion when realtime shadow distance is reduced. With VSync enabled, 30 / 60 caps measured 29.95 / 58.97 FPS. Full hidden-window IMGUI captures are unavailable, so final text layout and interaction remain user-client playtest items.

Foliage shading is a subtle wall-only projected approximation. The existing temporary tree mesh is retained; this lighting/material pass does not claim to match the reference photograph exactly. Dynamic wood samples baked room probes and does not rebake room color bleeding. Continued rounds retain their local best but cannot resume the original server upload ticket after restart; new rounds retain the anonymous highscore flow.

## Download

Windows x64: **Blocker-Windows-x64-2026-10-02-e12c818.zip** — **195,022,858 bytes**.
SHA256: `a1f819ed0a43cd746685351ada7e847f441e7afc27c297442720615f8e0deb1f`.
All 184 archived player files were hash-checked and ZIP CRC-checked. Player profiles, identities and pending scores are not included.

The macOS download remains the **01 Oct preview, 9c6daf4**. No Mac build was requested for this update. That existing preview is not notarized and device testing is pending.
