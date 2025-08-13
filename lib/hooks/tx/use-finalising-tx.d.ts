import { Transaction } from '../../service/models/transaction.model';
export declare const useFinalisingTx: (tx: Transaction | undefined) => import('../../service/models/transaction.model').Confirmation | null | undefined;
export declare const useGetFinaliseTransaction: () => import('@tanstack/react-query').UseMutationResult<import('axios').AxiosResponse<import('../../service/models/transaction.model').TransactionDto, any>, Error, string, unknown>;
