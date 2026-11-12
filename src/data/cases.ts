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
  value: string;
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
  preview?: 'ucsp' | 'peru';
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
      { value: '8M', label: { en: 'source rows', es: 'filas fuente' } },
      { value: '29.5M', label: { en: 'fact rows in a star schema', es: 'filas de hechos en un star schema' } },
      { value: 'S/ 0.00', label: { en: 'Silver vs Gold difference', es: 'diferencia Silver vs Gold' } },
      { value: '131', label: { en: 'automated tests', es: 'tests automatizados' } },
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
      en: '−1.6pp of market share hidden behind +19% volume growth.',
      es: '−1.6 pp de market share escondidos detrás de +19% de volumen.',
    },
    metrics: [
      { value: '17.4M', label: { en: 'enrollment records', es: 'registros de matrícula' } },
      { value: '−1.6pp', label: { en: 'market share leak', es: 'pérdida de market share' } },
      { value: '174', label: { en: 'universities benchmarked', es: 'universidades comparadas' } },
      { value: '0.94', label: { en: 'modality–growth correlation', es: 'correlación modalidad–crecimiento' } },
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
            en: 'Growing is not the same as winning. Enrollment rose 19%, but market share fell from 10.1% to 8.4%. The market expansion went mostly to one competitor. The university ranks 5th of 6 in its own city.',
            es: 'Crecer no es lo mismo que ganar. La matrícula subió 19%, pero el market share cayó de 10.1% a 8.4%. La expansión del mercado se la llevó mayormente un competidor. La universidad es 5ª de 6 en su propia ciudad.',
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
        en: 'Built a two-page Power BI decision deck on 17.4M public enrollment records, exposing a −1.6pp market-share leak hidden behind +19% volume growth.',
        es: 'Construí un deck de decisión de dos páginas en Power BI sobre 17.4M registros públicos, exponiendo una pérdida de −1.6 pp de market share oculta tras +19% de crecimiento en volumen.',
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
    discipline: { en: 'FP&A modelling', es: 'Modelado FP&A' },
    title: 'FP&A Forecasting & Variance Analysis',
    period: { en: 'Competitive simulation', es: 'Simulación competitiva' },
    question: {
      en: 'Revenue grew 0.9% in Year 1 while profit fell 61%. Where did it go?',
      es: 'El ingreso creció 0.9% en el Año 1 y la utilidad cayó 61%. ¿Dónde se fue?',
    },
    result: {
      en: '€243,137 of variance traced line by line to operating expenses.',
      es: '€243.137 de varianza trazados línea por línea a gastos operativos.',
    },
    metrics: [
      { value: '+0.9%', label: { en: 'revenue vs budget', es: 'ingreso vs presupuesto' } },
      { value: '−61.1%', label: { en: 'net income vs budget', es: 'utilidad neta vs presupuesto' } },
      { value: '€243,137', label: { en: 'net variance traced to OpEx', es: 'varianza neta trazada a OpEx' } },
      { value: '83', label: { en: 'automated tests', es: 'tests automatizados' } },
    ],
    disclosure: {
      en: 'Competitive business simulation — not a real company. Years are labelled Year 1–4.',
      es: 'Simulación competitiva de negocio — no es una empresa real. Los años se etiquetan Año 1–4.',
    },
    story: [
      {
        title: { en: 'The question', es: 'La pregunta' },
        body: [
          {
            en: 'A competitive business simulation of a fashion-accessories manufacturer, not a real client. Revenue grew 0.9% in Year 1 and net income fell 61%. The market showed up. The result did not. Where did the money go?',
            es: 'Una simulación competitiva de negocio de un fabricante de accesorios de moda, no un cliente real. El ingreso creció 0.9% en el Año 1 y la utilidad neta cayó 61%. El mercado apareció. El resultado, no. ¿Dónde se fue el dinero?',
          },
        ],
      },
      {
        title: { en: 'What I found', es: 'Qué encontré' },
        waterfall: true,
        body: [
          {
            en: 'The entire miss traced to one line: operating expenses. Revenue and gross margin beat plan, but €359,888 of overrun in OpEx consumed it — and €150,000 of that carries no documentary support. It is kept as a visible gap, not smoothed away.',
            es: 'Toda la desviación se trazó a una sola línea: gastos operativos. Ingresos y margen bruto superaron el plan, pero €359.888 de sobrecosto en OpEx se lo comieron — y €150.000 de eso no tienen respaldo documental. Se mantiene como un hueco visible, no maquillado.',
          },
        ],
      },
      {
        title: { en: 'How I proved it', es: 'Cómo lo probé' },
        body: [
          {
            en: 'A driver-based Python model rebuilt four years of simulated statements. Accounting identities, referential integrity and the exact variance tie-out are pinned by 83 automated tests. A naive/seasonal-naive baseline is being added to the repository so the forecast claim can be compared against a trivial benchmark before it is published.',
            es: 'Un modelo Python por drivers reconstruyó cuatro años de estados simulados. Las identidades contables, la integridad referencial y el amarre exacto de la varianza están fijados por 83 tests automatizados. Se está añadiendo un baseline ingenuo/estacional al repositorio para comparar el forecast contra un benchmark trivial antes de publicarlo.',
          },
        ],
      },
      {
        title: { en: 'What it decides', es: 'Qué decide' },
        body: [
          {
            en: 'The company was capacity-constrained, not demand-constrained. In Year 3 the market could not serve 594,748 units of demand. The ceiling was production — which turns a commercial question into a capital-allocation decision.',
            es: 'La empresa estaba limitada por capacidad, no por demanda. En el Año 3 el mercado no pudo atender 594.748 unidades de demanda. El techo era la producción — lo que convierte una pregunta comercial en una decisión de asignación de capital.',
          },
        ],
      },
      {
        title: { en: 'What this does not prove', es: 'Qué no prueba' },
        body: [
          {
            en: 'This is a competitive business simulation, not a real company’s books. The origin is disclosed because claiming otherwise would be trivially falsifiable. What it demonstrates is the method.',
            es: 'Es una simulación competitiva de negocio, no los libros de una empresa real. El origen se declara porque afirmar lo contrario sería trivialmente falsable. Lo que demuestra es el método.',
          },
        ],
      },
    ],
    stack: [{ label: 'Python', slug: 'python' }, { label: 'pytest', slug: 'pytest' }],
    href: '/work/fpa-forecasting/',
    repo: 'https://github.com/DaelFame/fpa-forecasting-case-study',
    inProgress: { en: 'Power BI report not built yet', es: 'Reporte de Power BI todavía no construido' },
    cvBullets: [
      {
        en: 'Rebuilt four simulated years of statements into a driver-based model, tracing a 61% net-income miss to operating expenses and isolating EUR 150,000 of unsupported expenses.',
        es: 'Reconstruí cuatro años simulados de estados en un modelo por drivers, trazando una caída del 61% de la utilidad neta a gastos operativos y aislando EUR 150.000 sin respaldo.',
      },
      {
        en: 'Pinned accounting identities and the variance tie-out with 83 automated tests (competitive simulation).',
        es: 'Fijé las identidades contables y el amarre de la varianza con 83 tests automatizados (simulación competitiva).',
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
