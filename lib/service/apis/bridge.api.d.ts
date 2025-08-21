import { ApiResponseData } from '../../common/providers/query.provider';
import { BridgeAmountLimitsDto, BridgeConfigDto } from '../models/bridge.model';
export interface GetBridgeConfigParams {
    host?: string;
    projectId?: string;
}
export interface GetBridgeAmountLimitsParams {
    fromChainId: string;
    toChainId: string;
    tokenAddress: string;
}
export declare const getBridgeConfig: (params: GetBridgeConfigParams) => Promise<ApiResponseData<BridgeConfigDto>>;
export declare const getBridgeAmountLimits: (params: GetBridgeAmountLimitsParams) => Promise<ApiResponseData<BridgeAmountLimitsDto>>;
