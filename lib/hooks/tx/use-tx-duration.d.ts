import { RouteResultDto } from '../../service/models/route.model';
import { Transaction } from '../../service/models/transaction.model';
import { Period } from '../../utils/get-period';
export declare const useTxDuration: (tx: Transaction | undefined | null) => number;
export declare const getTxDurationForRoute: (route?: RouteResultDto | null) => number;
export declare const getTxBridgeDuration: (route?: RouteResultDto | null) => Period | null;
