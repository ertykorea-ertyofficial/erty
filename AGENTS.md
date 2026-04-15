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
