import { Chain } from 'viem';
export declare const useSubmitTransactionEvm: (chain: Chain | null | undefined) => (params: any) => Promise<import('../../service/models/transaction.model').NotSubmittedSafeTx | import('../../service/models/transaction.model').NotSubmittedCall | import('../../service/models/transaction.model').SubmittedTx | undefined>;
