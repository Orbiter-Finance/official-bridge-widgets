import { ChainDto } from '../../service/models/chain.model';
import { GasEstimateRpcParams } from '../../service/models/transaction.model';
export type GasEstimate = {
    fee: string;
    feeToken: string;
    price: string;
    limit: string;
    chainId: string;
};
export type GasFees = {
    maxFeePerGas: bigint;
    maxPriorityFeePerGas: bigint;
};
export declare const useGasPrice: (chain: ChainDto | null | undefined) => import('@tanstack/react-query').UseQueryResult<bigint | null, Error>;
/**
 * @description Get complete gas fees including priority fees for EIP-1559 transactions
 */
export declare const useGasFees: (chain: ChainDto | null | undefined) => import('@tanstack/react-query').UseQueryResult<GasFees | null, Error>;
export declare const useGasLimit: (chain: ChainDto | null | undefined, transactions: GasEstimateRpcParams[]) => import('@tanstack/react-query').UseQueryResult<bigint | null, Error>;
/**
 * @description get gas fees including priority fees
 * @param chain - chain
 * @returns gas fees
 */
export declare const getGasFees: (chain: ChainDto) => Promise<GasFees | null>;
/**
 * @description get gas price
 * @param chain - chain
 * @returns gas price
 */
export declare const getGasPrice: (chain: ChainDto) => Promise<bigint | null>;
/**
 * @description get gas limit
 * @param chain - chain
 * @param transaction - transaction
 * @returns gas limit
 */
export declare const getGasLimit: (chain: ChainDto, transaction: GasEstimateRpcParams[]) => Promise<bigint | null>;
