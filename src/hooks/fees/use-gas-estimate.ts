import { useQuery } from '@tanstack/react-query'

import { getMetamaskGasPrice, getNetworkGasLimit, getNetworkGasPrice } from '@/service/apis/gas.api'
import { ChainDto } from '@/service/models/chain.model'
import { GasEstimateRpcParams } from '@/service/models/transaction.model'

export type GasEstimate = {
  fee: string
  feeToken: string
  price: string
  limit: string
  chainId: string
}

// TODO: fees.data?.gasPrice ? { gasPrice: fees.data?.gasPrice } : { maxFeePerGas: fees.data?.maxFeePerGas, maxPriorityFeePerGas: fees.data?.maxPriorityFeePerGas }
export const useGasPrice = (chain: ChainDto | null | undefined) => {
  return useQuery({
    queryKey: ['gasPrice', chain?.chainId],
    queryFn: () => {
      if (!chain) return null
      return getGasPrice(chain)
    },
    enabled: !!chain,
    staleTime: 1000 * 2, // 2 seconds - gas price changes frequently
    gcTime: 1000 * 30 // 30 seconds - keep in cache longer
  })
}

export const useGasLimit = (chain: ChainDto | null | undefined, transactions: GasEstimateRpcParams[]) => {
  return useQuery({
    queryKey: ['gasLimit', chain?.chainId, transactions],
    queryFn: () => {
      if (!chain) return null
      if (!transactions.length) return null
      return getGasLimit(chain, transactions)
    },
    enabled: !!chain && !!transactions && transactions.length > 0,
    staleTime: 1000 * 10, // 10 seconds - gas limit is more stable
    gcTime: 1000 * 60 // 1 minute - keep in cache longer
  })
}

/**
 * @description get gas price
 * @param chain - chain
 * @returns gas price
 */
export const getGasPrice = async (chain: ChainDto): Promise<bigint | null> => {
  try {
    // try to get gas price from metamask
    const metamaskGasPrice = await getMetamaskGasPrice(chain.chainId)
    if (metamaskGasPrice) return metamaskGasPrice

    // if metamask get failed, get gas price from network
    if (!chain.rpc?.length) return null
    const networkGasPrice = await getNetworkGasPrice(chain.rpc, chain.chainId)

    return networkGasPrice
  } catch (error) {
    console.error(`Failed to get gas price for chain ${chain?.chainId}:`, error)
    return null
  }
}

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
      return null
    }

    // get gas limit
    const gasLimit = await getNetworkGasLimit(chain.rpc, transaction, chain.chainId)
    return gasLimit ?? null
  } catch (error) {
    console.error(`Failed to get gas limit for chain ${chain.chainId}:`, error)
    return null
  }
}

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
