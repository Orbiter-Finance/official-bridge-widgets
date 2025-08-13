import { RouteProvider } from '../../../common/consts/route-provider';
import { RouteStepDto } from '../../../service/models/route.model';
import { Confirmation, Transaction } from '../../../service/models/transaction.model';
export declare const useBuildPendingTx: () => (confirmation: Confirmation, amount: bigint, receiveAmount: bigint, provider: RouteProvider | undefined, duration: number, steps: RouteStepDto[]) => Transaction | undefined;
