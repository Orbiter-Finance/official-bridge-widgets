import { NotepadText } from 'lucide-react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

import { useDestinationTokens, useSelectedTokens } from '@/hooks/tokens/use-token'
import { useFromChain, useToChain } from '@/hooks/use-chains'
import { useTrackEvent } from '@/hooks/use-track-event'
import { TokenType } from '@/service/models/token.model'
import { useSetDisplayTransactions, useSetFromChainId, useSetToChainId } from '@/service/stores/bridge.store'
import { useDestinationToken, useSelectedToken, useSetDestinationToken, useSetSelectedToken } from '@/service/stores/token.store'

import { BridgeButton } from './bridge/BridgeButton'
import { BridgeFrom } from './bridge/BridgeFrom'
import { BridgeTo } from './bridge/BridgeTo'
import { PoweredByOrbiter } from './icons'
import { RoutePreview } from './route/RoutePreview'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export const Bridge = () => {
  const trackEvent = useTrackEvent()

  const from = useFromChain()
  const to = useToChain()
  const setFromChainId = useSetFromChainId()
  const setToChainId = useSetToChainId()

  const selectedTokens = useSelectedTokens()
  const destinationTokens = useDestinationTokens()
  const setSelectedToken = useSetSelectedToken()
  const setDestinationToken = useSetDestinationToken()
  const selectedToken = useSelectedToken()
  const destinationToken = useDestinationToken()
  const setDisplayTransactions = useSetDisplayTransactions()

  const openActivity = () => {
    setDisplayTransactions(true)
    trackEvent({ event: 'open-activity' })
  }

  const swapChains = () => {
    if (!to || !from) return

    setFromChainId(+to.chainId)
    setToChainId(+from.chainId)

    trackEvent({ event: 'from-chain-select', name: to.name, id: to.chainId })
    trackEvent({ event: 'to-chain-select', name: from.name, id: from.chainId })

    if (!selectedTokens?.length || !destinationTokens?.length) return

    // Non-generic flow - swap tokens - from
    const fromToken = destinationTokens.find(t => t.coinKey === selectedToken?.coinKey && t.tokenType !== TokenType.WRAPPED)
    if (fromToken) {
      setSelectedToken(fromToken)
    } else {
      setSelectedToken(selectedTokens[0])
    }

    // Non-generic flow - swap tokens - to
    const toToken = selectedTokens.find(t => t.coinKey === destinationToken?.coinKey)
    if (toToken) {
      setDestinationToken(toToken)
    } else {
      setDestinationToken(destinationTokens[0])
    }
  }

  return (
    <div className='flex flex-col items-center inset-0 p-4 overflow-y-auto overflow-x-hidden '>
      <Tabs defaultValue='bridge' className='w-full max-w-md'>
        <div className='flex items-center justify-between'>
          <TabsList>
            <TabsTrigger value='bridge' className='h-[32px]'>
              Bridge
            </TabsTrigger>
          </TabsList>

          <ConnectButton
            chainStatus='none'
            label='Connect'
            showBalance={{ smallScreen: true, largeScreen: false }}
            accountStatus={{
              smallScreen: 'address',
              largeScreen: 'address'
            }}
          />

          <div
            className='w-[32px] h-[32px] rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer'
            onClick={openActivity}>
            <NotepadText size={20} />
          </div>
        </div>

        <TabsContent value='bridge'>
          <div className='relative rounded-2xl shadow-lg'>
            <BridgeFrom />

            {/* arrow */}
            <div className='relative'>
              <div
                className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gray-100 border-4 border-gray-50 w-10 h-10 flex items-center justify-center cursor-pointer'
                onClick={swapChains}>
                <span className='text-xl'>↓</span>
              </div>
            </div>

            {/* To Chain */}
            <div className='mt-1 bg-gray-50 rounded-2xl border border-gray-100'>
              <BridgeTo />
              <RoutePreview />
            </div>

            {/* Submit */}
            <BridgeButton />
          </div>
        </TabsContent>
      </Tabs>
      {/* powered by orbiter */}
      <div className='mt-2 text-xs text-gray-500 flex items-center gap-1'>
        <span>Powered by</span>
        <a href='https://orbiter.finance/' target='_blank' rel='noopener noreferrer' className='hover:opacity-90 transition-opacity'>
          <PoweredByOrbiter />
        </a>
      </div>
    </div>
  )
}
