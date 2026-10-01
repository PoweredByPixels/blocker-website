# Asset provenance

## Current concept hero — v2

`public/assets/concept-hero-v2.png` and its compressed WebP derivative replace the original illustration. Edited with the built-in image generation tool on 2026-10-01, using the original hero as edit target and the user's chamfered wooden-piece image as a material reference. Target dimensions: thickness 0.5 cm, width 1 cm, length 13 cm (1:2:26). These are visual targets for generated concept art, not a measurement guarantee or a change to game physics. The original asset is retained unchanged.

Edit prompt:

> Edit target: Image 1 is our current website hero. Image 2 is a supporting reference for pale natural wood, tiny edge chamfers and flat plank construction, not for its background or text. Change ONLY the wooden building pieces and their physically corresponding shadows/reflections. Preserve Image 1's exact wide 16:9 composition, camera framing, darker grey-blue left wall with huge empty typography space, right alpine window and mountains, warm late afternoon lighting and quiet architectural mood. Critical correction: our pieces are THIN, LONG wooden slats, each 13 cm long, 1 cm wide, only 0.5 cm thick. Thickness : width : length = 1 : 2 : 26. Every piece must visibly have these extremely slender proportions. They must not look like thick Jenga bricks. Rebuild the tower on the right from many of these identical slender flat chamfered slats, perhaps approximately 70-100 layers, paired perpendicular opposing rails per alternating layer, yielding a delicate airy hollow lattice tower of comparable on-screen height to the old tower. Visible top/bottom face of each horizontal slat long and narrow, its edge only half as thick as its narrow width. Smaller hollow center than footprint, credible overlapping contacts and equilibrium, no unsupported floating rails. All loose foreground pieces must also be long narrow flat slats with the same 1:2:26 proportions, not fat short rectangular blocks. Natural light honey oak or beech, grain along the length, small sanded bevel, realistic soft wood sheen. Keep room unchanged. No labels, text, watermarks, UI, extra furniture or people. The reference lettering must not appear. This remains concept artwork rather than a gameplay screenshot.

## Original concept hero — v1 (retained)

Generated with the built-in image generation tool on 2026-10-01. It is promotional concept art, not a gameplay screenshot, and is labelled accordingly on the website. PNG retained; WebP is a format-compressed derivative for the page.

Final prompt:

> Use case: ads-marketing. Create a wide cinematic 16:9 hero image for the minimalist indie physics game Blocker. A modest elegant wooden tower built entirely from identical small natural oak construction planks with proportions 1:3:15, a few loose planks nearby, on a satin polished cool grey microcement/natural stone floor. Tower on the RIGHT half of composition; LEFT half is a darker muted grey-blue smooth mineral plaster wall with generous clean negative space for website title (do not put text in the image). Unfurnished refined modern alpine apartment, large full height opening on the RIGHT, distant relaxed mountain and trees landscape softly blurred. Low warm summer afternoon sun from right produces believable long precise contact shadows, subtle local reflections under wooden planks, restrained dust in sunbeam. Wood rich natural grain and tiny chamfer edges, realistic scale, tactile miniature desk toy, sophisticated calm architectural photography, lens near floor height, slight depth of field foreground and distant background, tower sharply focused. Cool architectural surfaces, warm wood and sunlight, restrained lighting without blown out whites. No people, no logos, no UI, no lettering, no watermark. This is promotional concept artwork, not a fabricated gameplay screenshot. Output one landscape image.

## Material study — thin wooden slats

`public/assets/concept-wood-detail.png` and its WebP derivative were generated with the built-in image generation tool on 2026-10-01. The user's wooden-piece reference supplied wood grain and chamfer direction only; its printed measurements were not adopted. Target dimensions remain 0.5 × 1 × 13 cm. This is labelled concept artwork, not a game capture.

Generation prompt:

> Create a NEW wide close-up concept artwork, not an edit of the supplied board. Use the supplied image ONLY as a material and small chamfer reference: light untreated beech wood, subtle natural grain, smooth sanded edges. No text from the reference. Three identical extremely slender flat wooden slats in a loose calm overlapping arrangement on a satin pale cool-grey stone floor, cozy architectural afternoon sunlight, soft realistic contact shadows and subtle reflections, macro camera near floor, gentle shallow depth of field, warm honey highlights and cool shadow. Critical dimensions for EACH slat: thickness 0.5 cm, width 1 cm, length 13 cm, thickness:width:length exactly 1:2:26, not chunky Jenga blocks and not broad boards. Main front slat lies horizontally diagonally across image, with long fine longitudinal wood grain and a very thin narrow rectangular end. Other two in middle distance softly blurred. Minimalist editorial product photography, tactile ASMR meditative calm, beautifully sparse with negative space, 3:2 landscape framing. No hands, no people, no writing, no UI, no rulers, no measurement annotations, no logos, no watermarks. This is labelled visual-direction concept artwork for Blocker, not an actual gameplay screenshot.

## Atelier concept

`public/assets/concept-atelier.png` is the user's supplied alpine apartment concept (`codex-clipboard-67ca4072-48e3-4507-90ce-5013f98bce44.png`). It is labelled visual-direction concept art. The WebP derivative only changes encoding, not the content. It is not a gameplay screenshot.

## Actual prototype captures

The gallery uses `prototype-wood-5f76297` and `prototype-room-5f76297`, copied read-only from `C:\Users\volke\Projects\Blocker\Artifacts\lookdev-model-beveled.png` and `lookdev-atelier-wide.png`. These are the GPU look-development captures from the shipped Windows lighting playtest, gameplay revision `5f76297`, captured on 2026-10-01 at approximately 12:32 UTC. They show the current room bounce lighting, wood, shadows and interior reflections. Original PNGs are copied unchanged; WebP derivatives preserve the 1280 × 720 frame and only change encoding (quality 90). The versioned URLs avoid stale cached gallery images. Previous `prototype-wood`/`prototype-room` files remain historical assets.

These captures render the game camera without interface text; that limitation and the Windows capture platform are disclosed in the gallery. They are real game-renderer captures, not generated concept art or proof of a macOS runtime test. No Unity or player was launched for this website refresh and no game sources or settings were changed.

## Font

Inter variable font, copied from the existing game font assets. SIL Open Font License: `public/assets/fonts/OFL.txt`.
