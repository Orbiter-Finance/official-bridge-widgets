import { Chain } from 'viem';
import { ChainDto } from '../service/models/chain.model';
export { useFromChainId, useToChainId } from '../service/stores/bridge.store';
export declare function useChains(): ChainDto[];
export declare const useChain: (chainId: number | string | undefined | null) => ChainDto | null;
export declare const useFromChain: () => ChainDto | null;
export declare const useToChain: () => ChainDto | null;
export declare const getChainByDto: (chain: ChainDto | null | undefined) => Chain | null;
