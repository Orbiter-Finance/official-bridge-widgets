import { useCallback } from 'react'

import { useTranslation } from '@/providers/i18n'

import { Period } from '@/utils/get-period'

export const useTransformPeriodText = () => {
  const { t } = useTranslation()

  return useCallback(
    (str: string, args: any, period: Period) => {
      const value =
        period?.period === 'secs'
          ? t(`${str}Seconds`, {
              ...args,
              count: period.value
            }).toString()
          : period?.period === 'mins'
            ? t(`${str}Minutes`, {
                ...args,
                count: period.value
              }).toString()
            : period?.period === 'hours'
              ? t(`${str}Hours`, {
                  ...args,
                  count: period.value
                }).toString()
              : t(`${str}Days`, {
                  ...args,
                  count: period?.value
                }).toString()
      return value ?? ''
    },
    [t]
  )
}
