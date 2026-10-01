# Blocker — Windows + macOS lighting playtest

An early Tower-mode prototype: build with wooden planks, find the balance, watch the collapse, and try again. Mouse/keyboard and controller supported. No Steam login required.

## Start

Extract the entire ZIP into its own directory. Windows: launch `Blocker.exe` and keep `Blocker_Data` and accompanying DLLs alongside it. macOS: open `Blocker.app` and keep the bundle intact. Choose TOWER. Detailed controls are in `START-HERE.txt`.

## Scope

Windows x64 and macOS Universal (Intel x64 + Apple Silicon, macOS 12+), non-development builds. Tower mode only. Local records work offline; shared scores use an anonymous device identity and nickname. No historical PB import. Prototype visuals, complex tower stability and large last-mile performance are still being refined.

This update adds baked room bounce lighting, 871 light probes, cool window skylight, cast/contact shadows and floor reflections restricted to interior objects. The name prompt now distinguishes an unconfirmed default `Builder` profile from a chosen nickname. Slow motion limits physics catch-up so the collapse can be watched before the stable-tower review.

Lighting remains a prototype: room bounce is baked; new towers do not recalculate indirect color bleeding between their pieces. Screen-space contact shadows have normal visibility limits. The temporary outside trees still need art refinement.

## Provenance

The archive is the already validated build from 2026-10-01, source revision `5f76297`; no additional Unity build was run for website publication. Validation: 48 EditMode tests and 18 PlayMode tests passed, plus GPU look-development checks of room lighting, local reflections and collapse slow motion. Website concept art is AI-generated and labelled; gallery images are real prototype captures. AI tools assist game code and some assets. Applicable font and surface licenses ship with the download.

Archive: `Blocker-Windows-x64-2026-10-01-5f76297.zip` (177,009,182 bytes).

SHA256: `ec36ca1a4c2a3f5361790aa9291e06ab6b2a7e68a2150ec6a32380be7ded47e2`.

184 player files; ZIP CRC and hash checked before upload. No device-identity, pending score, preference, fixture or environment files are included.

## macOS preview

Built from the same gameplay and lighting as Windows revision `5f76297`, with macOS build tooling revision `f01b40d`. Unity's Universal Mono release build succeeded and Metal shaders compiled. Verified the app identity, minimum OS, Intel x64 + arm64 executable/player slices, Unix executable permissions, all 185 app files and ZIP CRC/hash. No on-Mac runtime test has been performed; a friend playtest is planned. The preview is not Apple Developer ID signed/notarized. See [Apple's macOS opening help](https://support.apple.com/en-us/102445) if macOS refuses to open it.

Mac archive: `Blocker-macOS-Universal-2026-10-01-f01b40d.zip` (184,555,177 bytes).

SHA256: `94baf9a36ac96e13216e6e7d0ff120b0967e81b679a93517e9e24386aa9fdb35`.
