'use client'

import { ReactNode } from 'react'
import { Locale, RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { WagmiProvider } from 'wagmi'
import { useClientState } from '@/service/hooks/use-state-client'
import { useFromChainId } from '@/service/stores/bridge.store'
import { BridgeConfig } from '@/types'
import { I18nProvider } from '@/providers/i18n'
import { ThemeProvider } from '@/providers/theme'
import { useWagmiConfig } from '@/hooks/use-wagmi'

export function Providers({
  children,
  network,
  resolvedTheme = 'light',
  locale = 'en-US'
}: {
  children: ReactNode
  locale: BridgeConfig['locale']
  resolvedTheme: BridgeConfig['theme']
  network: BridgeConfig['network']
}) {
  // Ensure consistent hook call order

  const { metadata, name, theme } = useClientState()
  const fromChainId = useFromChainId()
  const config = useWagmiConfig({ network })

  const rainbowTheme =
    resolvedTheme === 'light'
      ? lightTheme({
          borderRadius: 'large',
          accentColor: 'var(--primary-gradient)',
          accentColorForeground: theme?.foregroundDark
        })
      : darkTheme({
          borderRadius: 'large',
          accentColor: 'var(--primary-foreground)',
          accentColorForeground: theme?.foregroundDark
        })

  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider
        initialChain={fromChainId}
        locale={locale && locale?.includes('zh') ? 'zh' : (locale as Locale) || 'en'}
        theme={rainbowTheme}
        appInfo={{
          appName: name,
          learnMoreUrl: metadata?.learnMoreUrl
        }}
        coolMode
        showRecentTransactions={false}>
        <ThemeProvider theme={resolvedTheme}>
          <I18nProvider locale={locale}>{children}</I18nProvider>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiProvider>
  )
}
