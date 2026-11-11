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
The chart is titled with the finding, not the chart type: **"Where the €243,137 went"**
(ES: "Dónde se fueron los €243.137"), with a footnote stating that €150,000 of general
expenses carry no supporting document. Requirement (verbatim): *"eso de bridgt tu
budget  peude sr algo mas ?? , algo mas vendible y mejor ?"*.
Acceptance: renders without JS; static final state under `prefers-reduced-motion`;
readable in both themes and both locales; number formatting follows the locale
(`243,137` in EN, `243.137` in ES).

**S5 — Positioning band, not a metrics band.**
The band under the hero states three capabilities, in this order: **accounting foundation**,
technical execution, audit-grade rigour. Each pillar carries one proof line that links to
the case study that demonstrates it. Numbers are evidence, not the pitch: they appear
inside a pillar's proof line and inside case studies, never as the headline message.
Requirement (verbatim): *"el portafolio es para decir en que soy bueno en vez de
metricas ,seria como logica de negioc , habilidade tecnica y algo mas"*, refined by
*"soy cun contador  con el tema de data"*.
Acceptance: three pillars, three proof lines, no standalone metric grid; the first
pillar establishes the accounting base, not general business acumen.

**S15 — Positioning statement.**
The site positions the subject as an accountant who builds data, never as an auditor who
moved into FP&A. H1 (EN): **"I read the ledger. I build the pipeline."** H1 (ES):
**"Entiendo el asiento. Construyo el pipeline."** The lede explains the claim in plain
language: accounting rules, data engineering and BI in one head, so nothing is lost in
translation between the statement and the dashboard. Requirement (verbatim): *"eso de
auditoro a financas no me gusta , ademas soy cun contador  con el tema de data , algo
mucho mas vendible"*.
Acceptance: no occurrence of "From audit to FP&A" anywhere in copy, metadata, or docs.

**S16 — All three projects visible from the home page.**
The hero visualises one case; the home page must still surface all three. A "Selected
work" section lists every case with its discipline, its business question and its
headline result, and links to the full list. Requirement (verbatim): *"aqui solo te
enfocas en un solo caso  y cuando 3 proyectos"*.
Acceptance: three cards rendered on `/` and `/es/`; each card carries a working link;
`/work/` and `/es/work/` never return 404.

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
BI & decision), education, contact. Source of truth for the biography:
`odd/sources/cv.md`, stored verbatim from the user's input. Two CV PDFs, `-en` and
`-es`; the download follows the active locale. The KPMG "ranked 1st globally in Audit
Foundations 1" credential must be visible on the site, not buried in the PDF.

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
| T0 | Scaffold Astro, tokens, dual-theme CSS, base layout, CI workflow | S1, S3, S12, S14 | inline | done — 13d0a61 |
| T1 | i18n dictionaries, route mirroring under `/es/`, language switcher, hreflang | S2, S10 | inline | done |
| T2 | Header with both toggles, footer, 404, mobile menu | S3, S8 | inline | done |
| T3 | Home: hero + waterfall, pillars, case cards | S4, S5, S6 | inline | done |
| T4 | Content schema + `/work` index in both locales | S6, S7 | inline | partial — index done, detail pages pending |
| T5 | Case layout + 3 EN case files | S6, S7 | inline | done — aff2302 |
| T6 | 3 ES case files | S2, S6, S7 | delegated (parallel) | done — folded into T5 |
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

**D5 — Modern Web Guidance as a project skill.**
`GoogleChrome/modern-web-guidance` (Apache-2.0, published with npm provenance by the
Chrome team) is installed at `.opencode/skills/modern-web-guidance/`. The official
installer targets Claude Code, Codex, Cursor, Copilot, Gemini, Antigravity and JetBrains,
not OpenCode, so the skill file is placed where this runtime scans it. `AGENTS.md`
declares the project Baseline target (2024) so the guidance is scoped to what this site
can actually ship. Implication for T8: scroll reveals, the reading progress bar and the
sticky header should follow guides `scroll-entry-exit-effects`,
`scroll-progress-indicator` and `shrinking-header-on-scroll` rather than hand-rolled
IntersectionObserver code.

**S17 — Technologies carry their brand marks; skills are shown as a process.**
Every technology chip shows its official mark when one legitimately exists, sourced from
`simple-icons` (CC0) and inlined at build time — no runtime request and no hand-written
path data. Power BI, Excel and DAX have no entry there (Microsoft's marks were removed
from the set), so those chips render as plain labels rather than a fabricated logo.
Skills are presented as a four-step process — record and close → plan and explain →
build the platform → turn it into a decision — with the tools attached to each step,
never as an alphabetised list of software. Requirement (verbatim): *"losporyectos y las
tecnologias con sus logos corresponidentes […] mis skill la forma en com podemos ver
las coas combiandos procesos , contabildiad , fionanzas ese tipode cosas algo mas
vendible"*.
Acceptance: no invented brand path; chips remain monochrome so both themes stay AA; the
process section states accounting → finance → data in that order.

**S18 — Hero visual is a capability map, not a feelings diagram.**
The hero carries a four-circle map of the four seats he fills — Accounting, FP&A,
Data Engineering, Business Intelligence — intersecting at **"One person. Four seats."**
Each quadrant's legend line states a concrete outcome ("the books close", "the numbers
are explained", "the data holds", "the decision is made"), not a sentiment. The earlier
ikigai ("what I love / what I'm good at") was rejected as too soft for a finance
audience. The waterfall lives on the FP&A case page. The `Pillars` section was removed
because it repeated this map. Requirement (verbatim): *"el tema de que soy bueno o que
no , esas cosas que podemos mejorar en el sentido del ikigai algo mucho mejor"*.
Acceptance: diagram renders in both themes from tokens alone; no soft love/desire
wording.

**S19 — Project cards reveal their dashboard on hover.**
Each case card shows the real dashboard screenshot of its repository as a hover
reveal (PNG → WebP via Astro assets). The FP&A report is still in progress, so its
card shows a "case study in progress" placeholder instead of a fabricated image.
Requirement (verbatim): *"cuando pases el mouse aparezcan los dashboards adecuados
de cada uno el de finanzas sigue en trabajo pero los demas ya se pueden usar con
el github"*.
Acceptance: images load from the repositories (`ucsp-market-intelligence`,
`peru-budget-lakehouse`), no stock imagery, and the interaction is inert on touch
devices and under `prefers-reduced-motion`.

---

## Headhunter review (L10)

Requested by the user: *"toma el rol de un head hunter y avelaulo y con esavelaucion mejroalo totalmente"*.

**Findings, in order of severity:**

1. **Broken nav — `About` and `CV` were 404.** The two highest-intent conversion
   elements pointed at nothing. FIXED: `/about`, `/es/about`, `/cv`, `/es/cv` built.
2. **No resume.** The CV button pointed to a PDF that did not exist. FIXED: `/cv/` is a
   print-styled page (`Ctrl+P` → PDF); a generated PDF remains optional (T7).
3. **No bio or experience anywhere.** The strongest credential — 1st globally in KPMG
   Audit Foundations 1 — was invisible. FIXED: About page renders the full timeline from
   `src/data/profile.ts`, with the KPMG ranking called out in a highlighted band.
4. **No structured data.** FIXED: JSON-LD `Person` added to the layout head.
5. **Case pages not built** (cards open the repository). Still pending: T5.
6. **No OG/social preview images.** Still pending: T7.

---

## Log

**L10 (headhunter evaluation — see above)**

---

**Next step:** T5 — the three case-study pages (EN + ES), then the first deploy.

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

**L5 (CV supplied; ES version required; waterfall headline challenged)**

> falta tmabien el de español  mi cv necesitas ??  Joaquin Cardenas
> Arequipa, Peru (UTC-5) | Joaquin.data.dev@gmail.com | linkedin.com/in/joaquincardenas-data | github.com/DaelFame
> Accounting student (expected 2027) with KPMG audit experience and FP&A/BI work turning budget data into decisions.
> […] aqui falta  el 3er proyecto pero tambien te va ayudar
> eso de bridgt tu budget  peude sr algo mas ?? , algo mas vendible y mejor ?

Full CV stored verbatim in `odd/sources/cv.md`, with the gaps listed there.
Third project (`fpa-forecasting-case-study`) bullet drafted for the CV:
*Rebuilt four years of statements from raw closing workbooks into a driver-based model,
tracing a 61% net-income miss entirely to operating expenses and isolating €150,000 of
general expenses with no supporting document. Forecast next-year revenue within 0.3%
out-of-sample on a two-fold rolling-origin backtest, and showed that knowing
management's decisions cuts revenue error by 15.4 percentage points.*

**L6 (positioning rejected; all three projects required)**

> pero aqui solo te enfocas en un solo caso  y cuando 3 proyectos  , ademas eso de auditoro a financas no me gusta  , ademas soy cun contador  con el tema de data  , algo mucho mas vendible

Applied: H1 replaced with "I read the ledger. I build the pipeline." / "Entiendo el
asiento. Construyo el pipeline."; first pillar changed from business judgement to
accounting foundation; hero eyebrow now Accounting · Data · Business Intelligence;
"Selected work" section added with all three cases; `/work/` and `/es/work/` built.

**L7 (tooling: modern web guidance)**

> aqui falta agregar una cosa  [imagen: `$ npx modern-web-guidance@latest install` —
> compatible con Claude Code, Antigravity CLI, GitHub Copilot, Gemini CLI, Cursor]
> para tener  tambien una forma de optimizar y mejroar la web del desarrollo  tmabien

Verified before running: published by the `GoogleChrome` npm org, maintainers Paul Irish
and Rick Viscomi, Apache-2.0, SLSA provenance from GitHub Actions. Installed to
`.opencode/skills/modern-web-guidance/`; smoke-tested with a real search query. Baseline
target recorded in `AGENTS.md`.

**L8 (brand marks, skills as process)**

> okey otra cosa  , losporyectos y las tecnologias con sus logos corresponidentes
> eso de donde se fueron  los eruos  , otra cosa  mis skill la forma en com podemos ver
> las coas combiandos procesos ,  contabildiad , fionanzas ese tipode cosas  algo mas
> vendible y actualiza las skill si se requiere

Applied: `TechIcon` backed by `simple-icons` (14 marks rendered on the home page);
`Process` section added with four steps and their tools; skill registry updated with the
project-scoped `modern-web-guidance` entry.

**L9 (Power BI mark, ikigai hero, hover dashboards, headhunter review)**

> okye  verifa y mejora lo  que tengamso  , si existe forma alguna de tener logas con
> respectoa power bi adecuadms  ,seraiga gwenial  , esta parte de aqu Dónde se fueron
> los €243.137 … esta parte no me convecne  algo ejro algo que  muestr de manera grafiaca
> tipo como ikigay , lo que me gusta  lo que  deseo , bacsiametne vender mejro mi perrfil
> con mis beneficios … lo de los 3 proyectos que  cuando apses el mosue aparecesa los
> dashboard adecuadods de cada uno el de fianzas sigue en trabajo pero los demas ya se
> peue usar con el git hb … y despues toma el rol de alguien un head hunter y avelaulo y
> con esavelaucion mejroalo totalmente

Applied: Power BI mark from Microsoft's official `PowerBI-Icons` repo (monochrome);
`Ikigai` replaces the waterfall in the hero; `CaseCard` reveals repository dashboard
screenshots on hover (WebP); `sharp` enabled so images drop from 530 KB → 55 KB.

**Next step:** T0 scaffold, then first deploy to confirm the pipeline before content work.






