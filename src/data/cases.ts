import type { Lang } from '../i18n/ui';

export interface Bilingual {
  en: string;
  es: string;
}

export interface Tech {
  label: string;
  slug?: string;
}

export interface Metric {
  value: Bilingual;
  label: Bilingual;
}

export interface StorySection {
  title: Bilingual;
  body: Bilingual[];
  waterfall?: boolean;
}

export interface CaseStudy {
  slug: string;
  index: string;
  discipline: Bilingual;
  title: string;
  period: Bilingual;
  question: Bilingual;
  result: Bilingual;
  metrics: Metric[];
  story: StorySection[];
  stack: Tech[];
  href: string;
  repo: string;
  preview?: 'ucsp' | 'peru' | 'fpa';
  inProgress?: Bilingual;
  /** Visible disclosure at the top of the card and page. */
  disclosure?: Bilingual;
  cvBullets: Bilingual[];
}

export const cases: CaseStudy[] = [
  {
    slug: 'peru-budget-lakehouse',
    index: '01',
    discipline: { en: 'Analytics engineering', es: 'Ingeniería de datos' },
    title: 'Peru Budget Lakehouse',
    period: { en: '2026', es: '2026' },
    question: {
      en: 'Where is public money executed — and where is it not?',
      es: '¿Dónde se ejecuta el presupuesto público — y dónde no?',
    },
    result: {
      en: '8M source rows rebuilt into 29.5M facts, reconciled to S/ 0.00.',
      es: '8M filas fuente convertidas en 29.5M hechos, reconciliadas a S/ 0.00.',
    },
    metrics: [
      { value: { en: '8M', es: '8 M' }, label: { en: 'source rows', es: 'filas fuente' } },
      { value: { en: '29.5M', es: '29,5 M' }, label: { en: 'fact rows in a star schema', es: 'filas de hechos en un star schema' } },
      { value: { en: 'S/ 0.00', es: 'S/ 0,00' }, label: { en: 'Silver vs Gold difference', es: 'diferencia Silver vs Gold' } },
      { value: { en: '131', es: '131' }, label: { en: 'automated tests', es: 'tests automatizados' } },
    ],
    story: [
      {
        title: { en: 'The question', es: 'La pregunta' },
        body: [
          {
            en: 'Peru publishes budget execution as one 88-column spreadsheet, one column per phase per year. Every real question — which regions execute least, how much of the plan was actually spent — requires pivoting 35 financial columns first. Where does the work disappear?',
            es: 'Perú publica la ejecución presupuestal como una planilla de 88 columnas, una columna por fase y por año. Toda pregunta real — qué regiones ejecutan menos, cuánto del plan se gastó de verdad — exige pivotear 35 columnas financieras primero. ¿Dónde se pierde el trabajo?',
          },
        ],
      },
      {
        title: { en: 'What I found', es: 'Qué encontré' },
        body: [
          {
            en: 'The reshape is where the work disappears — every answer rebuilt from scratch, every copy drifting from the truth. This pipeline does the reshape once and makes one reconciled table the single source for every downstream answer.',
            es: 'El reshape es donde se pierde el trabajo — cada respuesta reconstruida desde cero, cada copia alejándose de la verdad. Este pipeline hace el reshape una sola vez y convierte una tabla conciliada en la única fuente de cada respuesta.',
          },
        ],
      },
      {
        title: { en: 'How I proved it', es: 'Cómo lo probé' },
        body: [
          {
            en: '8M rows stream through Bronze → Silver → Gold into a 29.5M-row Kimball star schema. Reconciliation is a gate, not a warning: the pipeline sums Silver and Gold and halts when they differ by more than S/ 0.01. 131 tests, including an end-to-end dashboard render.',
            es: '8M filas fluyen por Bronze → Silver → Gold hacia un star schema Kimball de 29.5M filas. La conciliación es un gate, no una advertencia: el pipeline suma Silver y Gold y se detiene si difieren en más de S/ 0.01. 131 tests, incluido un render end-to-end del dashboard.',
          },
        ],
      },
      {
        title: { en: 'What it decides', es: 'Qué decide' },
        body: [
          {
            en: 'Where money executes, and where it does not. In 2024, Lima reports S/ 91.43 billion of execution; Cusco, the second department, S/ 5.63 billion. That gap is partly structural — national ministries execute from Lima — so it is a question to investigate, not a ranking of regional performance. The dashboard answers it in SQL, or in plain language through an NL-to-SQL interface.',
            es: 'Dónde se ejecuta el dinero y dónde no. En 2024, Lima reporta S/ 91,43 mil millones de ejecución; Cusco, el segundo departamento, S/ 5,63 mil millones. Esa brecha es en parte estructural — los ministerios nacionales ejecutan desde Lima — así que es una pregunta a investigar, no un ranking de desempeño regional. El dashboard la responde en SQL, o en lenguaje natural mediante una interfaz NL-to-SQL.',
          },
        ],
      },
      {
        title: { en: 'What this does not prove', es: 'Qué no prueba' },
        body: [
          {
            en: 'The committed demo is a 450,000-row sample, and the dashboard says so. Two KPIs are hidden in demo mode because a row-level sample cannot represent execution rates honestly. The full pipeline requires the MEF source CSV, which is not committed. Reconciliation is between pipeline layers (Silver vs Gold), not yet against the official MEF total.',
            es: 'El demo publicado es una muestra de 450.000 filas, y el dashboard lo dice. Dos KPIs se ocultan en modo demo porque una muestra a nivel de fila no puede representar tasas de ejecución con honestidad. El pipeline completo requiere el CSV fuente del MEF, que no está commiteado. La conciliación es entre capas del pipeline (Silver vs Gold), todavía no contra el total oficial del MEF.',
          },
        ],
      },
    ],
    stack: [
      { label: 'Polars', slug: 'polars' },
      { label: 'DuckDB', slug: 'duckdb' },
      { label: 'Prefect', slug: 'prefect' },
      { label: 'Docker', slug: 'docker' },
    ],
    href: '/work/peru-budget-lakehouse/',
    repo: 'https://github.com/DaelFame/peru-budget-lakehouse',
    preview: 'peru',
    cvBullets: [
      {
        en: 'Built an end-to-end public budget platform: 8M source rows into a 29.5M-row star schema with 131 automated tests and a reconciliation gate.',
        es: 'Construí una plataforma de presupuesto público: 8M filas fuente convertidas en un star schema de 29.5M filas con 131 tests y un gate de conciliación.',
      },
      {
        en: 'Orchestrated with Prefect/Docker; added a Streamlit dashboard whose conversational layer answers budget questions in SQL.',
        es: 'Orquestado con Prefect/Docker; dashboard Streamlit con una capa conversacional que responde preguntas de presupuesto en SQL.',
      },
    ],
  },
  {
    slug: 'ucsp-market-intelligence',
    index: '02',
    discipline: { en: 'Business intelligence', es: 'Inteligencia de negocio' },
    title: 'UCSP Market Intelligence',
    period: { en: '2026', es: '2026' },
    question: {
      en: 'A public-data exercise: a private university in Arequipa was losing market share while growing. Could public enrollment data show where to grow next?',
      es: 'Un ejercicio con datos públicos: una universidad privada en Arequipa perdía market share mientras crecía. ¿Pueden los datos públicos de matrícula mostrar dónde crecer?',
    },
    result: {
      en: '−1.7pp of market share hidden behind +19% volume growth.',
      es: '−1,7 pp de market share escondidos detrás de +19% de volumen.',
    },
    metrics: [
      { value: { en: '17.4M', es: '17,4 M' }, label: { en: 'enrollment records', es: 'registros de matrícula' } },
      { value: { en: '−1.7pp', es: '−1,7 pp' }, label: { en: 'market share leak', es: 'pérdida de market share' } },
      { value: { en: '174', es: '174' }, label: { en: 'universities benchmarked', es: 'universidades comparadas' } },
      { value: { en: '0.94', es: '0,94' }, label: { en: 'modality–growth correlation', es: 'correlación modalidad–crecimiento' } },
    ],
    disclosure: {
      en: 'Built as a technical assessment for a hiring process, using public enrollment data.',
      es: 'Desarrollado como prueba técnica de un proceso de selección, con datos públicos de matrícula.',
    },
    story: [
      {
        title: { en: 'The question', es: 'La pregunta' },
        body: [
          {
            en: 'A public-data exercise built as a technical assessment, not a client engagement. Enrollment files are published per semester with inconsistent program names, duplicated rows and missing campus fields. The question: can that data show where a university should grow, when the local market is already allocated?',
            es: 'Un ejercicio con datos públicos, hecho como prueba técnica, no como encargo de un cliente. Los archivos de matrícula se publican por semestre con nombres de programa inconsistentes, filas duplicadas y campus faltantes. La pregunta: ¿pueden esos datos mostrar dónde debería crecer una universidad, si el mercado local ya está repartido?',
          },
        ],
      },
      {
        title: { en: 'What I found', es: 'Qué encontré' },
        body: [
          {
            en: 'Growing is not the same as winning. Enrollment rose 19%, but market share fell from 10.2% to 8.5%. The market expansion went mostly to one competitor. The university ranks 5th of 6 in its own city.',
            es: 'Crecer no es lo mismo que ganar. La matrícula subió 19%, pero el market share cayó de 10,2% a 8,5%. La expansión del mercado se la llevó mayormente un competidor. La universidad es 5ª de 6 en su propia ciudad.',
          },
        ],
      },
      {
        title: { en: 'How I proved it', es: 'Cómo lo probé' },
        body: [
          {
            en: '17.4M records cleaned into a Kimball star schema. Across the 5 private universities in Arequipa (n = 5, one observation per university), growth is positively associated with distance-modality share: r = 0.94. The two fastest-growing institutions are 73% and 57% distance; this one is 100% on-campus. This is an association, not proof of cause — brand, price and program mix are plausible confounders. 46 DAX measures, 20 hand-coded HTML flip cards.',
            es: '17.4M registros limpiados en un star schema Kimball. Entre las 5 universidades privadas de Arequipa (n = 5, una observación por universidad), el crecimiento se asocia positivamente con la cuota de modalidad a distancia: r = 0.94. Las dos instituciones que más crecen son 73% y 57% a distancia; esta es 100% presencial. Es una asociación, no prueba de causa — marca, precio y mezcla de programas son confusores plausibles. 46 medidas DAX, 20 tarjetas HTML con flip hechas a mano.',
          },
        ],
      },
      {
        title: { en: 'What it decides', es: 'Qué decide' },
        body: [
          {
            en: 'Four sequenced moves: launch Nursing in distance mode (6,469 enrollments, +124%, 62% already non-presential, 0 share); transfer the existing postgraduate distance capability to undergraduate; defend the regional franchise; and enter Norte + Centro only where no new campus is needed.',
            es: 'Cuatro movimientos secuenciados: lanzar Enfermería a distancia (6.469 matrículas, +124%, 62% ya no presencial, 0% de participación); transferir la capacidad de distancia ya existente en posgrado al pregrado; defender la franquicia regional; y entrar a Norte + Centro solo donde no se necesite campus nuevo.',
          },
        ],
      },
      {
        title: { en: 'What this does not prove', es: 'Qué no prueba' },
        body: [
          {
            en: 'Public enrollment data only — no P&L, tuition or cost data, and no university financials. “Revenue” is expressed as addressable student volume, a demand proxy, never as currency. With n = 5, the correlation is a signal to investigate, not a forecast.',
            es: 'Solo datos públicos de matrícula — sin P&L, matrícula ni costos, y sin estados financieros de la universidad. El “ingreso” se expresa como volumen de estudiantes alcanzable, un proxy de demanda, nunca en moneda. Con n = 5, la correlación es una señal a investigar, no un pronóstico.',
          },
        ],
      },
    ],
    stack: [{ label: 'Power BI', slug: 'powerbi' }, { label: 'DAX' }, { label: 'Python', slug: 'python' }],
    href: '/work/ucsp-market-intelligence/',
    repo: 'https://github.com/DaelFame/ucsp-market-intelligence',
    cvBullets: [
      {
        en: 'Built a two-page Power BI decision deck on 17.4M public enrollment records, exposing a −1.7pp market-share leak hidden behind +19% volume growth.',
        es: 'Construí un deck de decisión de dos páginas en Power BI sobre 17.4M registros públicos, exponiendo una pérdida de −1,7 pp de market share oculta tras +19% de crecimiento en volumen.',
      },
      {
        en: 'Growth is associated with distance-modality share (r = 0.94 across 5 private universities; n = 5) — an association, not a causal claim.',
        es: 'El crecimiento se asocia con la cuota de modalidad a distancia (r = 0.94 entre 5 universidades privadas; n = 5) — una asociación, no una afirmación causal.',
      },
    ],
  },
  {
    slug: 'fpa-forecasting',
    index: '03',
    discipline: { en: 'FP&A analytics', es: 'Analítica FP&A' },
    title: 'FP&A Forecasting & Variance Analysis',
    period: { en: 'FY 2024–2029', es: 'FY 2024–2029' },
    question: {
      en: 'Revenue landed within 0.9% of budget while net income missed by 61%. Which drivers actually moved the result?',
      es: 'El ingreso quedó dentro del 0,9% del presupuesto mientras la utilidad neta fallaba un 61%. ¿Qué drivers movieron realmente el resultado?',
    },
    result: {
      en: 'Net income beat plan by +€867,945 (+21.9%), pre-tax — but +€572K of that surplus is extraordinary income.',
      es: 'La utilidad neta superó el plan en +€867.945 (+21,9%), antes de impuestos — pero +€572K de ese superávit es resultado extraordinario.',
    },
    metrics: [
      { value: { en: '+€867,945', es: '+€867.945' }, label: { en: 'net income vs plan', es: 'utilidad neta vs plan' } },
      { value: { en: '+21.9%', es: '+21,9 %' }, label: { en: 'variance vs plan', es: 'variación vs plan' } },
      { value: { en: '+€572K', es: '+€572K' }, label: { en: 'extraordinary income', es: 'resultado extraordinario' } },
      { value: { en: '−€326K', es: '−€326K' }, label: { en: 'operating expense overrun', es: 'sobrecosto operativo' } },
    ],
    disclosure: {
      en: 'Anonymised competitive business simulation — not a real company’s books. Figures are pre-tax, FY 2024–2029.',
      es: 'Simulación competitiva de negocio anonimizada — no son los libros de una empresa real. Cifras antes de impuestos, FY 2024–2029.',
    },
    preview: 'fpa',
    story: [
      {
        title: { en: 'The question', es: 'La pregunta' },
        body: [
          {
            en: 'An anonymised competitive business simulation of a fashion-accessories manufacturer. In the first year revenue landed within 0.9% of budget while net income missed the plan by 61.1%. From the second year onward the company beat its own plan three years in a row — +127.0%, +43.3% and +12.2%. A miss followed by a streak of beats is not noise. Which drivers explain it, and how much of the surplus is repeatable?',
            es: 'Una simulación competitiva de negocio anonimizada de un fabricante de accesorios de moda. En el primer año el ingreso quedó dentro del 0,9% del presupuesto mientras la utilidad neta fallaba el plan un 61,1%. Desde el segundo año la empresa superó su propio plan tres años seguidos — +127,0%, +43,3% y +12,2%. Un fallo seguido de una racha de excesos no es ruido. ¿Qué drivers lo explican y cuánto del superávit es repetible?',
          },
        ],
      },
      {
        title: { en: 'What I found', es: 'Qué encontré' },
        waterfall: true,
        body: [
          {
            en: 'Across FY 2024–2029, pre-tax: plan net income €3,954,345, actual €4,822,290, variance +€867,945 (+21.9%). Three drivers carry the surplus — unit-cost savings +€551K, volume growth +€255K, and extraordinary income +€572K, which alone is 65.9% of it. Against that, operating expenses ran €326,210 over plan: general expenses +€199,051, R&D +€155,100, insolvency charges +€25,832, partly offset by personnel −€34,773 and depreciation −€19,000. Strip out the one-off and the operating story is thinner than the headline.',
            es: 'En FY 2024–2029, antes de impuestos: utilidad neta plan €3.954.345, real €4.822.290, variación +€867.945 (+21,9%). Tres drivers sostienen el superávit — ahorro de costo unitario +€551K, crecimiento de volumen +€255K y resultado extraordinario +€572K, que por sí solo es el 65,9%. En contra, los gastos operativos se pasaron €326.210 del plan: gastos generales +€199.051, I+D +€155.100, cargos por insolvencia +€25.832, compensados en parte por personal −€34.773 y depreciación −€19.000. Sin el extraordinario, la historia operativa es más delgada que el titular.',
          },
        ],
      },
      {
        title: { en: 'How I proved it', es: 'Cómo lo probé' },
        body: [
          {
            en: 'Two layers, both auditable. The data-cleaning and processing engine (cg_01) ingests the raw Excel closing workbooks, JSON decision logs and Markdown operating notes, and verifies every source file with SHA-256 lineage on each run. It resolves period and quarter blocks, normalises product keys, flags anomalies against balance tolerances and price corridors, and exports a star schema of 18 tables and 28 relationships carrying 94 DAX measures. 83 pytest tests pin accounting identities, referential integrity, the exact variance tie-out and the forecast backtest. On top of it, a five-page Power BI PBIR report: 01 | Summary for the executive P&L, 02 | Profitability for margin drivers, 03 | Variance for the plan-versus-actual bridge, 04 | Forecast for backtest accuracy and the 2030 scenarios, 05 | Market for capacity and unserved demand. Every figure is executed against live DAX at the grain its visual shows before it is written, and every visible string is English.',
            es: 'Dos capas, ambas auditables. El motor de limpieza y procesamiento de datos (cg_01) ingesta los libros Excel de cierre, los logs de decisiones JSON y las bitácoras Markdown, y verifica cada archivo fuente con trazabilidad SHA-256 en cada ejecución. Resuelve bloques de período y trimestre, normaliza claves de producto, marca anomalías contra tolerancias de balance y corredores de precio, y exporta un esquema estrella de 18 tablas y 28 relaciones que sostiene 94 medidas DAX. 83 tests pytest fijan las identidades contables, la integridad referencial, el amarre exacto de la varianza y el backtest del pronóstico. Encima, un reporte Power BI PBIR de cinco páginas: 01 | Summary para el P&L ejecutivo, 02 | Profitability para drivers de margen, 03 | Variance para el puente plan-versus-real, 04 | Forecast para la exactitud del backtest y los escenarios 2030, 05 | Market para capacidad y demanda sin atender. Cada cifra se ejecuta contra DAX en vivo en el grano que muestra su visual antes de escribirse, y todo el texto visible está en inglés.',
          },
        ],
      },
      {
        title: { en: 'What it decides', es: 'Qué decide' },
        body: [
          {
            en: 'The company was capacity-constrained, not demand-constrained: in 2028 the market could not serve 594,748 units of demand — 405,181 neckties, 112,242 scarves and 77,325 socks. The ceiling was production, which turns a commercial question into a capital-allocation decision. And because the budget was beaten three years running, the plan itself needs recalibrating: under-budgeting hides capacity needs and understates cash.',
            es: 'La empresa estaba limitada por capacidad, no por demanda: en 2028 el mercado no pudo atender 594.748 unidades de demanda — 405.181 corbatas, 112.242 bufandas y 77.325 calcetines. El techo era la producción, lo que convierte una pregunta comercial en una decisión de asignación de capital. Y como el presupuesto se superó tres años seguidos, el propio plan necesita recalibrarse: presupuestar a la baja oculta necesidades de capacidad y subestima la caja.',
          },
        ],
      },
      {
        title: { en: 'What this does not prove', es: 'Qué no prueba' },
        body: [
          {
            en: 'This is an anonymised competitive business simulation, not a real company’s books, and all figures are pre-tax. The +€572K extraordinary income is not a repeating earnings stream, so the +21.9% variance should not be read as recurring performance. Revenue detail in the model stops at 2028, so the final year is driven by the forecast layer rather than a new sales close. What the work demonstrates is the method: raw workbooks in, a traced and tested model out.',
            es: 'Es una simulación competitiva de negocio anonimizada, no los libros de una empresa real, y todas las cifras son antes de impuestos. El resultado extraordinario de +€572K no es un flujo recurrente, así que la variación de +21,9% no debe leerse como desempeño recurrente. El detalle de ventas del modelo llega hasta 2028, así que el último año lo sostiene la capa de pronóstico y no un cierre comercial nuevo. Lo que demuestra el trabajo es el método: libros en bruto de entrada, un modelo trazado y probado de salida.',
          },
        ],
      },
    ],
    stack: [
      { label: 'Python', slug: 'python' },
      { label: 'Power BI', slug: 'powerbi' },
      { label: 'DAX' },
      { label: 'pytest', slug: 'pytest' },
    ],
    href: '/work/fpa-forecasting/',
    repo: 'https://github.com/DaelFame/fpa-forecasting-case-study',
    cvBullets: [
      {
        en: 'Built an automated data cleaning engine (cg_01, 83 pytest tests, SHA-256 source lineage) and a five-page DAX-verified Power BI report (PBIR/TMDL) across FY 2024–2029, explaining a +€867,945 (+21.9%) pre-tax variance from three drivers and an operating expense overrun.',
        es: 'Construí un motor automatizado de limpieza de datos (cg_01, 83 tests pytest, trazabilidad SHA-256) y un reporte Power BI de cinco páginas verificado con DAX (PBIR/TMDL) para FY 2024–2029, explicando una variación antes de impuestos de +€867.945 (+21,9%) a partir de tres drivers y un sobrecosto operativo.',
      },
      {
        en: 'Model exposes that +€572K of the surplus is extraordinary income, not recurring performance — the decision-relevant finding behind the headline beat.',
        es: 'El modelo expone que +€572K del superávit es resultado extraordinario, no desempeño recurrente — el hallazgo relevante para decidir detrás del titular.',
      },
    ],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function caseField(lang: Lang) {
  return (field: Bilingual) => field[lang];
}

