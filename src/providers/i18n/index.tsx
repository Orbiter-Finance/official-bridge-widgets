import { type ReactNode, useEffect, useMemo, useState } from 'react'

import { type Locale, i18n, setLocale } from '../../locales/index'
import { detectedBrowserLocale } from '../../utils/locale'
import { createContext, useContext } from 'react'

export interface I18nProviderProps {
  children: ReactNode
  locale?: Locale
}

export const I18nContext = createContext<{ i18n: typeof i18n }>({ i18n })

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

export const useTranslation = () => {
  return useI18n().i18n
}

export const I18nProvider = ({ children, locale }: I18nProviderProps) => {
  const [updateCount, setUpdateCount] = useState(0)

  const browserLocale: Locale = useMemo(() => detectedBrowserLocale() as Locale, [])

  useEffect(() => {
    const unsubscribe = i18n.onChange(() => {
      setUpdateCount(count => count + 1)
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    if (locale && locale !== i18n.locale) {
      setLocale(locale)
    } else if (!locale && browserLocale && browserLocale !== i18n.locale) {
      setLocale(browserLocale)
    }
  }, [locale, browserLocale])

  const memoizedValue = useMemo(() => {
    const t = (key: string, options?: any) => i18n.t(key, options)
    return { t, i18n }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateCount])

  return <I18nContext.Provider value={memoizedValue}>{children}</I18nContext.Provider>
}
