export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.home.title': 'Joaquin Cardenas — Analytics Engineer · Accounting',
    'meta.home.description':
      'Analytics engineer with an accounting background: pipelines and dashboards that make the numbers tie out from ledger to decision.',

    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.cv': 'CV',
    'nav.primary': 'Primary',
    'lang.label': 'Language',
    skip: 'Skip to content',

    'hero.eyebrow': 'Analytics Engineer · Accounting background',
    'hero.title': 'Finance data that ties out.',
    'hero.lede':
      "I'm an accountant who builds the pipelines and dashboards, so the numbers match from the ledger to the decision.",
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
    'meta.home.title': 'Joaquin Cardenas — Ingeniero de analítica · Contabilidad',
    'meta.home.description':
      'Ingeniero de analítica con base contable: pipelines y dashboards que hacen cuadrar los números desde el asiento hasta la decisión.',

    'nav.work': 'Trabajo',
    'nav.about': 'Sobre mí',
    'nav.cv': 'CV',
    'nav.primary': 'Principal',
    'lang.label': 'Idioma',
    skip: 'Ir al contenido',

    'hero.eyebrow': 'Ingeniero de analítica · Base contable',
    'hero.title': 'Datos financieros que cuadran.',
    'hero.lede':
      'Soy contador y construyo los pipelines y dashboards, para que los números cuadren desde el asiento hasta la decisión.',
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
