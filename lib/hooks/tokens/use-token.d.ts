import { Transaction } from '../../service/models/transaction.model';
export { useSelectedToken, useDestinationToken } from '../../service/stores/token.store';
export declare const useSelectedTokens: () => import('../../service/models/token.model').Token[];
export declare const useDestinationTokens: () => import('../../service/models/token.model').Token[];
export declare const useTxToken: (tx?: Transaction) => import('../../service/models/token.model').Token | undefined;
export declare const useWrappedToken: () => (chainId: number, address: string) => import('../../service/models/token.model').Token | null | undefined;
export declare const useBridgedToken: () => (chainId: number, address: string) => import('../../service/models/token.model').Token | null | undefined;
