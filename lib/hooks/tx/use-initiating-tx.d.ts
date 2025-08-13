import { Transaction } from '../../service/models/transaction.model';
export declare const getInitiatingTx: (tx: Transaction | undefined) => import('../../service/models/transaction.model').Confirmation | null;
export declare const useInitiatingTx: (tx: Transaction | undefined) => import('../../service/models/transaction.model').Confirmation | null;
