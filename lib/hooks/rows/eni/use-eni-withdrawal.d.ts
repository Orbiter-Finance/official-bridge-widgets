import { Transaction } from '../../../service/models/transaction.model';
import { ActivityStep } from '../common';
export declare const useEniWithdrawalProgressRows: (withdrawal?: Transaction) => ActivityStep[] | null;
