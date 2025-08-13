import { GasEstimateRpcParams } from '../models/transaction.model';
export declare const DEFAULT_GAS_PRICE = 1500000000;
export declare const DEFAULT_GAS_LIMIT = 50000;
export declare const DEFAULT_GAS = 500000;
export declare const PROVE_GAS: bigint;
export declare const FINALIZE_GAS: bigint;
/**
 * @description Calculate reasonable priority fee for different chains
 * @param chainId - chain id
 * @param baseGasPrice - base gas price in wei
 * @returns priority fee in wei
 */
export declare const calculatePriorityFee: (chainId: string, baseGasPrice: bigint) => bigint;
/**
 * @description Get suggested gas fees including priority fee from MetaMask API
 * @param chainId - chain id
 * @returns gas fees object with maxFeePerGas and maxPriorityFeePerGas
 */
export declare const getMetamaskGasFees: (chainId: string) => Promise<{
    maxFeePerGas: bigint;
    maxPriorityFeePerGas: bigint;
} | null>;
/**
 * @description get gas price from metamask
 * @param rpcs - array of rpc urls
 * @param chainId - chain id
 * @returns gas price
 */
export declare const getNetworkGasPrice: (rpcs: string[], chainId: string) => Promise<bigint | null>;
/**
 * @description get gas price from network
 * @param rpcs - array of rpc urls
 * @param params - gas estimate params
 * @param chainId - chain id
 * @returns gas limit
 */
export declare const getNetworkGasLimit: (rpcs: string[], params: GasEstimateRpcParams[], chainId: string) => Promise<bigint | null>;
export declare const checkMinGasPrice: (chainId: string, gasPrice: bigint | number) => bigint;
export declare const checkMinGasLimit: (chainId: string, gasLimit: bigint | number) => bigint;
