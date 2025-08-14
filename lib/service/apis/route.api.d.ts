import { ApiResponse } from '../../common/providers/query.provider';
import { RouteResultDto } from '../models/route.model';
export interface GetBridgeRoutesParams {
    amount: string;
    fromChainId: string;
    toChainId: string;
    fromTokenAddress: string;
    toTokenAddress: string;
    recipient: string;
    sender: string;
}
export declare const getBridgeRoutes: (params: GetBridgeRoutesParams) => ApiResponse<RouteResultDto[]>;
