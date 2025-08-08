import { RouteProvider } from '@/common/consts/route-provider'
import { routeProviderToTransactionType } from '@/components/icons/route-provider-icon'
import { useFromChain, useToChain } from '@/hooks/use-chains'
import { useRecipient, useSender } from '@/hooks/wallets/use-recipient'
import { RouteStepDto, RouteStepWrapDto } from '@/service/models/route.model'
import { Confirmation, MessageStatus, Transaction } from '@/service/models/transaction.model'
import { useDestinationToken, useSelectedToken } from '@/service/stores/token.store'
import { isRouteWrapStep } from '@/utils/guards'

export const useBuildPendingTx = () => {
  const sender = useSender()
  const recipient = useRecipient()
  const fromToken = useSelectedToken()
  const toToken = useDestinationToken()

  const from = useFromChain()
  const to = useToChain()

  return (
    confirmation: Confirmation,
    amount: bigint,
    receiveAmount: bigint,
    provider: RouteProvider | undefined,
    duration: number,
    steps: RouteStepDto[]
  ): Transaction | undefined => {
    if (!fromToken || !toToken || !from || !to || !sender || !recipient || !provider) {
      return
    }

    const tx: Transaction = {
      id: Math.random().toString(),
      amount: amount.toString(),
      send: confirmation,
      receive: undefined,
      wrap: steps.find(isRouteWrapStep) as RouteStepWrapDto | undefined,
      // refund: undefined,
      // prove: undefined,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
      // deploymentId: deployment?.id ?? '',
      from: sender,
      to: recipient,
      // recipient,
      // sender,
      fromChainId: +from.chainId,
      toChainId: +to.chainId,
      provider,
      token: fromToken.address,
      receiveToken: toToken.address,
      receiveAmount: receiveAmount.toString(),
      // l2TransactionHash: '',
      // hyperlaneMessageId: '',
      duration,
      // metadata,
      status: MessageStatus.Processing,
      type: routeProviderToTransactionType[provider]
    }

    // if (_provider === RouteProvider.EniForcedWithdrawal) {
    //   const w: OptimismForcedWithdrawalBridge = {
    //     type: "forced-withdrawal",
    //     provider: _provider,
    //     deposit: tx as OptimismDepositBridge,
    //     id: tx.id,
    //   };

    //   return w;
    // }

    return tx
  }
}
