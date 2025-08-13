import { BridgeConfig } from './types'
import { api, QueryProvider } from './common/providers/query.provider'
import { BASE_URLS } from './common/consts'
import { Bridge as BridgeWidget } from './components/Bridge'
import './style.css'
import { Modals } from './components/modals'
import { Toaster } from './components/ui/sonner'

import { AnimatePresence, motion } from 'framer-motion'
import { ActivityHome } from './components/activity/ActivityHome'
import { useDisplayTransactions } from './service/stores/bridge.store'
import { useInitialise } from './hooks/use-initialise'
import { InjectedStoreProvider } from './common/providers/injected.provider'
import { Providers as BridgeProviders } from './common/providers'

export default function Bridge({ config }: { config: BridgeConfig }) {
  api.defaults.baseURL = BASE_URLS[config.network || 'testnet']

  return (
    <div className='orbiter-bridge bg-background relative max-w-[448px] w-[448px] h-fit min-h-[500px] rounded-3xl'>
      <Providers config={config}>
        <BridgeUI />
      </Providers>
    </div>
  )
}

function Providers({ config, children }: { config: BridgeConfig; children: React.ReactNode }) {
  return (
    <QueryProvider>
      <InjectedStoreProvider network={config.network} projectId={config.projectId}>
        <BridgeProviders resolvedTheme={config.theme} locale={config.locale} network={config.network}>
          {children}
        </BridgeProviders>
      </InjectedStoreProvider>
    </QueryProvider>
  )
}

function BridgeUI() {
  useInitialise()

  return (
    <>
      <BridgeWidget />

      <Modals />
      <Toaster />

      {/* Transactions container */}
      <AnimatePresence mode='wait' initial={false}>
        <TransactionsContainer />
      </AnimatePresence>
    </>
  )
}

function TransactionsContainer() {
  const displayTransactions = useDisplayTransactions()

  if (!displayTransactions) {
    return null
  }

  return (
    <>
      <ActivityHome key='transactionItemsContainer' />
      {/* fade background */}
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        // transition={{ ease: "easeOut", duration: 1 }}
        className='w-full h-full z-10 backdrop-blur-lg absolute inset-0 bg-white/0'></motion.div>
    </>
  )
}
