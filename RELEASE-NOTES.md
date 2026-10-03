# Blocker · Physical construction

Windows x64 · 03 October 2026 · source f1a6ba8.

- Railway: short / standard / long straights (7.5 / 15 / 30 cm), 45° curves (eight form a circle), ramps and left/right switches. Eight starting rotations. Visible 1.8 mm end gaps, bevelled edges and recessed wheel grooves.
- Each rail is a dynamic body connected with about 5° of angular play. Hold right mouse / controller LT to pull anywhere in the connected track. C changes the entry connector, K sets an aimed switch, F removes/reuses a piece, T starts/pauses the train. Rail connections hold under load and detach with F; the locomotive follows the moving rail path.
- Same-gender ends get a separate 2 cm adapter automatically: turquoise double-female for two male ends, orange double-male for two female ends. Preview and placement include adapter collisions and the building boundary. Existing aligned 2 cm gaps can also be bridged.
- Magnetic tiles: transparent square, equilateral, tall and wide isosceles triangles with denser rims, internal ribs and embedded edge magnets. Shift + wheel gives 5° fold steps. Flexible or unequal-edge matches are amber in the preview. Unsupported tiles fold under gravity; overloaded links can release.
- Sunlight through magnetic tiles colours the floor with a moving polygon filter, combining overlapping colours and respecting opaque blockers. This is an artistic floor transmission approximation, not spectral refraction or full coloured GI.
- Creative landmark guides, independent world saves, Q/Y view heights and F1 remain available. The combined world is planned for later.

Validation: all 100 EditMode and 64 PlayMode tests passed. Windows release build and standalone GPU checks passed. The player verified a pulled 11-piece railway (10 joints retained, 5.87 cm displacement), both adapter genders (six bodies/four joints), and an unsupported magnetic arm falling from 15.35 cm to 0.15 cm. Actual renderer captures were visually reviewed. Arranged magnetic-house/detail captures are material studies, not proof that those constructions stand freely. Native IMGUI controls and subjective interaction still require a client playtest.

Known issue: the previously reported Windows crash during interactive closing is still under investigation. The automated player exit completed cleanly; it does not establish that the interactive crash is fixed. Existing saves are preserved, but old 90° railway layouts are not automatically rebuilt into 45° layouts.

All 184 player files verified by SHA-256 and ZIP CRC.

File: **Blocker-Windows-x64-2026-10-03-f1a6ba8.zip** · **195,236,548 bytes**.

SHA-256: `3230f332c2eab599d559803d1f88cb3e688fe03e7d1cf1e73a35d5162532d766`

The previous macOS Tower preview is unchanged. No Mac rebuild; awaiting on-device testing, not notarized.
