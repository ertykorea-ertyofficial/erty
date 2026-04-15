# HOME V10 Review

## Scope
- Route: `/`
- Mode: preview/local only
- Production: no commit, no push, no deploy

## What Changed
- Hero copy was tightened into a more brand-front lockup.
- Featured SKU moved toward a single `activeSkuId` system with:
  - selected panel
  - grouped core SKU rail
  - integrated protocol sublayer for `01 / 02 / 03`
- Evidence tiles now use safer, more qualified proof signals.
- Numbering and line colors were extended into route highlight, proof highlight, FAQ state, and footer numbering.
- Visible English meta labels in key Home sections were reduced.

## Local Validation
- `/` response: `200`
- `h1` count: `1`
- console errors: `0`
- default featured state: `37`
- default related proof: `37`
- default related route: `evidence`

## State Checks
- `55` selection updates:
  - selected panel
  - related proof tile
  - related route accent
- `02` protocol selection updates:
  - selected panel
  - protocol active state
  - journal route accent
  - main proof highlight cleared

## Multi-Agent Review
- `Copy / Brand`: `PASS`
- `Interaction / State`: `PASS`
- `Evidence / Safety`: `PASS`
- `Visual / System Polish`: `PASS`
- `Featured System UX`: `PASS`

## Preview Assets
- Desktop: `output/playwright/home-v10-desktop-full.png`
- Mobile: `output/playwright/home-v10-mobile-full.png`
