export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.home.title': 'Joaquin Cardenas — FP&A & Business Intelligence',
    'meta.home.description':
      'From audit to FP&A. Financial statements and public data turned into decisions that survive an audit.',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.cv': 'CV',
    'nav.primary': 'Primary',
    'lang.label': 'Language',
    'skip': 'Skip to content',
    'hero.eyebrow': 'FP&A · Business Intelligence',
    'hero.title': 'From audit to FP&A.',
    'hero.lede':
      'I turn financial statements and public data into decisions that survive an audit.',
    'hero.cta': 'See case studies',
    'pillars.label': 'What I bring',
    'footer.rights': 'Arequipa, Peru',
  },
  es: {
    'meta.home.title': 'Joaquin Cardenas — FP&A e Inteligencia de Negocio',
    'meta.home.description':
      'De auditoría a FP&A. Estados financieros y datos públicos convertidos en decisiones que resisten una auditoría.',
    'nav.work': 'Trabajo',
    'nav.about': 'Sobre mí',
    'nav.cv': 'CV',
    'nav.primary': 'Principal',
    'lang.label': 'Idioma',
    'skip': 'Ir al contenido',
    'hero.eyebrow': 'FP&A · Inteligencia de Negocio',
    'hero.title': 'De auditoría a FP&A.',
    'hero.lede':
      'Transformo estados financieros y datos públicos en decisiones que resisten una auditoría.',
    'hero.cta': 'Ver casos de estudio',
    'pillars.label': 'Qué aporto',
    'footer.rights': 'Arequipa, Perú',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];
