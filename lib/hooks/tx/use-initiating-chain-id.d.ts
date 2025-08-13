import { Chain } from 'viem';
import { ChainDto } from '../../service/models/chain.model';
export declare const useInitiatingChainId: () => number | undefined;
export declare const useInitiatingChain: () => Chain | null;
export declare const useInitiatingChainDto: () => ChainDto | null;
