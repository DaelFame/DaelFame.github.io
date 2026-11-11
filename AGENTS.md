# Portfolio site — working agreement

Astro 5 · static output · bilingual (EN at root, ES under `/es/`) · GitHub Pages.

Specification, decisions and the request log: `odd/tasks/portfolio-site.md`.
Read it before changing copy, structure or routing.

## Baseline target

This project's Baseline target is **Baseline 2024**. Prefer features that are Baseline
Widely or Newly available as of 2024, and provide progressive-enhancement fallbacks
where a feature is not yet interoperable.

## Rules

- Colours live in `src/styles/tokens.css` only. No hardcoded hex outside that file.
- Design tokens are dual-theme: a new colour needs a value for both themes, and both
  must meet WCAG AA (4.5:1) for body text.
- Every user-facing string lives in `src/i18n/ui.ts` (chrome) or in the component's
  bilingual data object (content). Never hardcode copy in markup.
- Every page exists twice: `src/pages/...` (EN) and `src/pages/es/...` (ES).
  A new page without its Spanish sibling is incomplete.
- No client-side framework. JavaScript is limited to the theme boot script, the theme
  toggle, the language preference and small progressive enhancements. Total budget:
  10 KB gzip.
- Animation must respect `prefers-reduced-motion`.
- Case-study numbers must match the source repositories. Content source of truth:
  `odd/sources/cv.md` for the biography, `src/data/` for structured content.

## Checks

```bash
npm run check   # types + content collections
npm run build   # static output in dist/
```
