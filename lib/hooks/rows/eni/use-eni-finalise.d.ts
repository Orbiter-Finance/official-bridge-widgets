import { Transaction } from '../../../service/models/transaction.model';
export declare function useEniFinalise(withdrawal: Transaction): {
    onFinalise: () => Promise<void>;
    loading: boolean;
};
