import { useQuery } from '@tanstack/react-query'
import { isPresent } from 'ts-is-present'

import { useApproved } from '@/hooks/approvals/use-approved'
import { DEFAULT_GAS } from '@/service/apis/gas.api'
import { RouteResultDto } from '@/service/models/route.model'
import { isInsufficientGasError } from '@/utils/error/error-catch'

import { useApproveTx } from '../approvals/use-approve-tx'
import { useHasInsufficientBalance } from '../balances/use-has-insufficient-balance'
import { useChain } from '../use-chains'
import { useSender } from '../wallets/use-recipient'
import { useGasApprove } from './use-gas-approve'
import { useGasInitiating } from './use-gas-initiating'
import { useRouteInitiatingTx } from './use-route-initiating-tx'

export interface RouteGasEstimateData {
  success: boolean
  needsRefreshAfterApprove?: boolean
  insufficientGas?: boolean
  estimates: {
    limit: number
    chainId: string
  }[]
}

export const useRouteGasEstimate = (route: RouteResultDto | null) => {
  const sender = useSender()
  const approvalTx = useApproveTx(route)
  const approved = useApproved()
  const hasInsufficientBalance = useHasInsufficientBalance()
  const initiatingTransaction = useRouteInitiatingTx(route)
  const chain = useChain(initiatingTransaction?.chainId)

  // Prepare approval item for gas estimation
  const approvalItem = !approved && approvalTx ? { ...approvalTx, from: sender! } : null
  const approvalGasEstimate = useGasApprove(chain, approvalItem)

  // Prepare initiating item for gas estimation
  const initiatingItem = initiatingTransaction ? { ...initiatingTransaction, from: sender! } : null
  const initiatingGasEstimate = useGasInitiating(route, chain, initiatingItem)

  return useQuery<RouteGasEstimateData | null>({
    queryKey: [
      'useRouteGasEstimate',
      approvalTx?.chainId,
      approvalTx?.to,
      approvalTx?.data,
      approvalTx?.value,
      initiatingTransaction?.chainId,
      initiatingTransaction?.to,
      initiatingTransaction?.data,
      initiatingTransaction?.value,
      chain?.rpc,
      hasInsufficientBalance,
      sender
    ],
    queryFn: async () => {
      if (!initiatingTransaction) return null

      // console.log('【useRouteGasEstimate】', approvalGasEstimate.data, initiatingGasEstimate.data);

      const transactionsForGasEstimate = approvalItem ? [approvalItem, initiatingItem] : [initiatingItem]
      const defaultEstimates = transactionsForGasEstimate.map(tx => ({
        limit: DEFAULT_GAS,
        chainId: tx?.chainId ?? ''
      }))

      if (hasInsufficientBalance || !chain || !sender) {
        return {
          success: false,
          estimates: defaultEstimates
        }
      }

      try {
        const approvalLimit = approvalGasEstimate.data
        const initiatingLimit = initiatingGasEstimate.data

        const approvalEstimate = approvalItem && approvalLimit ? { limit: Number(approvalLimit), chainId: approvalItem.chainId } : null

        const initiatingEstimate = initiatingItem && initiatingLimit ? { limit: initiatingLimit, chainId: initiatingItem.chainId } : null

        // console.log('【useRouteGasEstimate】', approvalEstimate, initiatingEstimate);

        return {
          success: true,
          estimates: [approvalEstimate, initiatingEstimate].filter(isPresent),
          needsRefreshAfterApprove: true
        }
      } catch (error) {
        console.error('Gas estimation failed:', error)

        if (isInsufficientGasError(error)) {
          return {
            success: false,
            insufficientGas: true,
            estimates: defaultEstimates
          }
        }
        return {
          success: false,
          estimates: defaultEstimates
        }
      }
    },
    staleTime: 1000 * 5, // 5 seconds - route gas estimate
    gcTime: 1000 * 30 // 30 seconds - keep in cache longer
  })
}
