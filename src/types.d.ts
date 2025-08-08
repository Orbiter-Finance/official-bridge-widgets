import { Theme } from './providers/theme'
import { I18nProviderProps } from './providers/i18n'

export interface OrbiterUltraBridgeConfig {
  projectId: string
  network?: 'testnet' | 'mainnet'
  theme?: Theme
  locale?: I18nProviderProps['locale']
}
