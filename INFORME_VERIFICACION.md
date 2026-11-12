# INFORME_VERIFICACION — Fase 1 (solo lectura)

Rama: `review/fase-1` · Sitio auditado: `https://daelfame.github.io` + `dist/` local
Método: build local (`npm run build`), crawler propio sobre `dist/`, Lighthouse sobre
producción (Chrome headless), y tests ejecutados en clones temporales de cada repo.

---

## A) CONFIRMADO (con evidencia)

### A1. Páginas ES enlazan a rutas EN — 12 ocurrencias (6 únicas)
**Evidencia** (crawler sobre `dist/`):
```
es/index.html       -> /work/fpa-forecasting/
es/index.html       -> /work/peru-budget-lakehouse/
es/index.html       -> /work/ucsp-market-intelligence/
es/work/index.html  -> /work/fpa-forecasting/
es/work/index.html  -> /work/peru-budget-lakehouse/
es/work/index.html  -> /work/ucsp-market-intelligence/
```
**Causa:** `src/data/cases.ts` define `href: '/work/...'` fijo (EN), y `CaseCard.astro`
usa `item.href` sin localizar. `SelectedWork.astro` sí localiza el enlace "todos", pero
no las tarjetas.
**Impacto:** un lector ES hace clic en "Ver caso" y aterriza en la versión EN.

### A2. El 404 enlaza a rutas inexistentes
**Evidencia:** `dist/404.html -> /404/` y `-> /es/404/` (404). No existe `/404/index.html`.
**Causa:** `BaseLayout` pasa `Astro.url.pathname` (`/404/`) al selector de idioma.
**Impacto:** el selector EN/ES dentro del 404 lleva a otro 404.

### A3. Texto en inglés dentro de páginas ES
**Evidencia:** en `dist/es/about/index.html` y `dist/es/cv/index.html` aparecen:
`Jan 2026`, `Aug 2024`, `Jun 2023`, `May 2020`, `Dec 2016`,
`Government & Corporate Contracting`, `Fast Casual Food Industry`,
`Automotive Service`, `Hospitality`, `KPMG en Peru`.
**Causa:** `src/data/profile.ts` → `experience[].org` y `[].period` son `string` plano,
no bilingües. `AboutPage.astro` y `CvPage.astro` los imprimen tal cual.

### A4. Formatos numéricos en inglés dentro de páginas ES
**Evidencia:** `S/ 91.43B`, `S/ 5.63B`, `29.5M`, `17.4M`, `0.3%`, `1.6pp`,
`out-of-sample` en HTML de `dist/es/`.
**Causa:** `cases.ts` → `metrics[].value` son strings compartidos entre idiomas, y la
narrativa ES usa "B" y decimal con punto.
**Convención propuesta:** ES → `29,5 M`, `0,3 %`, `1,6 pp`, `S/ 91,43 mil millones`,
"fuera de muestra"; EN → `29.5M`, `0.3%`, `1.6pp`, `S/ 91.43B`.

### A5. El conteo de tests del FP&A está desactualizado
**Evidencia** (clon temporal, `uv sync --group dev` + `uv run pytest -q`):
```
83 passed, 1 warning in 70.08s
```
El sitio dice **74** (`src/data/cases.ts`, métrica y sección "How I proved it").
El Lakehouse sí coincide: **131 passed in 23.62s**.
**Impacto:** la cifra publicada es más baja que la real (no es inflado, pero es inexacto).

### A6. `og:locale` incorrecto
**Evidencia:** `dist/es/index.html` → `og:locale" content="es_ES"` (España).
**Corrección:** `es_PE` o `es_419`.

### A7. Una sola imagen OG para las 15 páginas
**Evidencia:** único valor distinto en todo `dist/`:
`https://daelfame.github.io/og.png`.
**Impacto:** compartir un caso muestra la tarjeta genérica, no el caso.

### A8. Afirmación no sostenible en el bio (About + CV)
**Evidencia:** `src/data/profile.ts`, `bio`:
EN "built the pipelines and dashboards those same finance teams now rely on";
ES "construí los pipelines y dashboards de los que hoy dependen esos mismos equipos".
**Problema:** "dependen" implica producción continua; el CV no lo respalda así.
Reescribir con hechos: dashboards en producción en Triburritos y Talleres Escarcina.

### A9. "1.er puesto global en KPMG" aparece dos veces en About
**Evidencia:** `AboutPage.astro` renderiza `profile.kpmg` (banda destacada) **y** el
bullet de la experiencia KPMG con la misma frase.
**Problema:** repetición + sin enlace a certificado/insignia.

### A10. El caso FP&A es una simulación y no se advierte arriba
**Evidencia:** solo la sección 05 de `cases.ts` dice "competitive business simulation".
La tarjeta de la home y el encabezado del caso no lo mencionan.
**Riesgo:** se lee como un encargo real. Es el hallazgo de credibilidad más serio.

### A11. La tarjeta FP&A declara Power BI en el stack y a la vez "en progreso"
**Evidencia:** `cases.ts` FP&A `stack: [Python, Power BI, pytest]` y
`inProgress: "Power BI report in progress"`. Contradicción visible en la tarjeta.

### A12. Sitio vs CV: conteo de tests
El CV EN/ES no menciona 74 (solo "131" para el Lakehouse). El **sitio** sí dice 74 y el
repo tiene 83. Corregir el sitio; el CV queda igual.

---

## B) NO VERIFICADO — requiere datos tuyos

1. **29.5M filas / 8M fuente / S/ 0.00**: documentado en el README desde una corrida
   registrada. El CSV del MEF no está en el repo, así que no puedo recomputarlo.
   Los 131 tests pasan, pero sobre la muestra demo.
2. **0.3% de error de forecast**: documentado; backtest de 2 pliegues sobre 4 años
   simulados. No hay baseline ingenuo publicado (ver Fase 2f).
3. **r = 0.94 (UCSP)**: documentado; no se declara *n* ni unidad de análisis.
   Los datos no están en el repo (requiere Power BI + notebooks).
4. **17.4M registros / 174 universidades / −1.6 pp**: documentado; datos no incluidos.
5. **"1.er puesto global" en KPMG**: no hay enlace a certificado ni insignia. Necesito la URL.
6. **Origen de UCSP**: no se aclara si fue encargo real o ejercicio técnico.
7. **Nivel de inglés**: el CV dice "profesional"; sin certificado. Confirmar nivel honesto.
8. **Demos en vivo**: ninguna publicada. Lakehouse corre con Streamlit/Docker local;
   UCSP no tiene Power BI publicado.
9. **UCSP — tests/CI**: no encontré suite de tests ni workflow en el repo.
10. **Lighthouse**: 100/100/100/100 en home (desktop y móvil), caso Peru (desktop) y CV
    (desktop). Pero los overlays de hover (etiqueta sobre la captura) no se evalúan sin
    hover → contraste manual pendiente.

---

## C) RECOMENDADO PERO NO APLICADO

- Imagen OG por caso (con título + métrica principal).
- Demo en vivo del Lakehouse (Streamlit Community Cloud) y deck/Power BI publicado de UCSP.
- Plan dbt para la capa Gold (Fase 3.4).
- Reescribir About como narrativa corta (hoy es copia del CV).
- CTA de contacto arriba ("Abierto a roles remotos…").
- Alternativa a "Una persona. Cuatro sillas." en español.
- `og:locale:alternate`, `twitter:image`.
- Comprimir roles antiguos (J-1, Toro Loco) en el CV.

---

## Lighthouse (antes)

| Página | Perf | A11y | Best practices | SEO |
|---|---|---|---|---|
| Home (desktop) | 100 | 100 | 100 | 100 |
| Home (móvil) | 100 | 100 | 100 | 100 |
| Caso Peru (desktop) | 100 | 100 | 100 | 100 |
| CV (desktop) | 100 | 100 | 100 | 100 |

Sin problemas automáticos. Único riesgo manual: contraste de la etiqueta superpuesta a la
captura (solo visible en hover).

---

## Decisiones que necesito de vos

1. **Titular / descriptor**: elegir entre opciones (Fase 2c). Hoy: "Analytics Engineer ·
   Accounting background" + "Finance data that ties out."
2. **Certificado KPMG**: URL de la insignia (o quitamos la mención duplicada).
3. **Origen de UCSP**: ¿encargo real o ejercicio? (declararlo cambia el texto).
4. **Nivel de inglés** a declarar.
5. **¿Reordenar la home por solidez?** (Lakehouse, UCSP, FP&A) — Fase 2b.
6. **¿Añadimos el baseline ingenuo** al repo del FP&A para sostener el 0.3%? (Fase 2f).
