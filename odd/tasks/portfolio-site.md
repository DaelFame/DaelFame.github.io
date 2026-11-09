# Portfolio site — DaelFame (FP&A / BI)

Public bilingual portfolio for Joaquin Cardenas, FP&A & BI analyst with an audit
background. Three case studies already exist as repositories; this site is the
decision-maker-facing layer over them.

Branch: `main` (greenfield repo, no consumers) · Delivery: direct commits, no PR chain
Checks: `npm run build` · `astro check` · link check · axe · Lighthouse CI budgets

---

## Specs

**S1 — Static site, no backend.**
Astro 5, static output, zero runtime server. `npm run build` must produce `dist/`
with no external service dependency. No database, no auth, no API keys.

**S2 — Bilingual routing.**
English at the root (`/`, `/work/`, `/about/`), Spanish under `/es/`. English is the
default; the language switch keeps the reader on the same page and persists the choice.
Requirement (verbatim): *"en ingle y español , osea predeterminado en ingles pero
tambien q ue tenga la iopcciond ecmabiar en español"*.
Acceptance: every EN page has an ES sibling; `hreflang` alternates are reciprocal and
include `x-default` on EN.

**S3 — Theme toggle.**
Light and dark. Follows `prefers-color-scheme` until the reader chooses; choice persists
in `localStorage`. No flash of wrong theme on load or navigation. Both themes meet
WCAG AA (4.5:1 body text). Requirement (verbatim): *"quie tenga para ser light o
darkmode tambien"*.
Acceptance: toggle reachable by keyboard, `aria-pressed` reflects state, accent token
differs per theme (`#0F6B58` light / `#3DBFA0` dark), `color-scheme` set.

**S4 — Hero carries the variance waterfall.**
The hero's signature interaction is an animated SVG waterfall of the FP&A bridge
(+74,457 / −359,888 / +24,294 / +18,000 = −243,137), drawn with CSS `stroke-dasharray`
and staggered bars. Zero JS. Decided with the user: *"si tu recomendacion"*.
Acceptance: renders without JS; static final state under `prefers-reduced-motion`;
readable in both themes.

**S5 — Positioning band, not a metrics band.**
The band under the hero states three capabilities, in this order: business judgement,
technical execution, audit-grade rigour. Each pillar carries one proof line that links
to the case study that demonstrates it. Numbers are evidence, not the pitch: they appear
inside a pillar's proof line and inside case studies, never as the headline message.
Requirement (verbatim): *"el portafolio es para decir en que soy bueno en vez de
metricas ,seria como logica de negioc , habilidade tecnica y algo mas"*.
Acceptance: three pillars, three proof lines, no standalone metric grid.

**S6 — Three case studies, fixed narrative.**
Each case page has exactly five sections, in this order: The question · What I found ·
How I proved it · What it decides · What this does not prove.
Acceptance: no section omitted, no invented figure, every number traceable to the
source repository README.

**S7 — Content sourced from existing repositories.**
`DaelFame/fpa-forecasting-case-study`, `DaelFame/peru-budget-lakehouse`,
`DaelFame/ucsp-market-intelligence`. The site summarises for decision-makers and links
to the repository for depth. Site copy is not a verbatim copy of the READMEs.

**S8 — Header.**
`Work` · `About` · `EN|ES` · theme toggle · `CV ↓`. Maximum five targets. Mobile menu
under 768px. Outbound profiles carry their official brand mark: GitHub and LinkedIn
appear with their logos in the hero and the footer, never as bare text links.
Requirement (verbatim): *"que lo del linkedin y guthut pues tenga sus loigos
corresponientes"*.

**S9 — About page and CV.**
Bio, experience timeline, capability groups (FP&A modelling / Analytics engineering /
BI & decision), education, contact. Two CV PDFs, `-en` and `-es`; the download follows
the active locale.

**S10 — SEO and sharing.**
Per-locale `<title>` and description, OG image per locale, JSON-LD `Person`, sitemap,
`robots.txt`, canonical per page.

**S11 — Performance and accessibility budgets.**
Lighthouse ≥ 95 on all four categories. Total JS ≤ 10 KB gzip. LCP ≤ 1.5 s, CLS ≤ 0.1.
Semantic landmarks, skip link, visible focus rings, `prefers-reduced-motion` honoured.

**S12 — Deploy.**
GitHub Actions builds and publishes to GitHub Pages. Target URL `https://daelfame.github.io`
(repo named `daelfame.github.io`, no base path). Custom domain is a later decision and
must not change routing.

**S13 — No contact form backend.**
Contact is `mailto:` plus LinkedIn and GitHub. No form endpoint, no credentials, no spam
surface.

**S14 — CI is the regression detector.**
Build, type/schema check, internal link check, axe accessibility scan and Lighthouse
budgets run on every push. A red gate blocks deploy.

---

## Tasks

| ID | Task | Specs | Route | Status |
|----|------|-------|-------|--------|
| T0 | Scaffold Astro, tokens, dual-theme CSS, base layout, CI workflow | S1, S3, S12, S14 | inline | pending |
| T1 | i18n dictionaries, route mirroring under `/es/`, language switcher, hreflang | S2, S10 | inline | pending |
| T2 | Header with both toggles, footer, 404, mobile menu | S3, S8 | inline | pending |
| T3 | Home: hero + waterfall, proof strip, case cards, capability groups | S4, S5, S6 | inline | pending |
| T4 | Content schema + `/work` index in both locales | S6, S7 | inline | pending |
| T5 | Case layout + 3 EN case files | S6, S7 | inline | pending |
| T6 | 3 ES case files | S2, S6, S7 | delegated (parallel) | pending |
| T7 | About, CV PDFs, OG images, JSON-LD, sitemap | S9, S10 | inline | pending |
| T8 | Performance + a11y pass, mobile pass, budget verification | S11, S14 | delegated (verify) | pending |

T6 is the only delegated write: two locales with disjoint files can run as parallel
writers. Everything else is inline.

---

## Gates

```
npm run build          # fails on schema or route errors
npx astro check        # types + content collections
npx linkinator dist    # internal links
npx @axe-core/cli       # accessibility
npx lhci autorun       # budgets: LCP 1.5s, CLS 0.1, JS 10KB
```

---

## Decisions

**D1 — Astro over plain HTML.** Content collections keep three bilingual case studies in
Markdown instead of six duplicated HTML files. Build output is static HTML, matching the
simplicity of the reference setups. Tailwind rejected: 400 lines of token CSS outlives a
class-soup refactor on a six-page site.

**D2 — No `uv init` for the site.** `uv` manages Python; Astro requires Node. Node 24 and
npm 11 are already installed. A Python toolchain here would add a second runtime that
builds nothing. If image or OG generation is later scripted, it goes in an isolated
`tools/` folder with its own `pyproject.toml`, never as the project's entry point.

**D3 — Not SSD.** The SSD gate is domain (finance logic, migrations, payments), risk
(auth, irreversibility, external contracts, concurrency) or missing regression coverage.
This repository has none of the first two, and S14 supplies the third. ODD tracking plus
the spec above provide the discipline without the no-code gate.

**D4 — No custom agents beyond one UI guard.** Built-in explore/worker/verify cover the
work. A single project-scoped agent carries the design tokens so component work does not
drift across sessions.

---

## Log

**L1 (original request, verbatim)**

> este es un repositoio nuevo   para esto  requuero o la ienncion de esto ni siquiers esta subir a git  es  tener mi repositorio web sonbre data analitic enfocado en fianzas para esto te paso en link de githubn para que tengas mejor contexto
> https://github.com/DaelFame
> con esto en mente  ,   yo noy soy diseñar web pero si me gustair algoa actualziado pero que cumpla el objetivo como tal  , otra cosa si aqui se requiere el agente ssd-design
> https://github.com/JamieChristian22/financial-analyst-portfolio
> https://harshgarg001.github.io/Financial-Analyst-Portfolio/
> algo moderno si me gusta pero puntual  , analzi aprofundament e  y primero una estruruda de archivos  y como se veria auqnue sea en assci

**L2 (requirements added, verbatim)**

> tambein aqui este me llamo la atencion
> https://medium.com/@singhria.0829/how-i-built-a-data-analytics-portfolio-on-github-pages-while-changing-careers-7d93c0c2db13
> y ese tipo de cosas me  gusta  ,  en ingle y español  , osea predeterminado en ingles pero tambienq ue tenga la iopcciond ecmabiar en español   y quie tenga para ser light o darkmode  tambien  
> y las cosas  interactivas visualmetne atractivo

**L3 (hero decision + open questions, verbatim)**

> si tu recomendacion pero esto si requiero derrepnte agnete o subagente enfocados  tambien aqui  , pues  uv init  adecuado para tener las cosas  ,  y dopnde lo vamos a deployar se que se almacenra en github pero donde  temrioanra para tenerlo en intener  , otra cosa mas  , todo esto no es  para un sdd  osea tner el plan  y en enfoque para  mantaner el enfoque adecuadop ??

**Evidence gathered**

- Reference 1 (`harshgarg001`): Bootstrap template, stock photography, no verifiable
  evidence. Serves only as a floor for navigation clarity.
- Reference 2 (`JamieChristian22`): strong substance (executive deck, investment memo)
  but evidence is locked in PDFs; the site is a folder index.
- Reference 3 (Medium, Ria Singh): plain HTML/CSS on Pages, impact metrics above
  projects, skill grouping by workflow, consistent cards. Particle background rejected
  as dated and CPU-costly; replaced by the variance waterfall.
- Subject's own repositories carry stronger evidence than any reference: reconciled
  S/ 0.00 across 29.5M rows, 0.3% one-year forecast error, 131 and 74 automated tests,
  17.4M enrollment records across 174 universities.

**L4 (positioning over metrics, verbatim)**

> si m[Image 1]  eso de las metricas  , nose  , es como  basicametne el portafolio es para decir en que soy bueno en vez de metricas  ,seria como  logica de negioc  , habilidade tecnica  y  algo mas  , osea el protafolio es algo mas vendible y mejraod y los poryectos tambien  por asi decirlo , algo asi  que lo del linkedin  y guthut  pues tenga sus loigos corresponientes  ,

Applied: `ProofStrip` removed; `Pillars` added (business judgement / technical execution /
audit-grade rigour, each with one proof line); metrics demoted to evidence; GitHub and
LinkedIn brand marks added to hero and footer.

**Next step:** T0 scaffold, then first deploy to confirm the pipeline before content work.

