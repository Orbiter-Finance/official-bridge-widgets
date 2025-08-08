import { useQuery } from '@tanstack/react-query'

import { getBridgeConfig } from '../apis/bridge.api'

export const useGetBridgeConfig = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['bridge_config', id],
    queryFn: () => getBridgeConfig({ projectId:id }),
    enabled: !!id
  })

  return {
    data: data?.data,
    isLoading
  }
}
