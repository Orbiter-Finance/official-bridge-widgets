import { RouteResultDto } from '../../service/models/route.model';
import { TransactionDto } from '../../service/models/transaction.model';
export declare const APPROVE_ABI_WITHOUT_RETURN: readonly [{
    readonly type: "function";
    readonly name: "approve";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [];
}];
export declare function useApproveTx(route: RouteResultDto | null): TransactionDto | null;
export declare function useApproveUsdtZeroData(route: RouteResultDto | null): `0x${string}` | null;
