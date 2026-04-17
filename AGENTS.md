# ERTY Workspace Instructions

## Resume Command

If the user sends `ERTY` or `erty` as a standalone message, treat it as a resume command for this project.

When that happens, do this in order:

1. Read `docs/SESSION_HANDOFF.md`
2. Read `docs/PROJECT_BRIEF.md`
3. Read `docs/PAGE_DESIGN.md`
4. Read `docs/agents/README.md`
5. Check current git status and workspace changes
6. Summarize:
   - what is already completed
   - what is blocked
   - what input is expected from the user next
7. Continue from the highest-priority unfinished task without asking to restate prior context

## Current Project Rules

- `ertyofficial.com` is the brand / content / SEO-GEO main domain
- `ertyofficial.shop` is the Cafe24 shopping domain
- Do not move `ertyofficial.com` into Cafe24 as the main shopping domain
- Keep secrets, tokens, passwords, API keys, and private operational data out of tracked files and GitHub
- Production-impact infra work must be verified with persisted state and reported separately from preview/local checks

## /by-concern Page Instructions

Before changing any code for `/by-concern`, read these files in order:

1. `docs/by-concern/BY_CONCERN_MASTER_SPEC.md`
2. `docs/by-concern/BY_CONCERN_IMPLEMENTATION_SPEC.md`
3. `docs/by-concern/BY_CONCERN_DATA_CONTRACT.md`
4. `docs/by-concern/BY_CONCERN_COPY_DECK.md`
5. `docs/by-concern/BY_CONCERN_QA_CHECKLIST.md`

Non-negotiables:

- Do not change the concern taxonomy without explicit approval.
- Do not invent new concern categories.
- Do not write shopping-mall style UI.
- Keep numbering-first logic.
- Keep copy aligned with `BY_CONCERN_COPY_DECK.md`.
- Use only source-visible metrics.
- Before finalizing, verify all items in `BY_CONCERN_QA_CHECKLIST.md`.

Current recommended build order:

1. Hero
2. Concern Selector
3. Active Concern Board
4. Proof Snapshot
5. Guide Cluster
6. FAQ
7. Shop Bridge
8. polish / QA

## Current Working Reality

- Static frontend scaffold exists
- Project docs and page design docs exist
- Agent operation docs exist
- Design references exist under `references/awesome-design-md-main`
- Previous `shop.ertyofficial.com` subdomain plan is obsolete
- Current shopping-domain target is `ertyofficial.shop`
- Brand source materials are not ingested yet, so final homepage design/implementation should not start until the user provides them

## Preferred Next-Step Order

1. Verify and document `ertyofficial.shop` Cafe24 main-domain setup
2. Brand data intake from user-provided file paths
3. Brand inventory and source-map documentation
4. Page-level design refinement
5. Actual implementation
