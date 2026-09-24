# Rewire your process — IMD AI Strategy and Implementation (AISI)

A five-step interactive tool for the AISI session's three group-work blocks. No build step, no
dependencies, vanilla HTML/CSS/JS throughout, matching [LTAIS](https://github.com/murattarakci/LTAIS)'s
approach.

## The flow

1. **Process** — name the process being rewired.
2. **Unbundle** — type or paste tasks (comma/semicolon-separated); each becomes a chip. Click a chip
   to cycle who does it (human / AI assists / AI does, matching the deck's own legend). Double-click
   to rename. Use the ◀ ▶ arrows to reorder, or drag if you prefer — arrows are the reliable path for
   trackpads in a live room.
3. **Constraints** — same add-a-chip pattern, but constraints are hexagonal (visually distinct from
   tasks) and live in their own lane. Click a constraint to cycle eroded / endures / emerges. Press
   **Link** on a constraint, then click the task(s) above it that it sits under — the constraint
   attaches by task ID, so it stays correctly linked even if tasks are later reordered.
4. **Rebundle** — the original unbundled tasks are frozen below for reference. "Copy tasks from before"
   seeds a working row above; **Select to merge** turns on a click-to-multi-select mode (no fiddly
   drag targeting needed) — pick 2+ chips, press **Merge selected**, and they combine into one role.
   A live counter ("6 → 4") makes the task-vs-architecture distinction visible.
5. **Outcome** — the payoff line, "Our rewire is not ___, but ___," styled like the LTAIS leadership
   card, plus three closing commitments (what changes, how we'll know, what we won't automate yet).
   Download as PNG, copy as text, or email it.

State autosaves to Firestore (debounced) as the table works, so the facilitator view updates live —
participants don't need to reach the outcome screen for the table to show up.

## Facilitator view

Password-gated (`facilitator.html`). Lists every brief live, sorted by semantic **contrast** between
the "not" and "but" blanks — the same in-browser MiniLM embedding technique as LTAIS — so the sharpest
statements surface first. Each row also shows a progress line ("6 tasks · 2 constraints · 4 rebundled").
Click a brief to open it full-screen: the statement large, plus the task/constraint/rebundle chips and
the three closing fields, for use during the group debrief.

## Files
- `index.html` — the five-step tool (participants)
- `facilitator.html` — password-gated live view for the room
- `firebase-config.js` — Firestore config and the rule that must be added once (see comments)
- `assets/og-card.png` — link preview image

## Deploy on GitHub Pages
Settings → Pages → Source: *Deploy from a branch* → `main` / (root) → Save.
Live at `https://murattarakci.github.io/rewire/` after a minute.

## Facilitator password
Set in `facilitator.html` as a SHA-256 hash (`PW_HASH`). To change it, run
`python3 -c "import hashlib; print(hashlib.sha256('newpassword'.encode()).hexdigest())"` and paste the
hash, or regenerate via `gen_canvas.py` / `gen_fac.py`.

## Test locally
```bash
python3 -m http.server 8765
```
