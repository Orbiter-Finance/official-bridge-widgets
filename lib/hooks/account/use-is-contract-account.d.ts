import { ChainDto } from '../../service/models/chain.model';
export declare const useCode: () => import('wagmi').UseBytecodeReturnType<import('viem').GetBytecodeReturnType>;
export declare const useCodeOnChain: (chain: ChainDto | null) => import('wagmi').UseBytecodeReturnType<import('viem').GetBytecodeReturnType>;
export declare const useIs7702Account: () => boolean;
export declare const useIs7702AccountOnChain: (chain: ChainDto | null) => boolean;
export declare const useIsContractAccount: () => boolean;
export declare const useIsContractAccountOnChain: (chain: ChainDto | null) => boolean;
export declare const useCapabilitiesQuery: () => import('@tanstack/react-query').UseQueryResult<boolean, Error>;
export declare const useSupportsSendCalls: () => boolean | undefined;
