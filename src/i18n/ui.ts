export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.home.title': 'Joaquin Cardenas — Financial Data Analyst',
    'meta.home.description':
      'Financial data analyst with an accounting background. Pipelines and dashboards that make finance numbers tie out, from ledger to decision.',

    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.cv': 'CV',
    'nav.primary': 'Primary',
    'lang.label': 'Language',
    skip: 'Skip to content',

    'hero.eyebrow': 'Financial Data Analyst · FP&A & BI · Accounting background',
    'hero.title': 'Finance data that ties out.',
    'hero.lede':
      'Trained in accounting, I build the pipelines and dashboards behind finance decisions — and prove every number reconciles before anyone acts on it.',
    'hero.cta': 'See the work',
    'hero.available': 'Open to remote FP&A / BI roles and contract work · Arequipa, UTC−5',
    'hero.email': 'Email me',

    'capability.phrase': 'Accounting, finance, data and BI in one workflow.',
    'waterfall.fromCase': 'From the FP&A case study',

    'work.selected': 'Selected work',
    'work.heading': 'Three projects, three decisions.',
    'work.all': 'All case studies',
    'work.meta.title': 'Work — Joaquin Cardenas',
    'work.meta.description':
      'Three case studies: a public budget lakehouse, a university market intelligence deck and an FP&A variance model.',
    'work.intro':
      'Each one starts from a business question and ends in a decision you could defend. Start with 01 if you have three minutes.',

    'about.meta.title': 'About — Joaquin Cardenas',
    'about.meta.description':
      'Financial data analyst with an accounting background: pipelines and dashboards that keep finance numbers reliable.',
    'cv.meta.title': 'CV — Joaquin Cardenas',
    'cv.meta.description':
      'Curriculum vitae of Joaquin Cardenas, financial data analyst with an accounting background.',

    'footer.rights': 'Arequipa, Perú',
  },
  es: {
    'meta.home.title': 'Joaquin Cardenas — Analista de datos financieros',
    'meta.home.description':
      'Analista de datos financieros con base contable. Pipelines y dashboards que hacen cuadrar los números de finanzas, del asiento a la decisión.',

    'nav.work': 'Trabajo',
    'nav.about': 'Sobre mí',
    'nav.cv': 'CV',
    'nav.primary': 'Principal',
    'lang.label': 'Idioma',
    skip: 'Ir al contenido',

    'hero.eyebrow': 'Analista de datos financieros · FP&A y BI · Base contable',
    'hero.title': 'Datos financieros que cuadran.',
    'hero.lede':
      'Vengo de la contabilidad y construyo los pipelines y dashboards detrás de las decisiones de finanzas — y demuestro que cada número concilia antes de que alguien actúe sobre él.',
    'hero.cta': 'Ver el trabajo',
    'hero.available': 'Abierto a roles remotos de FP&A / BI y proyectos por contrato · Arequipa, UTC−5',
    'hero.email': 'Escríbeme',

    'capability.phrase': 'Contabilidad, finanzas, datos y BI en un mismo flujo.',
    'waterfall.fromCase': 'Del caso de FP&A',

    'work.selected': 'Trabajo seleccionado',
    'work.heading': 'Tres proyectos, tres decisiones.',
    'work.all': 'Todos los casos',
    'work.meta.title': 'Trabajo — Joaquin Cardenas',
    'work.meta.description':
      'Tres casos: un lakehouse de presupuesto público, un deck de inteligencia de mercado universitario y un modelo de varianza FP&A.',
    'work.intro':
      'Cada uno arranca con una pregunta de negocio y termina en una decisión defendible. Empieza por el 01 si tienes tres minutos.',

    'about.meta.title': 'Sobre mí — Joaquin Cardenas',
    'about.meta.description':
      'Analista de datos financieros con base contable: pipelines y dashboards que mantienen confiables los números de finanzas.',
    'cv.meta.title': 'CV — Joaquin Cardenas',
    'cv.meta.description':
      'Currículum de Joaquin Cardenas, analista de datos financieros con base contable.',

    'footer.rights': 'Arequipa, Perú',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];
