# BLOCKER — public website

Minimal static landing page. Website source only; the Unity project remains separate and private.

## Local

Node 24, no dependencies:

```sh
npm start
npm run check
```

Open http://127.0.0.1:4196. `public/index.html` is the page source. Dialogs support native keyboard focus, Escape and close controls. No cookies, analytics, trackers, third-party fonts or frameworks.

## Deploy

Netlify: import the GitHub repository, production branch `main`, build `npm run build`, publish `public`. Configuration is committed in `netlify.toml`. Local direct deploy also works: `npx netlify deploy --dir=public --prod` after linking the site. GitHub hosts website source and release ZIPs; Netlify hosts the page. Do not enable Git LFS for game builds or commit a game ZIP.

## Images

- `public/assets/concept-hero.webp`: AI-generated promotional concept image, labelled on the page. Built-in image generation tool, not actual gameplay. Original at `concept-hero.png`.
- `prototype-wood.webp`, `prototype-room.webp`: actual pre-existing prototype render captures copied read-only from Blocker's Artifacts. Interface text is omitted in those captures; noted on page.
- Inter: local variable font, SIL OFL included under `public/assets/fonts`.

Hero prompt: wide architectural photograph of an identical-oak-plank tower on the right of a cool grey room, generous darker wall space on the left, alpine window view, warm low summer sun, tactile wood, subtle local reflections; no text, people, logos, UI or watermark. Original prompt and generation provenance in `ASSETS.md`.

## Update the download

The initial download is the validated Windows playtest from 2026-10-01, source commit `223255f`. It does not claim to include work still in progress in the main game thread. The ZIP is an immutable GitHub Release asset. Replace release URL/version/size consistently in `public/index.html`, `netlify.toml`, `scripts/serve.mjs`, and `release.json` when a newer verified archive is ready. Upload its `.sha256` alongside it. Never ship profiles, anonymous identity credentials or queued scores.
