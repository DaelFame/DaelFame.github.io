import { defaultLang, ui, type Lang, type UiKey } from './ui';

export type { Lang, UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split('/')[1];
  return first === 'es' ? 'es' : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/**
 * Maps a path between locales.
 * `/work/` + es  ->  `/es/work/`
 * `/es/work/` + en  ->  `/work/`
 */
export function localizePath(path: string, lang: Lang): string {
  const bare = path.replace(/^\/es(?=\/|$)/, '') || '/';
  if (lang === defaultLang) return bare;
  return bare === '/' ? '/es/' : `/es${bare}`;
}

/** The same page in the other locale. */
export function alternatePath(path: string, lang: Lang): string {
  return localizePath(path, lang === 'en' ? 'es' : 'en');
}
