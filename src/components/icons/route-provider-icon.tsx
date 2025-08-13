import { RouteProvider, useProviderName } from '@/common/consts/route-provider'
import { TransactionType } from '@/service/models/transaction.model'
import ENIIcon from '@/assets/networks/eni.jpg'
import NEROIcon from '@/assets/networks/nero.jpg'
import OrbiterIcon from '@/assets/obt/orbiter.svg'

const icons = {
  [RouteProvider.EniDeposit]: ENIIcon,
  [RouteProvider.EniWithdrawal]: ENIIcon,
  [RouteProvider.EniForcedWithdrawal]: ENIIcon,
  [RouteProvider.EniInterop]: ENIIcon,
  [RouteProvider.NERODeposit]: NEROIcon,
  [RouteProvider.NEROWithdrawal]: NEROIcon,
  [RouteProvider.NEROForcedWithdrawal]: NEROIcon,
  [RouteProvider.NEROInterop]: NEROIcon,
  [RouteProvider.Orbiter]: OrbiterIcon
}

export const routeProviderToTransactionType = {
  [RouteProvider.EniDeposit]: TransactionType.Deposit,
  [RouteProvider.EniWithdrawal]: TransactionType.Withdrawal,
  [RouteProvider.EniForcedWithdrawal]: TransactionType.ForcedWithdrawal,
  [RouteProvider.EniInterop]: TransactionType.Interop,
  [RouteProvider.NERODeposit]: TransactionType.Deposit,
  [RouteProvider.NEROWithdrawal]: TransactionType.Withdrawal,
  [RouteProvider.NEROForcedWithdrawal]: TransactionType.ForcedWithdrawal,
  [RouteProvider.NEROInterop]: TransactionType.Interop,
  [RouteProvider.Orbiter]: TransactionType.Orbiter
}

export const RouteProviderName = ({ provider, className }: { provider?: RouteProvider; className?: string }) => {
  const name = useProviderName(provider)

  return <span className={className}>{name}</span>
}

export const RouteProviderIcon = ({ provider, className }: { provider?: RouteProvider; className?: string }) => {
  if (!provider) {
    return null
  }

  const icon = icons[provider]

  return <img alt={`${provider} icon`} src={icon} className={className} height={16} width={16} />
}
