# Blocker — Background Stairwell · Windows playtest

A doorway beside the decorative spilled blocks now opens onto a shallow background stairwell: seven matte steps, a dark handrail and a small baked warm sconce. The ceiling rises with the stair pitch, with more than 2.1 m headroom above each visible tread. Clean edge-to-edge frame joins remove coplanar overlap. An invisible solid barrier prevents entry, and an opaque end wall limits the view.

Automatic text contrast now waits **1.2 seconds** for a sustained brightness change and fades smoothly over **0.9 seconds**. A hysteresis band suppresses threshold flicker; unscaled timing keeps the same pace in paused menus and slow motion. Manual White / Dark choices remain fixed.

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

Unity 6000.5.5f1, source **a81ad78**. **62/62 EditMode tests passed**, including contrast timing/noise and the doorway barrier, frame joins, sloping ceiling and tread headroom checks. All four code assemblies compiled and the Windows release build passed. The room was rebaked (revision 15, one lightmap, 859 probes) and the final standalone GPU review passed, with doorway context/detail renders visually inspected. Gameplay had **30/30 PlayMode tests** on e12c818; physics tests were not repeated for this fixed background geometry change. Manual walking against the entry barrier remains a client playtest item. The subjective transition feel remains a user-client playtest item. Shader GI acceptance checks the opaque meta pass and indirect light even in shaded probes. Fixed-camera renders retain the same room occlusion when realtime shadow distance is reduced. With VSync enabled, 30 / 60 caps measured 29.95 / 58.97 FPS. Full hidden-window IMGUI captures are unavailable, so final text layout and interaction remain user-client playtest items.

Foliage shading is a subtle wall-only projected approximation. The existing temporary tree mesh is retained; this lighting/material pass does not claim to match the reference photograph exactly. Dynamic wood samples baked room probes and does not rebake room color bleeding. Continued rounds retain their local best but cannot resume the original server upload ticket after restart; new rounds retain the anonymous highscore flow.

## Download

Windows x64: **Blocker-Windows-x64-2026-10-02-a81ad78.zip** — **195,184,789 bytes**.
SHA256: `f5a890a4cd4d7377a4a8535e65eec556063e17775a44b7af41c2ce1dec8c4cfc`.
All 184 archived player files were hash-checked and ZIP CRC-checked. Player profiles, identities and pending scores are not included.

The macOS download remains the **01 Oct preview, 9c6daf4**. No Mac build was requested for this update. That existing preview is not notarized and device testing is pending.
