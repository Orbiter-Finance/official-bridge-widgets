import { Transaction } from '../../service/models/transaction.model';
export declare const useTxFromTo: (tx: Transaction | null | undefined) => {
    from: import('../../service/models/chain.model').ChainDto;
    to: import('../../service/models/chain.model').ChainDto;
} | null;
