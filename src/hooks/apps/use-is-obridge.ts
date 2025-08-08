import { useClientState } from '@/service/hooks/use-state-client'
import { isOfficialBridge, isOfficialBridgeTestnet } from '@/utils/is-obridge'

export const useIsOBridge = () => {
  const { id } = useClientState()
  return id ? isOfficialBridge(id) : false
}

export const useIsOBridgeTestnet = () => {
  const { id } = useClientState()
  return id ? isOfficialBridgeTestnet(id) : false
}
