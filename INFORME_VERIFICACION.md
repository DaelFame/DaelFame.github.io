# INFORME_VERIFICACION — Fases 1 y 2

Rama: `review/fase-2` (desde `review/fase-1`) · Sin push.
Sitio auditado: `https://daelfame.github.io` + `dist/` local.

---

## A) CONFIRMADO Y CORREGIDO

| # | Hallazgo | Estado | Dónde |
|---|---|---|---|
| A1 | Enlaces ES → EN en tarjetas de caso (12) | **Corregido**: `CaseCard` localiza `item.href` | `CaseCard.astro` |
| A2 | 404 enlazaba a `/404/` y `/es/404/` | **Corregido**: `hideLangSwitch` en 404 | `404.astro`, `BaseLayout.astro` |
| A3 | Fechas y empresas en inglés en ES | **Corregido**: `org` y `period` bilingües | `profile.ts` |
| A4 | Formatos numéricos en inglés en ES | **Corregido**: métricas bilingües + "S/ 91,43 mil millones" | `cases.ts`, `CasePage.astro` |
| A5 | FP&A decía 74 tests; el repo tiene **83** | **Corregido**: 83 en sitio y CV | `cases.ts` |
| A6 | `og:locale` = `es_ES` | **Corregido**: `es_PE` | `BaseLayout.astro` |
| A7 | Una sola imagen OG | **NO aplicado** (ver C) | — |
| A8 | Bio "equipos que hoy dependen" | **Corregido**: bio reemplazada por la nueva | `profile.ts` |
| A9 | "1.er puesto global" dos veces en About | **Corregido**: una sola mención, en el bullet de KPMG | `profile.ts`, `AboutPage.astro` |
| A10 | FP&A simulación no advertida | **Corregido**: etiqueta en tarjeta y caso; años → Año 1–4 | `cases.ts`, `CaseCard`, `CasePage` |
| A11 | Power BI en stack FP&A sin reporte | **Corregido**: fuera del stack; "reporte no construido" | `cases.ts` |

### Decisiones del dueño aplicadas

1. **Título**: "Financial data analyst · Pipelines & BI" / "Analista de datos financieros · Pipelines y BI". Eliminado "Analytics Engineer" y "Soy contador" de titulares, eyebrow, bio y metadatos. ("Analytics engineering" queda solo como disciplina del caso Lakehouse.)
2. **KPMG**: una sola mención, en el bullet de la experiencia, sin enlace.
3. **UCSP**: declarado como **prueba técnica** en tarjeta, caso y CV; pregunta reescrita; r = 0.94 con **n = 5** (una observación por universidad privada) y lenguaje de **asociación**, con confusores explícitos.
4. **Inglés**: **B2** en sitio y ambos CV.
5. **Home**: orden **Lakehouse → UCSP → FP&A**.
6. **FP&A 0.3%**: **retirado** de portada, bio y CV (no hay baseline que lo respalde todavía). El caso dice que se está añadiendo el baseline.

### Otras correcciones

- **CV generado desde la fuente única** (`profile.ts` + `cases.ts`) con `npm run cv`; ambos PDFs se regeneran desde ahí.
- CV: orden resumen → proyectos → experiencia → formación/certificaciones → habilidades/idiomas; header "Remote · Arequipa, Peru (UTC-5)"; J-1 y Talleres comprimidos; 2 páginas cada uno (máximo permitido).
- **Lima vs Cusco**: se mantiene el número (S/ 91,43 vs 5,63 mil millones) pero el texto ahora dice que es en parte estructural (ministerios ejecutan en Lima) y **no** un ranking de desempeño regional.
- **Reconciliación**: el caso aclara que es Silver vs Gold, **no** contra el total oficial del MEF.
- **Números eliminados** por no derivarse del repo: "54M+ records", "108 tests", "real-time".

---

## B) NO VERIFICADO — requiere datos tuyos

1. **dbt**: **confirmado que NO existe** en `peru-budget-lakehouse` (sin `dbt_project.yml`, sin carpeta, sin menciones). No se menciona dbt en sitio ni CV.
2. **"54M+ records" / "108 tests" / "real-time"**: estaban en `CV_master.pdf` (líneas 97-98). **Excluidos**: el repo da 29.5M/8M y 131 tests, batch.
3. **Bullets del CV viejo no confirmadas — necesito tu confirmación una por una:**
   - KPMG: "evaluating internal controls and integrated data analytics workflows".
   - La Katita: "continuous monitoring controls" y "vendor procurement and OPEX cost control".
   - Triburritos: "standardized cloud-based accounting data entry".
   - Talleres: "real-time AP/AR" (se dejó "AP/AR monitoring", sin "real-time").
4. **0.3% de error de forecast**: retirado. Falta añadir baseline naive/seasonal-naive al repo del FP&A y comparar; sin eso, la métrica no vuelve.
5. **29.5M / 8M / S/ 0.00**: documentados en el README desde una corrida registrada; el CSV del MEF no está en el repo, no se pueden recomputar aquí. Los 131 tests pasan (`131 passed in 23.62s`).
6. **FP&A**: `83 passed in 70.08s` (verificado ejecutando).
7. **Certificado KPMG**: sin URL.
8. **Nivel de inglés**: declarado B2 por decisión del dueño; sin certificado adjunto.

---

## C) RECOMENDADO, NO APLICADO

1. **A7 — imagen OG por caso** (hoy una sola para todo el sitio).
2. **Demos en vivo**: Streamlit Community Cloud para el Lakehouse; deck/Power BI publicado para UCSP.
3. **Baseline naive** en el repo del FP&A (bloquea la vuelta del 0.3%).
4. **Plan dbt** para la capa Gold (propuesta, sin ejecutar).
5. **Dominio propio**.
6. **Contraste manual** de la etiqueta superpuesta a la captura en hover (Lighthouse no la evalúa sin hover).

---

## Verificación posterior

| Check | Resultado |
|---|---|
| `npm run check` | 0 errores, 0 warnings |
| `npm run build` | 15 páginas |
| Crawler (enlaces) | **0 rotos, 0 ES→EN** |
| Lighthouse home desktop | 100 / 100 / 100 / 100 |
| Lighthouse home móvil | 100 / 100 / 100 / 100 |
| Lighthouse caso Peru | 100 / 100 / 100 / 100 |
| Lighthouse CV | 100 / 100 / 100 / 100 |
| `pdftotext` ambos CV | sin artefactos de acento ("Per´u" = 0) |
| CV EN/ES | 131 ✓, 83 ✓, B2 ✓, 0.3% ausente ✓, UCSP "technical assessment" ✓ |
| Cifras sitio vs CV ES vs CV EN | sin discrepancias en 131/83/29.5M/8M/17.4M/174/B2 |

---

## Decisiones abiertas

1. ¿Añadimos el **baseline naive** al repo del FP&A para recuperar el 0.3%?
2. ¿Confirmás/descartás las **4 bullets del CV viejo** de la lista B.3?
3. ¿Querés que haga las **OG por caso** (A7) y las **demos en vivo** en otra rama?
