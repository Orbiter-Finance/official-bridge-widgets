import { ApiResponse, api } from '@/common/providers/query.provider'

import { BridgeConfigDto } from '../models/bridge.model'

export interface GetBridgeConfigParams {
  host?: string
  projectId?: string
}

export const getBridgeConfig = async (params: GetBridgeConfigParams): ApiResponse<BridgeConfigDto> => {
  const response = await api.post('/bridge/config', params)

  return response.data
}
