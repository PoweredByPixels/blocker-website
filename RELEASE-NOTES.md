# Blocker · Username hover and Q/Y height controls

Windows x64 · 03 October 2026 · source 795196e.

- Your main-menu username and edit pencil share a rounded frosted hover highlight. The underline strengthens on hover, and the whole highlighted area opens the name editor. It fits the name width and leaves the welcome label and menu selection independent.
- **Q lowers / Y raises** the view through Crawl, Crouch, Stand and Reach. **F** still picks up or swaps wood. **E has no gameplay action**, reducing accidental height changes near movement keys.
- Controller mappings remain: D-Pad down/up changes height, X picks up wood, Y changes block orientation. R / controller Y clears placement offsets. Crate input remains paused.
- Existing lower-gap placement fixes, saved-tower menu hover/rails, stance saving and older-save compatibility are retained.

Validation: all four assemblies compiled for the hover change. The real-keyboard PlayMode regression was rerun and passed on the Q/Y update, including E doing nothing, height limits, F pickup, R offset reset and parked crate controls. The preceding height-mode release passed the full 68 EditMode / 46 PlayMode suite; the full suite was not repeated for these small UI/key changes. Windows release build and standalone GPU lookdev passed. All 184 packaged player files were verified by SHA-256 and ZIP CRC. Native username hover appearance remains a user playtest check.

Extract the entire ZIP and start **Blocker.exe** with its data folder and DLLs alongside it. Controls, manifest and licenses are included. macOS remains the previous preview.

File: **Blocker-Windows-x64-2026-10-03-795196e.zip** · **195,189,578 bytes**.

SHA-256: `7b7f4636f0ff15d78f8f575e954b7ff98cbb35597a6af0b1e63a0cd24693bdd0`
