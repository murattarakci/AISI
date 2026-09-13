# Rewire brief — IMD AI Strategy and Implementation (AISI)

A single-page site for the AISI session. Each table writes its **rewire brief**: five supporting fields (the process, its binding constraint, the task moved and its mode, what's expected to change, how it'll be known, what won't be automated yet), and one payoff line — **"Our rewire is not ___, but ___."** — echoing the leadership sprint's "My job is not ___, but ___" card.

Briefs can be downloaded as a PNG, copied as text, or emailed. The **facilitator view** is password-gated and lists every brief live, sorted by how much semantic *contrast* the two blanks carry — the same in-browser embedding technique as [LTAIS](https://github.com/murattarakci/LTAIS), scored with a small model that runs entirely in the browser (no data leaves the page for scoring). The sharpest, most contrasting statements rise to the top, ready to open full-screen for the group debrief.

Adapted from [LTAIS](https://github.com/murattarakci/LTAIS). No build step, no dependencies. Programme page: https://www.imd.org/digital-transformation/aisi/ai-strategy-and-implementation/

## Files
- `index.html` — the brief (participants)
- `facilitator.html` — password-gated live view for the room, sorted by contrast
- `firebase-config.js` — Firestore config and the rule that must be added once (see comments)
- `assets/og-card.png` — link preview image

## Deploy on GitHub Pages
Settings → Pages → Source: *Deploy from a branch* → `main` / (root) → Save. Live at `https://murattarakci.github.io/AISI/` after a minute.

## Facilitator password
Set in `facilitator.html` as a SHA-256 hash (`PW_HASH`). To change it, run
`python3 -c "import hashlib; print(hashlib.sha256('newpassword'.encode()).hexdigest())"` and paste the hash, or regenerate via `gen_aisi.py`.

## Test locally
```bash
python3 -m http.server 8765
```
