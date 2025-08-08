import { Providers } from './common/providers'
import { InjectedStoreProvider } from './common/providers/injected.provider'

import { OrbiterUltraBridgeConfig } from './types'
import { api, QueryProvider, useInitApiBaseURL } from './common/providers/query.provider'
import { BASE_URLS } from './common/consts'

export default function Widget({ config }: { config: OrbiterUltraBridgeConfig }) {
  api.defaults.baseURL = BASE_URLS[config.network || 'testnet']
  useInitApiBaseURL(config.network)

  return (
    <QueryProvider>
      <InjectedStoreProvider network={config.network} projectId={config.projectId}>
        <Providers>
        <></>
        </Providers>
      </InjectedStoreProvider>
    </QueryProvider>
  )
}
