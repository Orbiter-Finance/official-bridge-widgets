import { useClientState } from '@/service/hooks/use-state-client'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'

export function useInitialiseAnalytics() {
  const { thirdParty } = useClientState()

  useEffect(() => {
    if (thirdParty?.googleAnalytics) {
      ReactGA.initialize(thirdParty.googleAnalytics.gId)
    }
  }, [thirdParty?.googleAnalytics])
}
