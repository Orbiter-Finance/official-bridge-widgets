import { ChainDto } from '../../service/models/chain.model';
import { GasEstimateRpcParams } from '../../service/models/transaction.model';
export declare const useGasApprove: (chain: ChainDto | null, approvalItem: GasEstimateRpcParams | null) => {
    data: number | bigint;
    isLoading: boolean;
    isError: boolean;
};
