import { Address } from 'viem';
import { RouteResultDto } from '../../service/models/route.model';
export declare function useApprovalAddress(): Address | undefined;
export declare function useApprovalAddressForRoute(route: RouteResultDto | undefined | null): Address | undefined;
export declare function useApprovalTxForRoute(route: RouteResultDto | undefined | null): import('../../service/models/transaction.model').TransactionDto | undefined;
