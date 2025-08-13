import { ChainDto } from '../../../service/models/chain.model';
import { TransactionDto } from '../../../service/models/transaction.model';
export declare function useSendTransactionDto(chainDto: ChainDto | null | undefined, getTransactionDto: () => Promise<TransactionDto>): {
    onSubmit: () => Promise<import('../../../service/models/transaction.model').NotSubmittedSafeTx | import('../../../service/models/transaction.model').NotSubmittedCall | import('../../../service/models/transaction.model').SubmittedTx | undefined>;
    loading: boolean;
};
