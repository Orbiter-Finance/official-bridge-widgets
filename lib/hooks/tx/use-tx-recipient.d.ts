import { Transaction } from '../../service/models/transaction.model';
export declare const parseEncodedAddress: (address: string) => string;
export declare const getTxRecipient: (tx: Transaction | null | undefined) => string | null;
export declare const useTxRecipient: (tx: Transaction | null | undefined) => string | null;
