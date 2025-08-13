import { ApiResponse } from '../../common/providers/query.provider';
import { BridgeActivity, TransactionDto } from '../models/transaction.model';
export interface GetBridgeActivityParams {
    cursor: string | null;
    evmAddress: string;
}
export declare const getBridgeActivity: (params: GetBridgeActivityParams) => ApiResponse<BridgeActivity>;
export declare const getFinaliseTransaction: (params: {
    id: string;
}) => ApiResponse<TransactionDto>;
