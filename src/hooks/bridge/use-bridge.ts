import { isPresent } from 'ts-is-present'
import { Address, Hex } from 'viem'
import { useAccount, useWalletClient } from 'wagmi'

import { useBridgeGasEstimate } from '@/hooks/fees/use-bridge-gas-estimate'
import { useSelectedBridgeRoute } from '@/hooks/routes/use-bridge-route'
import { useInitiatingChain } from '@/hooks/tx/use-initiating-chain-id'
import { useSwitchChain } from '@/hooks/wallets/use-switch-chain'
import { isRouteQuote } from '@/utils/guards'

import { useSupportsSendCalls } from '../account/use-is-contract-account'
import { useApproveTx } from '../approvals/use-approve-tx'
import { useSubmitTransactionEvm } from '../tx/use-tx-submit'

// import { useGasPrice } from '../fees/use-gas-estimate';

export const useBridgeEvm = () => {
  const account = useAccount()
  const wallet = useWalletClient()
  const switchChain = useSwitchChain()
  const selectedRoute = useSelectedBridgeRoute()
  const initiatingChain = useInitiatingChain()
  // const initiatingChainDto = useInitiatingChainDto();
  const approveTx = useApproveTx(selectedRoute.data)
  const submitTransaction = useSubmitTransactionEvm(initiatingChain)
  const supportsSendCalls = useSupportsSendCalls()

  // gas
  // const { data: gasPrice } = useGasPrice(initiatingChainDto);
  const { data: gas } = useBridgeGasEstimate()

  const route = isRouteQuote(selectedRoute?.data?.result) ? selectedRoute.data.result : undefined
  const tx = route?.initiatingTransaction

  const params: any = {}
  if (tx && gas) {
    params.data = tx.data as Hex
    params.to = tx.to as Address
    params.chainId = parseInt(tx.chainId)
    params.value = BigInt(tx.value)
    params.gas = BigInt(Math.round(gas))
    // params.gasPrice = gasPrice;
  }

  return async () => {
    if (!params.gas || !initiatingChain || !wallet.data) {
      return
    }

    // console.log('【useBridgeEvm】', params);

    if (initiatingChain.id !== account.chainId || initiatingChain.id !== wallet.data.chain.id) {
      await switchChain(initiatingChain)
    }

    const calls = [approveTx, params].filter(isPresent) // approveGasTokenTx

    if (
      supportsSendCalls &&
      calls.length > 1
      // selectedRoute.data?.id !== RouteProvider.EniForcedWithdrawal
    ) {
      return submitTransaction(calls)
    }

    return submitTransaction(params)
  }
}

export const useBridge = () => {
  return useBridgeEvm()
}
