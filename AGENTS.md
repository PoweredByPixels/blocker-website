# Blocker website

This repository contains only the public landing page, approved game captures and release metadata. Never copy the Unity project, private profiles, tokens or inherited QFTGN tasks here. The Unity projects are read-only for this task. Keep the website static and dependency-free; Netlify publishes `public`. Game ZIPs are GitHub Release assets, never committed to Git or uploaded to Netlify. Label generated concept artwork separately from real prototype captures. Run `npm run check` and inspect desktop/mobile before publishing. No analytics or cookies by default.

Finish and validate changes locally before any publication. Do not push intermediate work: pushes trigger Netlify continuous deployment. Deploy only at the end when requested or agreed with the user.

Build and publish Windows by default. macOS builds and updates require an explicit user request; preserve the existing Mac release metadata and download when updating only Windows.
