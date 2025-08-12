import { ReactNode, useEffect } from 'react'

import { atom, useAtomValue, useSetAtom } from 'jotai'

import type { InjectedState } from '@/service/models/inject.model'
import { TokenType } from '@/service/models/token.model'
import { fromChainIdAtom, toChainIdAtom } from '@/service/stores/bridge.store'
import { destinationTokenAtom, selectedTokenAtom } from '@/service/stores/token.store'
import { BridgeConfig } from '@/types'
import { mainnetConfig, testConfig } from '../consts/global'
import { useGetBridgeConfig } from '@/service/hooks/use-bridge-config'

export const injectedStateAtom = atom<InjectedState | null>(null)

export interface InjectedStoreProviderProps {
  children: ReactNode
  projectId: BridgeConfig['projectId']
  network?: BridgeConfig['network']
}

export const InjectedStoreProvider = ({ children, projectId, network }: InjectedStoreProviderProps) => {
  const { data: initialValues } = useGetBridgeConfig(projectId)

  const setInjectedStore = useSetAtom(injectedStateAtom)
  const setFromChainId = useSetAtom(fromChainIdAtom)
  const setToChainId = useSetAtom(toChainIdAtom)
  const setSelectedToken = useSetAtom(selectedTokenAtom)
  const setDestinationToken = useSetAtom(destinationTokenAtom)

  useEffect(() => {
    const state = getInjectedState(initialValues, network)

    setInjectedStore(state)

    if (state.fromChainId) setFromChainId(state.fromChainId)
    if (state.toChainId) setToChainId(state.toChainId)

    if (state.defaultFromToken) setSelectedToken(state.defaultFromToken)
    if (state.defaultToToken) setDestinationToken(state.defaultToToken)
  }, [initialValues, network, setDestinationToken, setFromChainId, setInjectedStore, setSelectedToken, setToChainId])

  // console.log('[InjectedStoreProvider]', injectedStore);

  return <>{children}</>
}

export const useInjectedStore = <T,>(selector: (state: Partial<InjectedState>) => T): T => {
  const state = useAtomValue(injectedStateAtom)

  return selector(state || {})
}

const getInjectedState = (initialValues: InjectedState | undefined, network?: BridgeConfig['network']) => {
  const defaultAppConfig = network === 'mainnet' ? mainnetConfig : testConfig
  const s = { ...defaultAppConfig, ...initialValues }

  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)

    const fromChainId = params.get('fromChainId')
    const toChainId = params.get('toChainId')
    if (fromChainId && toChainId) {
      const from = s.chains?.find(c => c.chainId === fromChainId)
      const to = s.chains?.find(c => c.chainId === toChainId)
      if (from && to) {
        s.fromChainId = +from.chainId
        s.toChainId = +to.chainId
      }
    }
  }

  s.fromChainId = s.fromChainId || s.defaultRoute.fromChainId
  s.toChainId = s.toChainId || s.defaultRoute.toChainId

  const fromChainTokens = s.tokens[s.fromChainId] || []
  const toChainTokens = s.tokens[s.toChainId] || []

  // Find default from token
  s.defaultFromToken = fromChainTokens.find(t => t.address === s.defaultRoute.tokenAddress) || fromChainTokens[0]

  // Find matching destination token if source token exists
  s.defaultToToken = s.defaultFromToken
    ? toChainTokens.find(t => t.coinKey === s.defaultFromToken?.coinKey && t.tokenType === TokenType.WRAPPED) ||
      toChainTokens.find(t => t.coinKey === s.defaultFromToken?.coinKey) ||
      toChainTokens[0]
    : toChainTokens[0]

  // Test: Bridged token
  // s.defaultToToken = s.defaultFromToken
  //     ? toChainTokens.find((t) => t.coinKey === s.defaultFromToken?.coinKey && t.tokenType === TokenType.BRIDGED) ||
  //       toChainTokens.find((t) => t.coinKey === s.defaultFromToken?.coinKey) ||
  //       toChainTokens[0]
  //     : toChainTokens[0];

  return s
}
