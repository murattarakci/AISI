# Rewire brief — IMD AI Strategy and Implementation (AISI)

A single-page site for the AISI session. Each table writes its **rewire brief** — eight fields, none longer than a sentence: the process, its binding constraint, the task they move (substitution or augmentation), what they expect to change, how they will know, what they will not automate yet, and their quadrant now and next on the process/architecture x substitution/augmentation grid.

Briefs can be downloaded as a PNG, copied as text, or emailed. The **facilitator view** plots every table on the live 2x2 (solid badge = now, dashed = aiming for) and shows any brief full-screen for the share-out.

Adapted from [LTAIS](https://github.com/murattarakci/LTAIS). No build step, no dependencies. Programme page: https://www.imd.org/digital-transformation/aisi/ai-strategy-and-implementation/

## Files
- `index.html` — the brief (participants)
- `facilitator.html` — password-gated live view for the room
- `firebase-config.js` — Firestore config and the rule that must be added once (see comments)
- `assets/og-card.png` — link preview image

## Deploy on GitHub Pages
Settings → Pages → Source: *Deploy from a branch* → `main` / (root) → Save. Live at `https://murattarakci.github.io/AISI/` after a minute.

## Facilitator password
Set in `facilitator.html` as a SHA-256 hash (`PW_HASH`). To change it, run
`echo -n "newpassword" | shasum -a 256` and paste the hash.

## Test locally
```bash
python3 -m http.server 8765
```
