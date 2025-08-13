import { useCallback } from 'react'

import { useTranslation } from '@/providers/i18n'

import { Period } from '@/utils/get-period'

export const useTransformPeriodText = () => {
  const { t } = useTranslation()

  return useCallback(
    (_: string, args: any, period: Period) => {
      const value =
        period?.period === 'secs'
          ? t(`seconds`, {
              ...args,
              count: period.value
            }).toString()
          : period?.period === 'mins'
            ? t(`minutes`, {
                ...args,
                count: period.value
              }).toString()
            : period?.period === 'hours'
              ? t(`hours`, {
                  ...args,
                  count: period.value
                }).toString()
              : t(`days`, {
                  ...args,
                  count: period?.value
                }).toString()
        
      return value ?? ''
    },
    [t]
  )
}
