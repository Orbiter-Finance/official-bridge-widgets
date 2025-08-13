import { ChainDto } from '../../service/models/chain.model';
import { RouteResultDto } from '../../service/models/route.model';
import { GasEstimateRpcParams } from '../../service/models/transaction.model';
export declare const useGasInitiating: (_: RouteResultDto | null, chain: ChainDto | null, initiatingItem: GasEstimateRpcParams | null) => {
    data: number;
    isLoading: boolean;
    isError: boolean;
};
