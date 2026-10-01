# BLOCKER — public website

Minimal static landing page. Website source only; the Unity project remains separate and private.

## Local

Node 24, no dependencies:

```sh
npm start
npm run check
```

Open http://127.0.0.1:4196. `public/index.html` is the page source. Dialogs support native keyboard focus, Escape and close controls. No cookies, analytics, trackers, third-party fonts or frameworks.

The large hero menu becomes compact floating navigation after leaving the viewport. The Game section includes minimalism, meditative/ASMR atmosphere, and separately labelled concept studies.

## Public highscores

The Highscores section lazily reads the existing game's public top ten via `get_tower_leaderboard`, using only the publishable key in `public/leaderboard-config.json`. This key is intentionally public, not an admin credential. No website visitor is signed in, given a game identity, or allowed to submit scores. No backend or game changes are required.

Public rows show nickname, height, blocks and build time; older missing metrics show a dash. Values are rendered as text, never HTML. Timeout, empty, stale and unavailable states are handled. Refresh is throttled, including the server's numeric Retry-After response. Automated tests cover response validation, metrics, anonymous read requests and rate limiting.

The game uses an anonymous device identity; the chosen nickname and best result are public. These are casual, client-reported scores. This does not promise anonymity for a nickname containing personal information. Hosting and database providers still receive ordinary request metadata; the website adds no tracking.

## Deploy

Netlify: import the GitHub repository, production branch `main`, build `npm run build`, publish `public`. Configuration is committed in `netlify.toml`. Local direct deploy also works: `npx netlify deploy --dir=public --prod` after linking the site. GitHub hosts website source and release ZIPs; Netlify hosts the page. Do not enable Git LFS for game builds or commit a game ZIP.

Publishing policy: finish and validate changes locally first. Do not push intermediate changes: GitHub pushes trigger a Netlify deploy. Publish only at the end when requested or agreed with the user.

## Images

- `public/assets/concept-hero-v2.webp`: AI-generated promotional concept image, labelled on the page. Built-in image generation tool, not actual gameplay. Original at `concept-hero-v2.png`.
- `prototype-wood-5f76297.webp`, `prototype-room-5f76297.webp`: current Windows lighting-playtest render captures copied read-only from Blocker's Artifacts. Original PNGs retained unchanged; WebP only changes encoding. Interface is omitted in those captures; noted on page. Older unversioned captures are retained as historical assets.
- `concept-wood-detail.webp`: AI-generated wood/material study, labelled concept art.
- `concept-atelier.webp`: user-supplied alpine room concept, labelled visual direction.
- Inter: local variable font, SIL OFL included under `public/assets/fonts`.

Hero prompt: wide architectural photograph of an identical-oak-plank tower on the right of a cool grey room, generous darker wall space on the left, alpine window view, warm low summer sun, tactile wood, subtle local reflections; no text, people, logos, UI or watermark. Original prompt and generation provenance in `ASSETS.md`.

## Update the download

The current download is the validated Windows lighting playtest from 2026-10-01, source commit `9c6daf4` (177,009,133 bytes). It includes baked room bounce, light probes, contact shadows and interior-only floor reflections. The ZIP is an immutable GitHub Release asset; earlier releases remain available. Replace release URL/version/size consistently in `public/index.html`, `netlify.toml`, `scripts/serve.mjs`, and `release.json` when a newer verified archive is ready. Upload its `.sha256` alongside it. Never ship profiles, anonymous identity credentials or queued scores.

The download dialog offers two platform cards. macOS is a Universal `.app` ZIP for Apple Silicon and Intel, macOS 12+; its metadata is in `release.json.macOS`, with a stable `/download/macos` redirect. The same GitHub release hosts both ZIPs and checksums. Both platforms use revision `9c6daf4`, including the optimistic collapse/result copy. The bundle and archive are checked, but on-Mac playtesting is pending and the preview is not notarized. Keep that status visible until verified on a real Mac.
