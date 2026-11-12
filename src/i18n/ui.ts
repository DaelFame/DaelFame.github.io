export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.home.title': 'Joaquin Cardenas — Financial data analyst',
    'meta.home.description':
      'Financial data analyst with an accounting background. Pipelines and dashboards that make finance numbers tie out, from ledger to decision.',

    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.cv': 'CV',
    'nav.primary': 'Primary',
    'lang.label': 'Language',
    skip: 'Skip to content',

    'hero.eyebrow': 'Financial data analyst · Accounting background',
    'hero.title': 'Financial data analyst with an accounting background.',
    'hero.lede':
      'I build pipelines and dashboards so the numbers tie out, from ledger to decision.',
    'hero.cta': 'See the work',
    'hero.available': 'Open to remote financial data / BI roles',
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

    'footer.rights': 'Arequipa, Peru',
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

    'hero.eyebrow': 'Analista de datos financieros · Base contable',
    'hero.title': 'Analista de datos financieros con base contable.',
    'hero.lede':
      'Construyo pipelines y dashboards para que los números cuadren desde el asiento hasta la decisión.',
    'hero.cta': 'Ver el trabajo',
    'hero.available': 'Abierto a roles remotos de datos financieros / BI',
    'hero.email': 'Escribime',

    'capability.phrase': 'Contabilidad, finanzas, datos y BI en un mismo flujo.',
    'waterfall.fromCase': 'Del caso de FP&A',

    'work.selected': 'Trabajo seleccionado',
    'work.heading': 'Tres proyectos, tres decisiones.',
    'work.all': 'Todos los casos',
    'work.meta.title': 'Trabajo — Joaquin Cardenas',
    'work.meta.description':
      'Tres casos: un lakehouse de presupuesto público, un deck de inteligencia de mercado universitario y un modelo de varianza FP&A.',
    'work.intro':
      'Cada uno arranca con una pregunta de negocio y termina en una decisión defendible. Empezá por el 01 si tenés tres minutos.',

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
