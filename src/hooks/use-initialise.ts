import { useAccountEffect } from 'wagmi'

import { useLogout } from '@/service/stores/local-txs.store'

import { useActivityEffects } from './tx/use-activity-effects'
import { useInitialiseBridgeState } from './use-initialise-bridge-state'
import { useInitialiseAnalytics } from './use-initialise-analytics'

export const useInitialise = () => {
  const clearPendingTransactionsStorage = useLogout()

  useActivityEffects()
  useInitialiseBridgeState()
  useInitialiseAnalytics()

  useAccountEffect({
    onDisconnect: () => {
      clearPendingTransactionsStorage()
    }
  })
}
