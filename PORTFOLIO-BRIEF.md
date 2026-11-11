# Portfolio Brief — Joaquin Cardenas

> Self-contained handoff document. Pass this file to any reviewer — human or AI — and
> it should understand the project, its intent, its decisions, and exactly what to
> evaluate, without needing the conversation that produced it.

---

## 1. What this is

A personal portfolio website for **Joaquin Cardenas** (GitHub `DaelFame`), an accountant
in Arequipa, Peru, who also builds data pipelines and BI. The site is a **recruiter-facing
layer** over three existing public repositories, not a gallery of screenshots.

**Positioning — layered, each line doing one job:**

| Layer | EN | ES | Job |
|---|---|---|---|
| Eyebrow | Analytics Engineer · Accounting background | Ingeniero de analítica · Base contable | the role, at a glance |
| H1 | **Finance data that ties out.** | **Datos financieros que cuadran.** | the result the reader gets |
| Lede | I'm an accountant who builds the pipelines and dashboards, so the numbers match from the ledger to the decision. | Soy contador y construyo los pipelines y dashboards, para que los números cuadren desde el asiento hasta la decisión. | who he is + why it's credible |
| Tagline (kept in the "How I work" block) | I read the ledger. I build the pipeline. | Entiendo el asiento. Construyo el pipeline. | the memorable hook, no longer carrying all the weight |

The rare profile it claims: one person who does accounting **and** data — so nothing is
lost in translation between the financial statement and the dashboard. "Ties out" is
deliberate: it is accountant **and** finance-manager language, and it is provable — the
Lakehouse reconciles to S/ 0.00.

**Target audience:** recruiters and hiring managers for FP&A analyst, BI analyst, and
analytics-engineering roles in Peru / LatAm / remote.

---

## 2. The person (source: `src/data/profile.ts`, `odd/sources/cv.md`)

- Accounting student at Universidad Católica San Pablo (UCSP), degree expected 2027.
- **1st globally in KPMG's Audit Foundations 1 training program** (international cohort),
  Jan–Mar 2026 internship.
- ~5 years of operations/BI work before KPMG: Toro Loco (GM & revenue analyst, +55%
  revenue via e-invoicing), Talleres Escarcina Torres (Power BI on PostgreSQL for AP/AR),
  Triburritos (BI dashboards, +30% reporting efficiency), La Katita (contracting ops,
  −15% delivery time), two US hospitality seasons in English.
- Tools: Python (Polars, pandas), SQL, DuckDB, Power BI (DAX), Excel, Streamlit, Prefect,
  Docker, pytest, CI/CD.

---

## 3. Tech stack

| Concern | Choice | Why |
|---|---|---|
| Framework | **Astro 5** (static output) | Zero JS by default; content-driven; build → plain HTML |
| Styling | Hand-written CSS with **design tokens** (no Tailwind) | 6-page site; tokens outlive a class soup |
| Icons | `simple-icons` (CC0) + official Power BI geometry from `microsoft/PowerBI-Icons` | No invented logos |
| i18n | Astro built-in i18n, EN at root + ES under `/es/` | Hand-written dictionaries, no auto-translate |
| Theming | CSS tokens + inline no-flash script, `prefers-color-scheme` | Both themes meet WCAG AA |
| Images | Astro assets → WebP (sharp) | 530 KB of screenshots → 55 KB |
| Deploy | GitHub Pages via Actions (`deploy.yml`) | Free, zero-ops |
| Guidance | `modern-web-guidance` skill (Google Chrome) | Baseline-aware web platform best practices |

Local run: `npm install && npm run dev` → `http://localhost:4321`.

---

## 4. Site map (15 pages)

```
/                        Home (EN)              /es/                     Home (ES)
/work/                   Work index (EN)        /es/work/                Work index (ES)
/work/fpa-forecasting/   Case study (EN)        /es/work/fpa-forecasting/  (ES)
/work/peru-budget-lakehouse/                    /es/work/peru-budget-lakehouse/
/work/ucsp-market-intelligence/                 /es/work/ucsp-market-intelligence/
/about/                 About (EN)              /es/about/               About (ES)
/cv/                    CV, print-ready (EN)    /es/cv/                  CV (ES)
404.html
```

Every EN page has an ES sibling. `hreflang` alternates are reciprocal and include
`x-default`. The language switch keeps the reader on the same page and remembers the
choice.

---

## 5. Home page structure (top to bottom)

1. **Hero** — eyebrow ("Analytics Engineer · Accounting background"), H1 ("Finance data
   that ties out."), lede (accountant who builds the pipelines and dashboards), CTAs
   (See the work · GitHub · LinkedIn).
2. **Capability map** (right of hero) — four overlapping circles: **Accounting · FP&A ·
   Data Engineering · Business Intelligence**, intersecting at **"One person. Four
   seats."** Each quadrant's legend line states an *outcome*, not a sentiment:
   - Accounting → *"The books close: AP/AR, month-end and reconciliations that actually tie out."*
   - FP&A → *"The numbers are explained: budget vs actual, variance and scenarios."*
   - Data engineering → *"The data holds: pipelines, a star schema, 131 tests, reconciliation gates."*
   - Business intelligence → *"The decision is made: dashboards that end in a recommendation."*
3. **Selected work** — three case cards. Each shows the **real dashboard screenshot** on
   hover (FP&A shows a "case study in progress" placeholder — its Power BI report is not
   finished).
4. **How I work** — a four-step process, headed by the retained tagline *"I read the
   ledger. I build the pipeline."*: Record and close → Plan and explain → Build the
   platform → Turn it into a decision, each step carrying its tools with brand marks.

> Design note: an earlier "ikigai" (what I love / what I'm good at) and a "pillars"
> section were removed for being soft and redundant. The home now has **three non-overlapping
> blocks**: what I am → what I did → how I work.

---

## 6. Case studies (source: `src/data/cases.ts`)

Each case page follows a fixed five-section narrative, deliberately ending on data
honesty:

1. **The question** · 2. **What I found** · 3. **How I proved it** · 4. **What it decides** · 5. **What this does not prove**

| # | Case | Headline result | Key metrics | Stack |
|---|---|---|---|---|
| 01 | FP&A Forecasting & Variance Analysis | €243,137 of variance traced line by line to OpEx | +0.9% rev, −61.1% net income, 0.3% forecast error, 74 tests | Python · Power BI · pytest |
| 02 | Peru Budget Lakehouse | 8M rows → 29.5M facts, reconciled to S/ 0.00 | 8M, 29.5M, S/ 0.00, 131 tests | Polars · DuckDB · Prefect · Docker |
| 03 | UCSP Market Intelligence | −1.6pp market share hidden behind +19% volume | 17.4M records, −1.6pp, 174 unis, r=0.94 | Power BI · DAX · Python |

The FP&A case embeds the **variance waterfall** (the bridge +74,457 / −359,888 / +24,294 /
+18,000 = −243,137) as section 2's visual, with the footnote that €150,000 of general
expenses carry no supporting document.

**Data-honesty stance (a deliberate differentiator):** every case ends with "what this
does not prove". The FP&A case is a competitive simulation, not a real company's books;
the Peru demo is a 450k-row sample that hides two KPIs rather than misrepresent them;
UCSP uses public enrollment data with no P&L. The site leads with this instead of
burying it.

---

## 7. Design system (source: `src/styles/tokens.css`, `AGENTS.md`)

- **Palette:** ink `#101215`, paper `#FFFFFF`, paper-2 `#F7F7F5`, muted gray, one accent
  (`#0F6B58` light / `#3DBFA0` dark), one alert (`#B45309` light / `#E08A4A` dark).
  All colours live in `tokens.css` only — no hardcoded hex elsewhere.
- **Type:** system sans stack; monospace (`ui-monospace`) for figures, chips and labels;
  tabular numerals for all numbers. Scale: 17/19/24/32/44 → clamp(40px, 6vw, 64px).
- **Rules:** 1px hairlines over shadows, radius ≤ 10px, one accent, no gradients,
  no glassmorphism, no parallax. Motion = 12px fade/rise, 200–220ms, and everything
  respects `prefers-reduced-motion`.
- **Baseline target:** Baseline 2024 (recorded in `AGENTS.md`, read by the
  `modern-web-guidance` skill).
- **Budgets:** JS ≤ 10 KB gzip (theme boot, toggle, language pref, hover polish);
  Lighthouse target ≥ 95 across all four categories; both themes WCAG AA.

---

## 8. Accessibility, SEO, performance (already done)

- Semantic landmarks, skip link, visible focus rings, keyboard-reachable theme and
  language toggles, `aria-pressed`/`aria-current` state.
- `<html lang>` per locale, per-page canonical, `hreflang` + `x-default`, JSON-LD
  `Person`, sitemap, robots.
- Theme set before first paint (no flash); `color-scheme` per theme; accent differs per
  theme to hold contrast.
- Screenshots: PNG → WebP via Astro assets; lazy-loaded; inert on touch and reduced-motion.

---

## 9. Status — DONE vs PENDING

**Done:** all 15 pages, EN+ES, light/dark, responsive, the three case studies, About, CV
(print-ready HTML), brand marks (incl. official Power BI), capability map, process
section, SEO + JSON-LD, image optimization, CI workflow.

**Pending (the only remaining work before it is "live and polished"):**

1. **Open Graph image** — a 1200×630 share card (name + "Accounting & Data") so LinkedIn
   shares show a preview instead of nothing.
2. **Deploy** — create the repo `daelfame.github.io`, push, and let the existing
   `deploy.yml` publish to `https://daelfame.github.io`.
3. *(Optional)* A generated `.pdf` version of `/cv/`, on top of the print-ready page.
4. *(Optional)* Custom domain.

---

## 10. What to evaluate (please score / critique these specifically)

1. **Positioning clarity** — within 5 seconds, is it clear what this person is and who
   they're for? Does "I read the ledger. I build the pipeline." land?
2. **The capability map** — does "One person. Four seats." read as a concrete, defensible
   claim rather than an overpromise? Are the four outcomes specific enough?
3. **Evidence density** — do the case cards give enough hard numbers to be credible
   without requiring a click? Is any number vague or inflated-sounding?
4. **Data honesty** — does leading with "what this does not prove" build trust, or does
   it undercut the pitch? (This is a deliberate choice; evaluate whether it works.)
5. **Copy tone** — is any line weak, generic, or awkward in either language?
6. **Visual hierarchy** — does the home page flow, or does any section compete with
   another? Is anything visually loud where it should be quiet?
7. **Bilingual quality** — is the Spanish a real translation or a literal one? Does any
   term sound machine-generated?
8. **Broken/awkward anything** — links, empty states, hover behaviour on touch, the
   FP&A "in progress" placeholder.
9. **Recruiter's first 30 seconds** — what would make a hiring manager bounce?

---

## 11. File map (where to look)

```
src/data/cases.ts          case studies + story + metrics
src/data/profile.ts        bio, experience, education, skills
src/i18n/ui.ts             UI strings (EN/ES)
src/layouts/BaseLayout.astro   head, header, footer, JSON-LD, theme boot
src/components/CapabilityMap.astro  hero diagram ("four seats")
src/components/CasePage.astro       case study layout
src/components/CaseCard.astro       card + hover dashboard preview
src/components/Process.astro        "how I work" steps
src/components/HeroWaterfall.astro  FP&A variance waterfall (SVG, zero JS)
src/components/TechIcon.astro       brand marks incl. Power BI
src/styles/tokens.css               the design tokens (both themes)
AGENTS.md                            working agreement + Baseline target
odd/tasks/portfolio-site.md          full spec, decisions, and request log
```
