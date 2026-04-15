---
name: ui-ux
description: Use for UI/UX design, visual polish, frontend layout implementation, design-system decisions, responsive behavior, interaction states, accessibility, and interface quality review. Applies to websites, landing pages, dashboards, product pages, forms, navigation, cards, tables, charts, mobile layouts, and brand-facing UI.
---

# UI/UX Skill

Adapted from `nextlevelbuilder/ui-ux-pro-max-skill` (MIT, imported from `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`, commit `b7e3af8`) and condensed for Codex frontend work.

## When To Use

Use this skill whenever a task changes how an interface looks, feels, moves, reads, or is operated.

Use it for:
- New page or section design
- UI component implementation or refactor
- Brand-facing homepage, landing, product, evidence, journal, dashboard, or mobile UI work
- Visual hierarchy, spacing, typography, color, layout, motion, or state design
- Accessibility, keyboard navigation, focus states, touch targets, responsive behavior, or screenshot QA
- UI review where the issue is “not premium enough”, “too generic”, “too static”, “not usable”, or “not consistent”

Skip it for:
- Pure backend logic
- Infra or deployment work
- Non-visual scripts
- API/database work with no UI surface

Project rule: local `AGENTS.md`, brand docs, page design docs, and existing design tokens override generic style recommendations.

## Operating Workflow

1. Inspect the existing UI before designing.
2. Identify the user task, page IA, primary interaction, and brand mood.
3. Choose a visual direction that fits the product, not a trend.
4. Define or reuse tokens before adding one-off values.
5. Implement semantic, accessible markup first; style second; motion last.
6. Verify in a real browser across desktop, tablet, and mobile.
7. Report local/preview and production separately.

Do not call a UI “fixed” until the same path is rechecked visually and interactively.

## Design System Rules

Use a three-layer token model:
- Primitive: raw values such as color scales, spacing units, type sizes.
- Semantic: purpose aliases such as `surface`, `text-muted`, `accent`, `danger`.
- Component: component-specific tokens such as `button-bg`, `card-border`, `rail-active`.

Prefer:
- CSS variables or existing token files over raw hex in components.
- A 4px/8px spacing rhythm.
- A defined type scale rather than isolated font sizes.
- One icon style and one elevation/shadow scale.
- State tokens for hover, focus, active, selected, disabled, loading, error, and empty.

Avoid:
- Random shadows, radii, and z-index values.
- Color-only meaning.
- Emoji as UI icons.
- Trend effects that do not support hierarchy or interaction.
- Mixing visual languages without a deliberate transition.

## UX Quality Priorities

Check in this order:

1. Accessibility: contrast, focus visibility, labels, keyboard path, screen reader names.
2. Interaction: clear affordance, feedback within 100ms, click/tap path independent of hover.
3. Responsive layout: no horizontal scroll, touch targets at least 44px, content priority preserved.
4. Visual hierarchy: one primary action, readable section rhythm, clear scannability.
5. Performance: reserved image dimensions, lazy loading below fold, no layout shift, minimal blur.
6. Motion: 150–300ms for normal UI, transform/opacity only, reduced-motion support.
7. Brand fit: mood, copy density, material, color, and composition must match the brand.

## Layout And Responsive Rules

Use mobile-first reasoning, then scale upward.

Required checks:
- `375px`, `768px`, `1024px`, and desktop wide viewport.
- No mobile horizontal scroll.
- Body text usually `16px` minimum on mobile.
- Line length: mobile about 35–60 characters; desktop about 60–75 characters.
- Fixed headers must reserve content offset.
- Important content must not depend on hover.
- Use `min-height: 100dvh` instead of `100vh` where mobile browser UI matters.

When a desktop layout is complex, do not simply shrink it on mobile. Reorder the hierarchy.

## Accessibility Rules

Minimum bar:
- One logical `h1`.
- Sequential heading hierarchy.
- Interactive elements are buttons or links, not inert divs.
- Icon-only buttons have accessible labels.
- Focus rings are visible and not removed.
- Keyboard tab order matches visual order.
- Accordion, tablist, dialog, menu, and disclosure patterns use the right ARIA semantics.
- Text contrast meets at least WCAG AA (`4.5:1` for normal text, `3:1` for large text).
- Motion respects `prefers-reduced-motion`.

For tab-like explorers:
- Use `tablist`, `tab`, and `tabpanel` when the interaction changes a selected content panel.
- Maintain `aria-selected`, `aria-controls`, and roving `tabindex`.
- `Enter` and `Space` commit selection.
- Arrow keys move within the tab group.

For accordions:
- Trigger is a button.
- Use `aria-expanded` and `aria-controls`.
- Answer content remains crawlable in HTML.

## Interaction State Grammar

Define states before styling components.

Core states:
- Idle: structural information only.
- Hover/Preview: light outline, underline, or tint; never hides required information.
- Focus: visible keyboard ring with sufficient contrast.
- Selected/Active: strongest rule, border, number weight, or route cue.
- Related: low-contrast family cue.
- Disabled: semantic disabled attribute plus muted visual treatment.
- Loading: skeleton or progress for waits over 300ms.
- Error: message next to the problem, not only at the top.

For system UIs:
- Keep one authoritative committed state when possible.
- Derive visual states from that state.
- Hover/focus may preview, but click/tap/Enter/Space should commit.
- State changes should update all related surfaces consistently.

## Motion Rules

Use motion to explain state or spatial relationship.

Prefer:
- `opacity`, `transform`, `border-color`, `color`, and subtle underline transitions.
- 120–180ms for precise system UI.
- 150–300ms for general micro-interactions.
- Stagger only when it clarifies sequence.

Avoid:
- Autoplay carousels for important content.
- Infinite decorative motion.
- Parallax unless it is essential and reduced-motion safe.
- Animating width, height, top, or left.
- Blocking input during animation.
- Full-screen trend effects that overpower the product.

## Visual Direction Selection

Choose style by product and brand context, not by novelty.

Useful patterns:
- Clinical / professional: light surfaces, restrained contrast, precise rules, small structural color.
- Luxury / editorial: fewer elements, stronger typography, controlled negative space, material texture.
- Data / evidence: tabular figures, clear labels, proof hierarchy, no decorative ambiguity.
- SaaS / tools: efficient density, obvious navigation, predictable components.
- Consumer / commerce: product clarity, trust, clear CTA hierarchy, frictionless scanning.

Anti-patterns:
- AI purple/pink gradients by default.
- Startup SaaS visuals for premium or clinical brands.
- Generic beauty mall cards for professional derma/clinical contexts.
- Overusing glassmorphism where evidence, readability, or performance matters.
- Dark mode by default unless the product context demands it.

## Color And Typography

Color:
- Use semantic tokens, not raw component-level hex.
- Functional color must carry a state or information role.
- Do not use color alone to encode meaning.
- Use large color fills only if the brand system demands it; otherwise prefer rails, rules, dots, badges, and focus rings.

Typography:
- Set a clear type hierarchy before styling individual components.
- Body line-height should usually be `1.5–1.75`.
- Use tabular figures for metrics, prices, timers, and aligned numeric data.
- Avoid body text below `12px`; avoid all-caps paragraphs.
- Letter spacing should support labels, not reduce readability.

## Performance Rules

Check:
- Hero images: preload only if they are LCP-critical.
- Below-fold images: lazy load.
- Images: width/height or aspect-ratio reserved.
- Avoid excessive `backdrop-filter`, blur, and heavy shadows.
- Use route/component splitting when a framework supports it.
- Defer non-critical third-party scripts.
- Keep per-frame work under roughly 16ms for smooth interaction.
- Avoid layout thrashing by batching reads and writes.

Targets when relevant:
- LCP under 2.5s.
- CLS under 0.05–0.1 depending on project bar.
- Console errors: 0.

## Component Implementation Checklist

Before shipping a component:
- It has semantic HTML.
- It has accessible names and labels.
- It has hover, focus, active, disabled, and loading/error states where applicable.
- It works by keyboard only.
- It has a mobile layout, not only a desktop layout.
- It uses existing tokens and style patterns.
- It avoids raw hardcoded values unless the project already uses them.
- It reserves media dimensions.
- It has no console errors.

## Review Checklist

When reviewing UI work, report issues in this order:
- Broken user path or inaccessible interaction.
- State mismatch or unclear selected/active behavior.
- Responsive failure or overflow.
- Readability, contrast, or hierarchy failure.
- Brand mismatch or generic visual language.
- Performance risks from images, motion, blur, or layout shift.
- Missing or weak empty/loading/error states.

If no blocking issue exists, still mention residual risks such as untested breakpoints, unverified contrast, or missing screenshot coverage.

## Output Expectations

For implementation work:
- Make the code changes.
- Run browser or screenshot verification when the UI changes.
- Summarize what changed, what was verified, and what remains unverified.

For design planning:
- Provide the chosen direction.
- Explain why alternatives were rejected.
- Define state, color, motion, responsive, and accessibility rules.

For reviews:
- Findings first, ordered by severity, with file/line references when possible.
