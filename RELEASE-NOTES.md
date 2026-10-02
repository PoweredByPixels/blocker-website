# Blocker · Height modes and precise placement

Windows x64 playtest, 03 October 2026 · source 203c92a.

- **Q / E** lowers / raises the view through **Crawl → Crouch → Stand → Reach**, one shelf-crate height per step. The camera moves smoothly; headroom collision prevents raising into furniture or ceilings. Controller: D-Pad down / up.
- **F** picks up or swaps wooden blocks; controller **X** keeps that role. Crate pickup and tool controls are paused; visible crates and saved crate positions remain.
- **R / controller Y** changes orientation and resets both placement offsets, the locked anchor and controller offset modes.
- **Continue** restores the chosen height. Older saves still load; New Game starts at Crawl.
- Narrow pieces can reach a lower tile or floor between higher supports. A support plane requires actual overlap with a supporting piece; flat bridges still work.
- **Your Tower Is Waiting** has hover highlighting and side rails for Continue, New Game and Back.

**Validation:** 68/68 EditMode and 46/46 PlayMode tests passed. This includes real keyboard input, height bounds, smooth camera movement, unchanged feet position, headroom, save/continue and older saves, parked crate pickup, both lower-gap placement regressions and existing tower physics. Windows release build and standalone GPU lookdev passed. All 184 packaged player files were verified by SHA-256 and ZIP CRC. Native menu hover and subjective camera feel remain user playtest checks.

Extract the complete ZIP and start **Blocker.exe**, leaving the data folder and DLLs alongside it. Controls, file manifest and applicable licenses are inside. F1 hides UI and the cursor block. Existing local records and Tower autosave remain; resumed runs keep their local best but cannot resume their original online upload ticket after restart.

Windows: **Blocker-Windows-x64-2026-10-03-203c92a.zip** · **195,189,435 bytes**.

SHA-256: `347848b7ed929756aba9fa7730092282080f20f9454897b0009e443f053c2816`

The previous macOS preview is unchanged; no Mac build was requested for this update.
