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

The Highscores section lazily reads the existing game's public top ten via `get_tower_leaderboard`, using only the publishable key in `public/leaderboard-config.json`. This key is intentionally public, not an admin credential. No website visitor is signed in, given a game identity, or allowed to submit scores. The website stays a public read-only table. New game records can additionally store a stable tower; the 3D gallery is available inside the game.

Public rows show nickname, height, blocks and build time; older missing metrics show a dash. Values are rendered as text, never HTML. Timeout, empty, stale and unavailable states are handled. Refresh is throttled, including the server's numeric Retry-After response. Automated tests cover response validation, metrics, anonymous read requests and rate limiting.

The game uses an anonymous device identity; the chosen nickname, best result and saved record tower are public. These are casual, client-reported scores. This does not promise anonymity for a nickname containing personal information. Hosting and database providers still receive ordinary request metadata; the website adds no tracking.

## Deploy

Netlify: import the GitHub repository, production branch `main`, build `npm run build`, publish `public`. Configuration is committed in `netlify.toml`. Local direct deploy also works: `npx netlify deploy --dir=public --prod` after linking the site. GitHub hosts website source and release ZIPs; Netlify hosts the page. Do not enable Git LFS for game builds or commit a game ZIP.

Publishing policy: finish and validate changes locally first. Do not push intermediate changes: GitHub pushes trigger a Netlify deploy. Publish only at the end when requested or agreed with the user.

## Images

- `public/assets/concept-hero-v2.webp`: AI-generated promotional concept image, labelled on the page. Built-in image generation tool, not actual gameplay. Original at `concept-hero-v2.png`.
- `gameplay-tower-2026-10-01-01/02/03.webp`: three user-approved actual gameplay screenshots with visible UI, same-size encoding derivatives of unchanged PNG originals. Captions disclose capture before the final floor-glare correction. Earlier render captures remain historical assets.
- `concept-wood-detail.webp`: AI-generated wood/material study, labelled concept art.
- `concept-atelier.webp`: user-supplied alpine room concept, labelled visual direction.
- Inter: local variable font, SIL OFL included under `public/assets/fonts`.

Hero prompt: wide architectural photograph of an identical-oak-plank tower on the right of a cool grey room, generous darker wall space on the left, alpine window view, warm low summer sun, tactile wood, subtle local reflections; no text, people, logos, UI or watermark. Original prompt and generation provenance in `ASSETS.md`.

## Update the download

Current Windows release: 624a3fe, 02 Oct 2026, playtest-2026-10-02-calm-results-physics. Compact upper result sheets keep the tower clear, with This Run left, Your Best right, a small YOU badge and primary Retry. Result frosting is softer and resolution-normalized. Support removal wakes dependent pieces without an impulse; rest recognition uses simulation poses. Solver 48/2 at 60 Hz remains unchanged.

Validation: 68 EditMode and 41 PlayMode tests, Windows release build and standalone GPU lookdev passed. A 64-piece / 1.31 m pillar-and-crown fixture reaches sleep and collapses when adjacent base supports are removed. Full native IMGUI typography and the user's exact tower still need in-client visual/gameplay review. 184 archived player files verified. ZIP: 195188814 bytes; SHA256 b0cb56f4de68dab91fbb5b478290356ccf61f7b8e793d0dbd41744e4ea23e29d. ZIP and checksum are immutable GitHub Release assets. Update Windows URLs consistently in public/index.html, netlify.toml, scripts/serve.mjs and release.json. Never ship profiles, credentials or queued scores.

Build and publish Windows by default. Mac updates require an explicit user request. The previous macOS Universal preview 9c6daf4 remains separately available for Apple Silicon/Intel and macOS 12+. It does not contain this Windows update; on-Mac testing is pending and it is not notarized. Preserve its release metadata and download.
