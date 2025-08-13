import { Transaction } from '../../service/models/transaction.model';
export declare function getInitiatingHash(tx: Transaction): string | null;
export declare const useInitiatingHash: typeof getInitiatingHash;
