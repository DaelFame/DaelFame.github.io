# REVIEW.md — Portfolio cleanup

Branch: `portfolio-cleanup` (site and `fpa-forecasting-case-study`) and
`portfolio-cleanup` (profile README). Nothing was pushed to `main`.

---

## Fase 0 — Hallazgos de consistencia

| # | Hallazgo | Resolución |
|---|---|---|
| a | Net income base: the site said plan €3,954,345 / actual €4,822,290 / +€867,945, while the per-year list summed to a different figure. | Confirmed the base is **pre-tax, FY 2026–2029** for the variance and **FY 2024–2028** for the P&L history. Per-year variances −243,137 + 351,995 + 499,886 + 259,201 sum exactly to 867,945. The case text already says "pre-tax, FY 2024–2029"; the README now has an explicit Status table. |
| b | Bridge: +551,368 (unit cost) + 255,229 (volume) + 572,000 (extraordinary) − 326,210 (opex) = +1,052,387, not +867,945. | The four figures are **drivers**, not an exhaustive bridge; the difference (−184,442) is the residual, exposed by the model as `Bridge Residual = Bridge Total − Net Income vs Budget`. The visible bridge is the 2026 one: +74,457 − 359,888 + 24,294 + 18,000 = −243,137, which **does** close. Not changed. |
| c | Budget accuracy: README showed −61.1% / +127.0% / +7.5%; site showed −61.1% / +43.3% / +43.3% / +12.2%. | The site values match `fact_variance.csv` and the report. The README's 2028 **+7.5%** was stale; the site is correct and the README already carried +43.3% / +12.2% in its live-numbers block. No site edit was needed. |
| d | "Four years" (CV) vs five years (README). | The P&L history is five years (2024–2028); the budget variance is four years (2026–2029). The CV reads "across FY 2024–2029" and no longer says "four years". |
| e | UCSP share: −1.6 pp (CV/profile) vs −1.7 pp (site). | Dashboard reads 10.2% (2020) → 8.5% (2025), a **−1.7 pp** move. CV, site, CE and profile README were unified to −1.7 pp. |
| f | Backtest "0.3%" vs 76.2% / −21.4%. | **No artifact produces 0.3%**: not `_Measures.tmdl`, not `fact_backtest.csv`, not the report pages. Removed from CV and from both READMEs; replaced with the measurable folds: 2028 86.9% (−8.8% bias) and 2029 76.2% (−21.4% bias). |
| g | Repo state vs site claims. | `fpa-forecasting-case-study` already described five finished pages; a Status table was added so the claim is explicit. |
| h | Other figures. | The +55% / +30% / −15% experience figures had **no baseline and no measurement method** and were removed (decision 3). The rest of the case numbers trace to `data/processed/` marts. |

---

## Fase 1 — Cambios aplicados

### Sitio (`DaelFame.github.io` → `portfolio-cleanup`, commit `884b114`)

| Archivo | Antes | Después |
|---|---|---|
| `src/data/profile.ts` | Summary and About closed with "revenue grew 55%". | Removed; About closes with what was actually done: closed months for a bar and a contractor, reconciled accounts at KPMG, three public projects. |
| `src/data/profile.ts` | La Katita: "cut delivery times by 15%". | "Implemented budget-vs-actual tracking and routing metrics for institutional food-service logistics." |
| `src/data/profile.ts` | Triburritos: "raising reporting efficiency 30%". | "Implemented automated Power BI reporting (cash flow, staff, KPIs) where no measurement existed." |
| `src/data/profile.ts` | Toro Loco: "driving a 55% revenue increase". | "Implemented sales, cost and KPI measurement (e-invoicing and Power BI dashboards) and aligned managers on those metrics; the operation went from 2 to 6 locations." **Dates pending your confirmation** (May 2020 – Jun 2022). |
| `src/data/profile.ts` | Title "Financial data analyst · Pipelines & BI". | "Financial Data Analyst" / "Analista de datos financieros". |
| `src/data/profile.ts` | J-1 experience entry with one bullet. | Entry removed; the two US seasons now live in the languages line. |
| `src/data/cases.ts` | UCSP: "Built as a technical assessment for a hiring process". | "Analytical exercise using public enrollment data (SUNEDU / TUNI.PE)." |
| `src/data/cases.ts` | Title "UCSP Market Intelligence". | "University Market Intelligence — Arequipa". |
| `src/data/cases.ts` | Order: Peru 01, UCSP 02, FP&A 03. | FP&A 01, Peru 02, UCSP 03 — one sorted order for the grid, home selection, CV and next-case links. |
| `src/data/cases.ts` | "reconciled to S/ 0.00". | "the Silver and Gold layers reconcile to S/ 0.00 (internal control, not a tie-out to the official MEF total)". |
| `src/data/cases.ts` | UCSP 10.1% → 8.4%, −1.6pp. | 10.2% → 8.5%, −1.7pp. |
| `src/i18n/ui.ts` | "Escribime", "Empezá … tenés". | "Escríbeme", "Empieza … tienes". |
| `src/i18n/ui.ts` | "Arequipa, Peru"; "Open to remote roles". | "Arequipa, Perú"; contractor availability + UTC−5. |
| `scripts/build-cv.mjs` | Appended "technical assessment" to the UCSP CV entry. | Removed. |

### Repos

| Repo | Cambio |
|---|---|
| `fpa-forecasting-case-study` (branch `portfolio-cleanup`, commit `1f527ec`) | CI badge now links to the workflow; the 0.3% claim replaced by the measured folds; added a Status table; added the link to the written case. |
| `DaelFame/DaelFame` (branch `portfolio-cleanup`) | Old Netlify link → `https://daelfame.github.io`; FP&A as case 01, UCSP renamed and corrected to −1.7 pp; in-progress rows removed; title unified; contractor availability. |

---

## Pendiente de tu decisión

1. **Fechas de Toro Loco** — confirmar que el paso de 2 a 6 locales ocurrió entre may 2020 y jun 2022. Si no se puede confirmar, la frase pierde la cifra de locales.
2. **Disponibilidad** — falta el tramo "[X h/semana ahora; tiempo completo desde mes/año]". El sitio publica solo "independent contractor · UTC−5".
3. **`data/` de la simulación** — los workbooks (`data/Matriz_General_*.xlsx`) y los decision logs (`data/decisiones/*.json`) siguen en el historial de `fpa-forecasting-case-study`. Sin ejecutar:
   ```bash
   git filter-repo --invert-paths \
     --path data/Matriz_General_0.xlsx --path data/Matriz_General_1.xlsx \
     --path data/Matriz_General_4.xlsx --path data/Matriz_general_2.xlsx \
     --path data/Matriz_general_3.xlsx --path data/decisiones
   ```
   Requiere `git filter-repo` y reescribir el historial remoto; coordinar con cualquier clon existente.
4. **Renombrar `cg_01` a `fpa_engine`** (no ejecutado). Rompería: imports `from cg_01...` en `src/`, `pyproject.toml` (`[project.scripts]`, paquetes), los `uv run python -m cg_01*` de README/CV/CI, rutas en `dashboard/AGENTS.md` y specs, y el nombre de carpeta en `docs/`.
5. **Scaffolding de agentes** (`.atl`, `.specify`, `AGENTS.md`, `specs/`): propuesta, sin borrar nada. `.atl/` contiene rutas absolutas de una máquina (WSL) y debería ir a `.gitignore`; `.specify/memory/` y `specs/` aportan contexto real y conviene moverlas a `docs/agent-context/`; `AGENTS.md` es útil, se queda.
6. **Open Graph por caso** — no implementado; hoy todas las páginas comparten `og.png`.
7. **Demos** — no existen. Para desplegar el Lakehouse: subir `dashboard/` a un repo con `requirements.txt`, crear la app en Streamlit Community Cloud apuntando a `app.py`, y añadir la URL al caso y al README.

## Pendiente técnico

- `gh` no está autenticado en esta máquina, así que las ramas se empujaron pero los PRs hay que abrirlos desde el enlace que devolvió GitHub:
  - `DaelFame/DaelFame` → `/pull/new/portfolio-cleanup`
  - `fpa-forecasting-case-study` → `/pull/new/portfolio-cleanup`
  - `DaelFame.github.io` → `/pull/new/portfolio-cleanup`
- El sitio publica desde `main`; hasta que se mergee la rama, `daelfame.github.io` sigue mostrando la versión anterior.
