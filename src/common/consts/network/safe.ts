import {
  arbitrum,
  aurora,
  avalanche,
  base,
  baseSepolia,
  blast,
  bsc,
  celo,
  gnosis,
  gnosisChiado,
  linea,
  mainnet,
  mantle,
  optimism,
  polygon,
  polygonZkEvm,
  scroll,
  sepolia,
  worldchain,
  xLayer,
  zksync
} from 'viem/chains'

export const safeTransactionServiceEndpoints: {
  [chainId: number]: string | undefined
} = {
  [mainnet.id]: 'https://safe-transaction-mainnet.safe.global',
  [optimism.id]: 'https://safe-transaction-optimism.safe.global',
  [bsc.id]: 'https://safe-transaction-bsc.safe.global',
  [gnosis.id]: 'https://safe-transaction-gnosis-chain.safe.global',
  [polygon.id]: 'https://safe-transaction-polygon.safe.global',
  [xLayer.id]: 'https://safe-transaction-xlayer.safe.global',
  [zksync.id]: 'https://safe-transaction-zksync.safe.global',
  [worldchain.id]: 'https://safe-transaction-worldchain.safe.global',
  [polygonZkEvm.id]: 'https://safe-transaction-zkevm.safe.global',
  [mantle.id]: 'https://safe-transaction-mantle.safe.global',
  [base.id]: 'https://safe-transaction-base.safe.global',
  [gnosisChiado.id]: 'https://safe-transaction-chiado.safe.global',
  [arbitrum.id]: 'https://safe-transaction-arbitrum.safe.global',
  [celo.id]: 'https://safe-transaction-celo.safe.global',
  [avalanche.id]: 'https://safe-transaction-avalanche.safe.global',
  [linea.id]: 'https://safe-transaction-linea.safe.global',
  [blast.id]: 'https://safe-transaction-blast.safe.global',
  [baseSepolia.id]: 'https://safe-transaction-base-sepolia.safe.global',
  [scroll.id]: 'https://safe-transaction-scroll.safe.global',
  [aurora.id]: 'https://safe-transaction-aurora.safe.global',
  [sepolia.id]: 'https://safe-transaction-sepolia.safe.global'
}
