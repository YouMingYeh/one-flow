import { dictionaries } from '../dictionaries';

export const i18n = {
  en: dictionaries.en,
  zh: dictionaries.zh,
};

export const locales = Object.keys(i18n);

export const defaultLanguage = 'zh';

export function getDictionary(lang: string) {
  if (lang in i18n) {
    return i18n[lang as keyof typeof i18n];
  }
  return i18n[defaultLanguage];
}
