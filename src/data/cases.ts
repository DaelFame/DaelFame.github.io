import type { Lang } from '../i18n/ui';

export interface CaseStudy {
  slug: string;
  index: string;
  discipline: { en: string; es: string };
  title: string;
  question: { en: string; es: string };
  result: { en: string; es: string };
  stack: string[];
  /** Until T5 ships the case pages, cards open the repository (the README is the case study). */
  href: string;
}

export const cases: CaseStudy[] = [
  {
    slug: 'fpa-forecasting',
    index: '01',
    discipline: { en: 'FP&A modelling', es: 'Modelado FP&A' },
    title: 'FP&A Forecasting & Variance Analysis',
    question: {
      en: 'Revenue grew 0.9% while profit fell 61%. Where did it go?',
      es: 'El ingreso creció 0.9% y la utilidad cayó 61%. ¿Dónde se fue?',
    },
    result: {
      en: '€243,137 of variance traced line by line to operating expenses.',
      es: '€243.137 de varianza trazados línea por línea a gastos operativos.',
    },
    stack: ['Python', 'Power BI', 'pytest'],
    href: 'https://github.com/DaelFame/fpa-forecasting-case-study',
  },
  {
    slug: 'peru-budget-lakehouse',
    index: '02',
    discipline: { en: 'Analytics engineering', es: 'Ingeniería de datos' },
    title: 'Peru Budget Lakehouse',
    question: {
      en: 'Where is public money executed — and where is it not?',
      es: '¿Dónde se ejecuta el presupuesto público — y dónde no?',
    },
    result: {
      en: '8M source rows rebuilt into 29.5M facts, reconciled to S/ 0.00.',
      es: '8M filas fuente convertidas en 29.5M hechos, reconciliadas a S/ 0.00.',
    },
    stack: ['Polars', 'DuckDB', 'Prefect', 'NL to SQL'],
    href: 'https://github.com/DaelFame/peru-budget-lakehouse',
  },
  {
    slug: 'ucsp-market-intelligence',
    index: '03',
    discipline: { en: 'Business intelligence', es: 'Inteligencia de negocio' },
    title: 'UCSP Market Intelligence',
    question: {
      en: 'Where should a university grow when the market is already allocated?',
      es: '¿Dónde debería crecer una universidad si el mercado ya está repartido?',
    },
    result: {
      en: '−1.6pp of market share hidden behind +19% volume growth.',
      es: '−1.6 pp de market share escondidos detrás de +19% de volumen.',
    },
    stack: ['Power BI', 'DAX', 'Kimball'],
    href: 'https://github.com/DaelFame/ucsp-market-intelligence',
  },
];

export function caseField(lang: Lang) {
  return (field: { en: string; es: string }) => field[lang];
}
