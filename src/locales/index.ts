import { I18n } from './I18n'
import en_US from './en_US.json'

export type Locale = 'en-US' | 'zh-CN'

export const i18n = new I18n({
  en: en_US,
  'en-US': en_US
})

i18n.defaultLocale = 'en-US'
i18n.locale = 'en-US'
i18n.enableFallback = true

const fetchTranslations = async (locale: Locale): Promise<any> => {
  switch (locale) {
    case 'zh-CN':
      return (await import('./zh_CN.json')).default
    default:
      return (await import('./en_US.json')).default
  }
}

export async function setLocale(locale: Locale) {
  // If i18n translation already exists no need to refetch the local files again
  const isCached = i18n.isLocaleCached(locale)
  if (isCached) {
    i18n.updateLocale(locale)
    return
  }
  const translations = await fetchTranslations(locale)
  i18n.setTranslations(locale, JSON.parse(translations))
}
