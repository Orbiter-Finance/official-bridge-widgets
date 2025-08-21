import { useQuery } from '@tanstack/react-query'
import { useDebounce } from 'use-debounce'
import { parseUnits } from 'viem'

import { useRecipient, useSender } from '@/hooks/wallets/use-recipient'

import { getBridgeRoutes } from '../apis/route.api'
import { useFromChainId, useRawAmount, useToChainId } from '../stores/bridge.store'
import { useDestinationToken, useSelectedToken } from '../stores/token.store'
import { useMemo } from 'react'
import { useBridgeAmountLimits } from './use-bridge-amount-limits'

export const useBridgeRoutes = () => {
  const fromChainId = useFromChainId()
  const toChainId = useToChainId()
  const token = useSelectedToken()
  const destinationToken = useDestinationToken()
  const amount = useRawAmount()
  const recipient = useRecipient()
  const sender = useSender()

  const { data: bridgeLimits } = useBridgeAmountLimits()

  const [debouncedAmount] = useDebounce(amount, 500)

  // Reset debounced amount immediately when amount is empty
  const finalAmount = useMemo(() => (amount === '' || amount === null || amount === undefined ? '' : debouncedAmount), [debouncedAmount, amount])

  const isSatisfyLimits = useMemo(() => {
    if (!bridgeLimits || !bridgeLimits.data || !token) return true

    const typedAmount = parseUnits(finalAmount, token!.decimals)

    try {
      return typedAmount >= BigInt(bridgeLimits.data.limits.minValue) && typedAmount <= BigInt(bridgeLimits.data.limits.maxValue)
    } catch {
      return true
    }
  }, [finalAmount, token, bridgeLimits])

  const isReady = Boolean(
    sender &&
      recipient &&
      token?.address &&
      destinationToken?.address &&
      fromChainId &&
      toChainId &&
      isSatisfyLimits &&
      Number(finalAmount) > 0 &&
      Number(finalAmount) < Number.MAX_SAFE_INTEGER
  )

  // useEffect(() => {
  //     console.log('【useBridgeRoutes】', isReady, token, destinationToken);
  // }, [isReady, token, destinationToken]);

  return useQuery({
    queryKey: ['bridge-routes', finalAmount, fromChainId, toChainId, token?.address, destinationToken?.address, sender, recipient],
    queryFn: () => {
      if (!isReady) return null

      return getBridgeRoutes({
        amount: parseUnits(finalAmount, token!.decimals).toString(),
        fromChainId: fromChainId!.toString(),
        toChainId: toChainId!.toString(),
        fromTokenAddress: token!.address,
        toTokenAddress: destinationToken!.address,
        sender: sender!,
        recipient: recipient!
      })
    },
    placeholderData: previousData => (isReady ? previousData : null),
    enabled: isReady,
    staleTime: 1000 * 5,
    retry: 0
  })
}
