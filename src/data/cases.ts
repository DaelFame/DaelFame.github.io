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
  /** Renders the FP&A variance waterfall inside this section. */
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
}

export const cases: CaseStudy[] = [
  {
    slug: 'fpa-forecasting',
    index: '01',
    discipline: { en: 'FP&A modelling', es: 'Modelado FP&A' },
    title: 'FP&A Forecasting & Variance Analysis',
    period: { en: '2026', es: '2026' },
    question: {
      en: 'Revenue grew 0.9% while profit fell 61%. Where did it go?',
      es: 'El ingreso creció 0.9% y la utilidad cayó 61%. ¿Dónde se fue?',
    },
    result: {
      en: '€243,137 of variance traced line by line to operating expenses.',
      es: '€243.137 de varianza trazados línea por línea a gastos operativos.',
    },
    metrics: [
      { value: '+0.9%', label: { en: 'revenue vs budget', es: 'ingreso vs presupuesto' } },
      { value: '−61.1%', label: { en: 'net income vs budget', es: 'utilidad neta vs presupuesto' } },
      { value: '0.3%', label: { en: 'one-year-ahead forecast error', es: 'error de forecast a un año' } },
      { value: '74', label: { en: 'automated tests', es: 'tests automatizados' } },
    ],
    story: [
      {
        title: { en: 'The question', es: 'La pregunta' },
        body: [
          {
            en: 'A fashion-accessories manufacturer grew revenue 0.9% in 2026 — and watched net income fall 61%. The market showed up. The result did not. Where did the money go?',
            es: 'Un fabricante de accesorios de moda creció su ingreso 0.9% en 2026 — y vio caer la utilidad neta 61%. El mercado apareció. El resultado, no. ¿Dónde se fue el dinero?',
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
            en: 'A driver-based Python model rebuilt four years of statements from the raw closing workbooks. A two-fold rolling-origin backtest — each fold trained only on years that were already closed — forecast the next year\u2019s revenue within 0.3%. 74 tests pin every accounting identity, referential constraint and variance tie-out.',
            es: 'Un modelo Python por drivers reconstruyó cuatro años de estados financieros desde los libros de cierre. Un backtest de dos pliegues con origen rodante — cada pliegue entrenado solo con años ya cerrados — pronosticó el ingreso del año siguiente con 0.3% de error. 74 tests fijan cada identidad contable, restricción referencial y amarre de varianza.',
          },
        ],
      },
      {
        title: { en: 'What it decides', es: 'Qué decide' },
        body: [
          {
            en: 'The company was capacity-constrained, not demand-constrained. In 2028 the market could not serve 594,748 units of demand. The ceiling was production — which turns a commercial question into a capital-allocation decision.',
            es: 'La empresa estaba limitada por capacidad, no por demanda. En 2028 el mercado no pudo atender 594.748 unidades de demanda. El techo era la producción — lo que convierte una pregunta comercial en una decisión de asignación de capital.',
          },
        ],
      },
      {
        title: { en: 'What this does not prove', es: 'Qué no prueba' },
        body: [
          {
            en: 'This is a competitive business simulation, not a real company\u2019s books. The origin is disclosed because claiming otherwise would be trivially falsifiable. What it demonstrates is the method.',
            es: 'Es una simulación de negocio competitiva, no los libros de una empresa real. El origen se declara porque afirmar lo contrario sería trivialmente falsable. Lo que demuestra es el método.',
          },
        ],
      },
    ],
    stack: [{ label: 'Python', slug: 'python' }, { label: 'Power BI', slug: 'powerbi' }, { label: 'pytest', slug: 'pytest' }],
    href: '/work/fpa-forecasting/',
    repo: 'https://github.com/DaelFame/fpa-forecasting-case-study',
    inProgress: { en: 'Power BI report in progress', es: 'Reporte de Power BI en desarrollo' },
  },
  {
    slug: 'peru-budget-lakehouse',
    index: '02',
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
            en: 'Where money executes, and where it does not. Lima reports S/ 91.43B of execution in 2024; Cusco, the second department, S/ 5.63B. That 16.2\u00d7 gap is a property of the state — and the dashboard answers it in SQL, or in plain language through an NL-to-SQL interface.',
            es: 'Dónde se ejecuta el dinero y dónde no. Lima reporta S/ 91.43B de ejecución en 2024; Cusco, el segundo departamento, S/ 5.63B. Esa brecha de 16.2× es una propiedad del Estado — y el dashboard la responde en SQL, o en lenguaje natural a través de una interfaz NL-to-SQL.',
          },
        ],
      },
      {
        title: { en: 'What this does not prove', es: 'Qué no prueba' },
        body: [
          {
            en: 'The committed demo is a 450,000-row sample, and the dashboard says so. Two KPIs are hidden in demo mode because a row-level sample cannot represent execution rates honestly. The full pipeline requires the source CSV, which is not committed.',
            es: 'El demo publicado es una muestra de 450.000 filas, y el dashboard lo dice. Dos KPIs se ocultan en modo demo porque una muestra a nivel de fila no puede representar tasas de ejecución con honestidad. El pipeline completo requiere el CSV fuente, que no está commiteado.',
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
  },
  {
    slug: 'ucsp-market-intelligence',
    index: '03',
    discipline: { en: 'Business intelligence', es: 'Inteligencia de negocio' },
    title: 'UCSP Market Intelligence',
    period: { en: '2026', es: '2026' },
    question: {
      en: 'Where should a university grow when the market is already allocated?',
      es: '¿Dónde debería crecer una universidad si el mercado ya está repartido?',
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
    story: [
      {
        title: { en: 'The question', es: 'La pregunta' },
        body: [
          {
            en: 'A private university in Arequipa was deciding which programs to open, sustain or discontinue — without a consolidated view of demand. Where should it grow when the market is already allocated?',
            es: 'Una universidad privada en Arequipa decidía qué programas abrir, sostener o discontinuar — sin una vista consolidada de la demanda. ¿Dónde crecer si el mercado ya está repartido?',
          },
        ],
      },
      {
        title: { en: 'What I found', es: 'Qué encontré' },
        body: [
          {
            en: 'Growing is not the same as winning. Enrollment rose 19%, but market share fell from 10.1% to 8.4%. The market expansion went to a competitor that captured 74.6% of it. UCSP ranks 5th of 6 in its own city.',
            es: 'Crecer no es lo mismo que ganar. La matrícula subió 19%, pero el market share cayó de 10.1% a 8.4%. La expansión del mercado se la llevó un competidor que capturó el 74.6%. UCSP es 5° de 6 en su propia ciudad.',
          },
        ],
      },
      {
        title: { en: 'How I proved it', es: 'Cómo lo probé' },
        body: [
          {
            en: '17.4M records cleaned into a Kimball star schema. The growth driver is modality, not brand: the two fastest-growing institutions are 73% and 57% distance; UCSP is 100% on-campus — and the correlation between market virtuality and growth is r = 0.94. 46 DAX measures, 20 hand-coded HTML flip cards.',
            es: '17.4M registros limpiados en un star schema Kimball. El driver de crecimiento es la modalidad, no la marca: las dos instituciones que más crecen son 73% y 57% a distancia; UCSP es 100% presencial — y la correlación entre virtualidad del mercado y crecimiento es r = 0.94. 46 medidas DAX, 20 tarjetas HTML con flip hechas a mano.',
          },
        ],
      },
      {
        title: { en: 'What it decides', es: 'Qué decide' },
        body: [
          {
            en: 'Four sequenced moves: launch Nursing in distance mode (6,469 enrollments, +124%, 62% already non-presential, 0 UCSP share); transfer the existing postgraduate distance capability to undergraduate; defend the regional franchise; and enter Norte + Centro only where no new campus is needed.',
            es: 'Cuatro movimientos secuenciados: lanzar Enfermería a distancia (6.469 matrículas, +124%, 62% ya no presencial, 0% de UCSP); transferir la capacidad de distancia ya existente en posgrado al pregrado; defender la franquicia regional; y entrar a Norte + Centro solo donde no se necesite campus nuevo.',
          },
        ],
      },
      {
        title: { en: 'What this does not prove', es: 'Qué no prueba' },
        body: [
          {
            en: 'Public enrollment data only — no P&L, tuition or cost data. \u201cRevenue\u201d is expressed as addressable student volume, a demand proxy, never as currency. Every figure is reproducible from the notebooks and the semantic model.',
            es: 'Solo datos públicos de matrícula — sin P&L, matrícula ni costos. El “ingreso” se expresa como volumen de estudiantes alcanzable, un proxy de demanda, nunca en moneda. Cada cifra es reproducible desde los notebooks y el modelo semántico.',
          },
        ],
      },
    ],
    stack: [{ label: 'Power BI', slug: 'powerbi' }, { label: 'DAX' }, { label: 'Python', slug: 'python' }],
    href: '/work/ucsp-market-intelligence/',
    repo: 'https://github.com/DaelFame/ucsp-market-intelligence',
    preview: 'ucsp',
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function caseField(lang: Lang) {
  return (field: Bilingual) => field[lang];
}
