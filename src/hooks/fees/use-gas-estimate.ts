import { useQuery } from '@tanstack/react-query';

import {
    calculateOptimalEIP1559Fees,
    calculatePriorityFee,
    getMetamaskGasFees,
    getNetworkGasLimit,
    getNetworkGasPrice,
} from '@/service/apis/gas.api';
import { ChainDto } from '@/service/models/chain.model';
import { GasEstimateRpcParams } from '@/service/models/transaction.model';

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

// TODO: fees.data?.gasPrice ? { gasPrice: fees.data?.gasPrice } : { maxFeePerGas: fees.data?.maxFeePerGas, maxPriorityFeePerGas: fees.data?.maxPriorityFeePerGas }
export const useGasPrice = (chain: ChainDto | null | undefined) => {
    return useQuery({
        queryKey: ['gasPrice', chain?.chainId],
        queryFn: () => {
            if (!chain) return null;
            return getGasPrice(chain);
        },
        enabled: !!chain,
        staleTime: 1000 * 15, // 15 seconds - gas price changes frequently
        gcTime: 1000 * 30, // 30 seconds - keep in cache longer
    });
};

/**
 * @description Get complete gas fees including priority fees for EIP-1559 transactions
 */
export const useGasFees = (chain: ChainDto | null | undefined) => {
    return useQuery({
        queryKey: ['gasFees', chain?.chainId],
        queryFn: async () => {
            if (!chain) return null;
            return getGasFees(chain);
        },
        enabled: !!chain,
        staleTime: 1000 * 15, // 15 seconds - gas fees change frequently
        gcTime: 1000 * 30, // 30 seconds - keep in cache longer
    });
};

export const useGasLimit = (chain: ChainDto | null | undefined, transactions: GasEstimateRpcParams[]) => {
    return useQuery({
        queryKey: ['gasLimit', chain?.chainId, transactions],
        queryFn: () => {
            if (!chain) return null;
            if (!transactions.length) return null;

            return getGasLimit(chain, transactions);
        },
        enabled: !!chain && !!transactions && transactions.length > 0,
        staleTime: 1000 * 30, // Increased to 30 seconds, gas limit is relatively stable
        gcTime: 1000 * 120, // Increased to 2 minutes to extend cache time
        retry: 0,
        // // Add retry mechanism
        // retry: (failureCount) => {
        //     // Retry up to 3 times
        //     return failureCount < 3;
        // },
        // // Add retry delay
        // retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    });
};

/**
 * @description get gas fees including priority fees
 * @param chain - chain
 * @returns gas fees
 */
export const getGasFees = async (chain: ChainDto): Promise<GasFees | null> => {
    try {
        // Try to get gas fees from MetaMask API first (most accurate)
        const metamaskFees = await getMetamaskGasFees(chain.chainId);
        if (metamaskFees) {
            // logger.info(LogCategory.GAS, 'GasFees MetaMask', metamaskFees);
            return metamaskFees;
        }
        if (!chain.rpc?.length) return null;

        // Try to calculate optimal EIP-1559 fees using current base fee
        const optimalFees = await calculateOptimalEIP1559Fees(chain.chainId, chain.rpc[0]);
        if (optimalFees) {
            // logger.info(LogCategory.GAS, 'GasFees EIP-1559', optimalFees);
            return optimalFees;
        }

        // Fallback to legacy gas price calculation
        const networkGasPrice = await getNetworkGasPrice(chain.rpc, chain.chainId);

        if (networkGasPrice) {
            const priorityFee = calculatePriorityFee(chain.chainId, networkGasPrice);

            // Calculate maxFeePerGas according to EIP-1559 formula:
            // maxFeePerGas = baseFeePerGas + maxPriorityFeePerGas + buffer
            // For legacy gas price, we estimate baseFeePerGas as 60-70% of total gas price
            const estimatedBaseFee = (networkGasPrice * 65n) / 100n; // 65% of gas price as base fee
            const buffer = (estimatedBaseFee * 20n) / 100n; // 20% buffer for base fee fluctuations
            const maxFeePerGas = estimatedBaseFee + priorityFee + buffer;

            const gasFees = {
                maxFeePerGas: maxFeePerGas,
                maxPriorityFeePerGas: priorityFee,
            };
            // logger.info(LogCategory.GAS, 'GasFees Legacy', gasFees);
            return gasFees;
        }

        return null;
    } catch {
        console.error(`Failed to get gas fees for chain ${chain?.chainId}`);
        return null;
    }
};

/**
 * @description get gas price
 * @param chain - chain
 * @returns gas price
 */
export const getGasPrice = async (chain: ChainDto): Promise<bigint | null> => {
    try {
        // Try to get gas fees from MetaMask API first
        const metamaskFees = await getMetamaskGasFees(chain.chainId);
        if (metamaskFees) return metamaskFees.maxFeePerGas;

        // If MetaMask API failed, get gas price from network
        if (!chain.rpc?.length) return null;
        const networkGasPrice = await getNetworkGasPrice(chain.rpc, chain.chainId);

        // log('getGasPrice', chain.chainId, networkGasPrice);

        return networkGasPrice;
    } catch {
        console.error(`Failed to get gas price for chain ${chain?.chainId}`);
        return null;
    }
};

/**
 * @description get gas limit
 * @param chain - chain
 * @param transaction - transaction
 * @returns gas limit
 */
export const getGasLimit = async (chain: ChainDto, transaction: GasEstimateRpcParams[]): Promise<bigint | null> => {
    try {
        // check input params
        if (!chain?.rpc?.length || !transaction?.length) {
            return null;
        }

        // get gas limit
        const gasLimit = await getNetworkGasLimit(chain.rpc, transaction, chain.chainId);
        return gasLimit ?? null;
    } catch {
        console.error(`Failed to get gas limit for chain ${chain.chainId}`);
        return null;
    }
};

// export const useGasEstimate = () => {
//     return async (from: ChainDto | null, transaction: TransactionForGasEstimate[]): Promise<GasEstimate | null> => {
//         if (!from) return null;

//         const gasPrice = await getGasPrice(from);
//         if (!gasPrice) return null;

//         const gasLimit = await getGasLimit(from, transaction);
//         if (!gasLimit) return null;

//         const transactionFee = gasLimit * gasPrice;

//         return {
//             fee: new BigNumber(transactionFee.toString()).div(10 ** from.nativeCurrency.decimals).toFixed(18),
//             feeToken: from.nativeCurrency.symbol,
//             price: gasPrice.toString(),
//             limit: gasLimit.toString(),
//             chainId: from.chainId,
//         };
//     };
// };
