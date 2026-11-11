export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.home.title': 'Joaquin Cardenas — Accounting & Data',
    'meta.home.description':
      'Accountant with IFRS and audit controls training, building the data pipelines and BI models that finance teams decide with.',

    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.cv': 'CV',
    'nav.primary': 'Primary',
    'lang.label': 'Language',
    skip: 'Skip to content',

    'hero.eyebrow': 'Accounting · Data · Business Intelligence',
    'hero.title': 'I read the ledger. I build the pipeline.',
    'hero.lede':
      'Accounting rules, data engineering and BI in one head — so nothing is lost in translation between the financial statement and the dashboard.',
    'hero.cta': 'See the work',

    'waterfall.fromCase': 'From the FP&A case study',

    'pillars.label': 'What I bring',

    'work.selected': 'Selected work',
    'work.heading': 'Three projects, three decisions.',
    'work.all': 'All case studies',
    'work.meta.title': 'Work — Joaquin Cardenas',
    'work.meta.description':
      'Three case studies: FP&A variance analysis, a public budget lakehouse and a university market intelligence deck.',
    'work.intro':
      'Each one starts from a business question and ends in a decision you could defend. Start with 01 if you have three minutes.',

    'about.meta.title': 'About — Joaquin Cardenas',
    'about.meta.description':
      'Accountant-in-training with KPMG audit experience and FP&A/BI work turning budget data into decisions.',
    'cv.meta.title': 'CV — Joaquin Cardenas',
    'cv.meta.description': 'Curriculum vitae of Joaquin Cardenas, accountant with a data stack.',

    'footer.rights': 'Arequipa, Peru',
  },
  es: {
    'meta.home.title': 'Joaquin Cardenas — Contabilidad y Datos',
    'meta.home.description':
      'Contador con formación en IFRS y controles de auditoría, construyendo los pipelines y modelos BI con los que decide el área financiera.',

    'nav.work': 'Trabajo',
    'nav.about': 'Sobre mí',
    'nav.cv': 'CV',
    'nav.primary': 'Principal',
    'lang.label': 'Idioma',
    skip: 'Ir al contenido',

    'hero.eyebrow': 'Contabilidad · Datos · Business Intelligence',
    'hero.title': 'Entiendo el asiento. Construyo el pipeline.',
    'hero.lede':
      'Reglas contables, ingeniería de datos y BI en una sola cabeza — para que nada se pierda en la traducción entre el estado financiero y el dashboard.',
    'hero.cta': 'Ver el trabajo',

    'waterfall.fromCase': 'Del caso de FP&A',

    'pillars.label': 'Qué aporto',

    'work.selected': 'Trabajo seleccionado',
    'work.heading': 'Tres proyectos, tres decisiones.',
    'work.all': 'Todos los casos',
    'work.meta.title': 'Trabajo — Joaquin Cardenas',
    'work.meta.description':
      'Tres casos: análisis de varianza FP&A, un lakehouse de presupuesto público y un deck de inteligencia de mercado universitario.',
    'work.intro':
      'Cada uno arranca con una pregunta de negocio y termina en una decisión defendible. Empezá por el 01 si tenés tres minutos.',

    'about.meta.title': 'Sobre mí — Joaquin Cardenas',
    'about.meta.description':
      'Contador en formación con experiencia en auditoría en KPMG y trabajo de FP&A/BI convirtiendo datos de presupuesto en decisiones.',
    'cv.meta.title': 'CV — Joaquin Cardenas',
    'cv.meta.description': 'Currículum de Joaquin Cardenas, contador con stack de datos.',

    'footer.rights': 'Arequipa, Perú',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];
