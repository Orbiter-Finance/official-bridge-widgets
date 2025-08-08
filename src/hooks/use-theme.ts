import { useTheme } from '@/providers/theme'
import { useClientState } from '@/service/hooks/use-state-client'

const defaultImages = {
  // nav: 'https://cdn.orbiter.finance/icon/orbiter-icon.png',
  // navDark: 'https://cdn.orbiter.finance/icon/orbiter-icon.png',
  nav: 'https://cdn.orbiter.finance/icon/eni-icon.svg',
  navDark: 'https://cdn.orbiter.finance/icon/eni-icon.svg'
}

export const useNavIcon = () => {
  const { theme } = useClientState()
  const { theme: resolvedTheme } = useTheme()

  if (!resolvedTheme || resolvedTheme === 'light') {
    return theme?.imageLogo || defaultImages.nav
  }

  return theme?.imageLogoDark || defaultImages.navDark
}
