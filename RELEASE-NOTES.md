# Blocker — Tower Save & Continue · Windows playtest

The Windows playtest now saves your active Tower automatically on exit. Choose **TOWER → CONTINUE** to return to it, or **NEW GAME** to start again. The main menu shows your saved construction instead of the wooden rain.

- Take one of 18 textured shelf crates with **E / controller X**, place it, stack it and step up. Placing a crate returns the tool to wood.
- Separate contact pads clarify where a block rests. The normally invisible rectangular building area shows only an exceeded edge when a placement is outside it.
- Taller stacks settle with revised TGS physics. Pieces remain physical and can topple; there is no hidden support or glue.
- **WORLD** settings group wood, wall and floor. New profiles default to Slate Stone, Polished Concrete and Auto text color.
- Smoother rounded glass panels, quieter menu rain without timed removal, reduced haze and subtler local floor reflections. Baked room bounce light and light probes improve the dark corner.
- **GLOBAL HIGHSCORES**, an editable welcome name, and a VSync-compatible frame cap.

Extract the complete ZIP and launch **Blocker.exe** with its data folder and DLLs alongside it. Controls, build manifest and applicable licenses are included. F1 hides the interface and preview block for screenshots.

## Validation

Unity 6000.5.5f1, source **f2f6705**. **58/58 EditMode and 28/28 PlayMode tests passed**. Windows release build and standalone renderer checks passed; 30 alternating layers / 60 blocks reached rest and responded to a physical impulse. With VSync enabled, measured 29.94 / 59.21 FPS at 30 / 60 caps. World renders and GPU glass inspected. Full hidden-window UI captures were black, so final UI interaction remains a user playtest item.

Continued rounds keep their local best but currently do not upload a new online score after restart because the original server run ticket is not persisted. Fresh rounds retain the existing anonymous-auth highscore flow. Dynamic towers receive indirect room light through probes; they do not rebake room color bleeding.

## Download

Windows x64: **Blocker-Windows-x64-2026-10-02-f2f6705.zip** — **194,861,053 bytes**.
SHA256: `5f28fd17a3b767aa6318069b339e250851970377ddc9f975f96995f4a341b93f`.
Every one of the 184 archived player files was hash-checked and ZIP CRC-checked. No profiles, identities, pending scores or secrets are included.

The existing macOS Universal download remains the **01 Oct preview, 9c6daf4**. It was not rebuilt with this update. Mac device testing is pending; that preview is not notarized.
