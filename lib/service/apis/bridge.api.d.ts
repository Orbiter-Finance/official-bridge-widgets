import { ApiResponse } from '../../common/providers/query.provider';
import { BridgeConfigDto } from '../models/bridge.model';
export interface GetBridgeConfigParams {
    host?: string;
    projectId?: string;
}
export declare const getBridgeConfig: (params: GetBridgeConfigParams) => ApiResponse<BridgeConfigDto>;
