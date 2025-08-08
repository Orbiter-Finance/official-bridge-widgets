import { ApiResponse, api } from '@/common/providers/query.provider'

import { BridgeConfigDto } from '../models/bridge.model'

export interface GetBridgeConfigParams {
  host?: string
  projectId?: string
}

export const getBridgeConfig = async (params: GetBridgeConfigParams): ApiResponse<BridgeConfigDto> => {
  if (!params.host && !params.projectId) {
    throw Error('getBridgeConfig: must provide projectId or host')
  }

  const response = await api.post('/bridge/config', params)

  return response.data
}
