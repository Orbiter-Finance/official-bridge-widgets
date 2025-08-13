import { Transaction } from '../../service/models/transaction.model';
export declare const getTxSender: (tx: Transaction | null | undefined) => string | null;
export declare const useTxSender: (tx: Transaction | null | undefined) => string | null;
