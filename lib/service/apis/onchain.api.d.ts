import { ChainDto } from '../models/chain.model';
/**
 * Send an Ethereum RPC request
 * @param rpcUrl - The RPC URL
 * @param method - The RPC method
 * @param params - The RPC parameters
 * @returns The RPC response
 */
export declare const sendEthereumRpcRequest: (rpcUrl: string, method: string, params?: any[]) => Promise<any>;
/**
 * Get the onchain hash from a Safe hash
 * @param chain - The chain
 * @param hash - The Safe hash
 * @returns The onchain hash or null if not found
 */
export declare const getOnchainHashFromSafeHash: (chain: ChainDto, hash: string) => Promise<string | null>;
