import { ApiResponseData, api } from '@/common/providers/query.provider'

import { BridgeAmountLimitsDto, BridgeConfigDto } from '../models/bridge.model'

export interface GetBridgeConfigParams {
  host?: string
  projectId?: string
}

export interface GetBridgeAmountLimitsParams {
  fromChainId: string
  toChainId: string
  tokenAddress: string
}

export const getBridgeConfig = async (params: GetBridgeConfigParams) => {
  const response = await api.post('/bridge/config', params)
  return response.data as ApiResponseData<BridgeConfigDto>
}

export const getBridgeAmountLimits = async (params: GetBridgeAmountLimitsParams) => {
  const response = await api.post('/bridge/limits', params)
  return response.data as ApiResponseData<BridgeAmountLimitsDto>
}
