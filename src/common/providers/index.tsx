'use client'

import { ReactNode, useEffect, useState } from 'react'
import { Locale, RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { WagmiProvider } from 'wagmi'
import { useWagmiConfig } from '@/hooks/use-wagmi'
import { useClientState } from '@/service/hooks/use-state-client'
import { useFromChainId } from '@/service/stores/bridge.store'
import { OrbiterUltraBridgeConfig } from '@/types'
import { I18nProvider } from '@/providers/i18n'
import { ThemeProvider } from '@/providers/theme'

export function Providers({
  children,
  network,
  resolvedTheme,
  locale
}: {
  children: ReactNode
  locale?: OrbiterUltraBridgeConfig['locale']
  resolvedTheme?: OrbiterUltraBridgeConfig['theme']
  network?: OrbiterUltraBridgeConfig['network']
}) {
  const [mounted, setMounted] = useState(false)

  // Ensure consistent hook call order

  const wagmiConfig = useWagmiConfig({ network })
  const { metadata, name, theme } = useClientState()
  const fromChainId = useFromChainId()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until mounted and config is available
  if (!mounted || !wagmiConfig) {
    return <>{children}</>
  }

  const rainbowTheme =
    resolvedTheme === 'light'
      ? lightTheme({
          borderRadius: 'large',
          accentColor: 'var(--primary-gradient)',
          accentColorForeground: theme?.foregroundDark
        })
      : darkTheme({
          borderRadius: 'large',
          accentColor: 'var(--primary-gradient)',
          accentColorForeground: theme?.foregroundDark
        })

  return (
    <WagmiProvider config={wagmiConfig}>
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
