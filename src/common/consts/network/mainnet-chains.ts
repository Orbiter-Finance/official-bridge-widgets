import { ChainDto } from '@/service/models/chain.model'

import { EniChainDto } from './eni-chain'
import { NeroChainDto } from './nero-chain'

export const mainnetChains: ChainDto[] = [
  EniChainDto,
  NeroChainDto,
  {
    chainId: '1',
    name: 'Ethereum',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      coinKey: 'ETH',
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: [
      'https://ethereum.blockpi.network/v1/rpc/public',
      'https://eth.drpc.org',
      'https://ethereum-rpc.publicnode.com',
      'https://mainnet.gateway.tenderly.co',
      'https://rpc.mevblocker.io',
      'https://rpc.mevblocker.io/fast',
      'https://rpc.mevblocker.io/noreverts',
      'https://rpc.mevblocker.io/fullprivacy',
      'https://rpc.ankr.com/eth',
      'https://go.getblock.io/aefd01aa907c4805ba3c00a9e5b48c6b',
      'https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7',
      'https://1rpc.io/eth',
      'https://eth.rpc.blxrbdn.com/',
      'https://eth-mainnet.public.blastapi.io',
      'https://api.securerpc.com/v1',
      'https://openapi.bitstack.com/v1/wNFxbiJyQsSeLrX8RRCHi7NpRxrlErZk/DjShIqLishPCTB9HiMkPHXjUM9CNM9Na/ETH/mainnet',
      'https://eth-pokt.nodies.app',
      'https://eth-mainnet-public.unifra.io',
      'https://rpc.eth.gateway.fm',
      'https://virtual.mainnet.rpc.tenderly.co/7355b215-ef17-4e3e-8f64-d494284ef18a',
      'https://gateway.tenderly.co/public/mainnet',
      'https://api.zan.top/eth-mainnet',
      'https://eth.merkle.io',
      'https://eth.nodeconnect.org/',
      'https://rpc.graffiti.farm',
      'https://rpc.public.curie.radiumblock.co/http/ethereum',
      'https://eth-mainnet.4everland.org/v1/37fa9972c1b1cd5fab542c7bdd4cde2f',
      'https://eth.blockrazor.xyz'
    ],
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://etherscan.io'
      },
      {
        name: 'OKX',
        url: 'https://www.oklink.com/eth'
      }
    ],
    vm: 'EVM'
  },
  {
    chainId: '42161',
    name: 'Arbitrum',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://arbiscan.io'
      },
      {
        name: 'OKX',
        url: 'https://www.oklink.com/arbitrum'
      },
      {
        name: 'L2Scan',
        url: 'https://arbitrum.l2scan.co'
      }
    ],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      coinKey: 'ETH',
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: [
      'https://arbitrum-one.publicnode.com',
      'https://arb1.arbitrum.io/rpc',
      'https://rpc.ankr.com/arbitrum',
      'https://1rpc.io/arb',
      'https://arb-pokt.nodies.app',
      'https://arbitrum.blockpi.network/v1/rpc/public',
      'https://arbitrum-one.public.blastapi.io',
      'https://arb-mainnet-public.unifra.io',
      'https://arbitrum-one-rpc.publicnode.com',
      'https://api.zan.top/arb-one',
      'https://arbitrum.drpc.org',
      'https://arbitrum.gateway.tenderly.co'
    ],
    vm: 'EVM'
  },
  {
    chainId: '137',
    name: 'Polygon',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://polygonscan.com'
      },
      {
        name: 'OKX',
        url: 'https://www.oklink.com/polygon'
      }
    ],
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
      coinKey: 'MATIC',
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: [
      'https://polygon-bor-rpc.publicnode.com',
      'https://polygon-rpc.com/',
      'https://rpc-mainnet.matic.quiknode.pro',
      'https://polygon.gateway.tenderly.co',
      'https://polygon.drpc.org',
      'https://rpc.ankr.com/polygon',
      'https://polygon-pokt.nodies.app',
      'https://polygon-mainnet.public.blastapi.io',
      'https://1rpc.io/matic',
      'https://polygon.blockpi.network/v1/rpc/public',
      'https://go.getblock.io/02667b699f05444ab2c64f9bff28f027',
      'https://polygon.api.onfinality.io/public',
      'https://gateway.tenderly.co/public/polygon',
      'https://api.zan.top/polygon-mainnet',
      'https://polygon-mainnet.4everland.org/v1/37fa9972c1b1cd5fab542c7bdd4cde2f'
    ],
    vm: 'EVM'
  },
  {
    chainId: '10',
    name: 'Optimism',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://optimistic.etherscan.io'
      },
      {
        name: 'OKX',
        url: 'https://www.oklink.com/optimism'
      },
      {
        name: 'L2Scan',
        url: 'https://optimism.bsquared.network'
      }
    ],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      coinKey: 'ETH',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: [
      'https://optimism-rpc.publicnode.com',
      'https://optimism.gateway.tenderly.co',
      'https://optimism.drpc.org',
      'https://rpc.ankr.com/optimism',
      'https://optimism-mainnet.public.blastapi.io',
      'https://1rpc.io/op',
      'https://op-pokt.nodies.app',
      'https://optimism.blockpi.network/v1/rpc/public',
      'https://optimism.api.onfinality.io/public',
      'https://api.zan.top/opt-mainnet',
      'https://gateway.tenderly.co/public/optimism',
      'https://go.getblock.io/e8a75f8dcf614861becfbcb185be6eb4',
      'https://opt-mainnet.4everland.org/v1/37fa9972c1b1cd5fab542c7bdd4cde2f',
      'https://rpc.buildbear.io/esquivelfabian/'
    ],
    vm: 'EVM'
  },
  {
    chainId: 'loopring',
    name: 'Loopring',
    explorers: [
      {
        name: 'Explorer',
        url: 'https://explorer.loopring.io'
      }
    ],
    vm: 'LPRVM',
    nativeCurrency: {
      id: '0',
      name: 'Ethereum',
      symbol: 'ETH',
      coinKey: 'ETH',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000'
    },
    api: ['https://api3.loopring.io/api/v3'],
    rpc: ['wss://ws.api3.loopring.io/v3/ws']
  },
  {
    chainId: '324',
    name: 'ZKSyncEra',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://era.zksync.network'
      },
      {
        name: 'OKX',
        url: 'https://www.oklink.com/zksync'
      },
      {
        name: 'L2Scan',
        url: 'https://zksync-era.l2scan.co'
      }
    ],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      coinKey: 'ETH',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: [
      'https://mainnet.era.zksync.io',
      'https://zksync-era.blockpi.network/v1/rpc/public',
      'https://go.getblock.io/f76c09905def4618a34946bf71851542',
      'https://1rpc.io/zksync2-era',
      'https://api.zan.top/zksync-mainnet'
    ],
    vm: 'EVM'
  },
  {
    chainId: '56',
    name: 'BSC',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://bscscan.com'
      },
      {
        name: 'OKX',
        url: 'https://www.oklink.com/bsc'
      }
    ],
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      coinKey: 'BNB',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: [
      'https://bsc-rpc.publicnode.com',
      'https://bsc-dataseed1.bnbchain.org',
      'https://bsc-dataseed2.bnbchain.org',
      'https://bsc-dataseed3.bnbchain.org',
      'https://bsc-dataseed4.bnbchain.org',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed3.defibit.io',
      'https://bsc-dataseed4.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed2.ninicoin.io',
      'https://bsc-dataseed3.ninicoin.io',
      'https://bsc-dataseed4.ninicoin.io',
      'https://bsc-dataseed1.defibit.io',
      'https://rpc.ankr.com/bsc',
      'https://rpc-bsc.48.club',
      'https://0.48.club',
      'https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3',
      'https://go.getblock.io/cc778cdbdf5c4b028ec9456e0e6c0cf3',
      'https://binance.nodereal.io',
      'https://1rpc.io/bnb',
      'https://bsc.rpc.blxrbdn.com/',
      'https://bsc.blockpi.network/v1/rpc/public',
      'https://bnb.api.onfinality.io/public',
      'https://bsc-mainnet.public.blastapi.io',
      'https://api.zan.top/bsc-mainnet',
      'https://bsc.drpc.org',
      'https://bsc-mainnet.4everland.org/v1/37fa9972c1b1cd5fab542c7bdd4cde2f',
      'https://bsc.blockrazor.xyz',
      'https://bsc-pokt.nodies.app'
    ],
    vm: 'EVM'
  },
  {
    chainId: '42170',
    name: 'Arbitrum Nova',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://nova.arbiscan.io'
      }
    ],
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      coinKey: 'ETH',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: [
      'https://arbitrum-nova.publicnode.com',
      'https://nova.arbitrum.io/rpc',
      'https://arbitrum-nova.public.blastapi.io',
      'https://arbitrum-nova.blockpi.network/v1/rpc/public',
      'https://arbitrum-nova-rpc.publicnode.com',
      'https://arbitrum-nova.drpc.org',
      'https://arbitrum-nova.gateway.tenderly.co'
    ],
    vm: 'EVM'
  },
  {
    chainId: '1101',
    name: 'Polygon zkEVM',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://zkevm.polygonscan.com'
      },
      {
        name: 'OKX',
        url: 'https://www.oklink.com/polygon-zkevm'
      }
    ],
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      coinKey: 'ETH',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: [
      'https://zkevm-rpc.com',
      'https://rpc.ankr.com/polygon_zkevm',
      'https://rpc.polygon-zkevm.gateway.fm',
      'https://1rpc.io/polygon/zkevm',
      'https://polygon-zkevm.blockpi.network/v1/rpc/public',
      'https://polygon-zkevm-mainnet.public.blastapi.io'
    ],
    vm: 'EVM'
  },
  {
    chainId: '534352',
    name: 'Scroll',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://scrollscan.com'
      },
      {
        name: 'OKX',
        url: 'https://www.oklink.com/scroll'
      },
      {
        name: 'L2Scan',
        url: 'https://scroll.l2scan.co'
      }
    ],
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
      coinKey: 'ETH',
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: [
      'https://scroll-rpc.publicnode.com',
      'https://rpc.scroll.io',
      'https://rpc.ankr.com/scroll',
      'https://scroll-mainnet.chainstacklabs.com',
      'https://scroll-mainnet.public.blastapi.io/',
      'https://scroll-mainnet-public.unifra.io',
      'https://scroll.blockpi.network/v1/rpc/public',
      'https://1rpc.io/scroll',
      'https://scroll.drpc.org',
      'https://scroll.api.onfinality.io/public'
    ],
    vm: 'EVM'
  },
  {
    chainId: '167000',
    name: 'Taiko',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://taikoscan.io'
      }
    ],
    nativeCurrency: {
      coinKey: 'ETH',
      address: '0x0000000000000000000000000000000000000000',
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpc: [
      'https://taiko-rpc.publicnode.com',
      'https://rpc.mainnet.taiko.xyz',
      'https://rpc.ankr.com/taiko',
      'https://taiko.blockpi.network/v1/rpc/public',
      'https://taiko-mainnet.4everland.org/v1/37fa9972c1b1cd5fab542c7bdd4cde2f',
      'https://taiko.drpc.org',
      'https://taiko-mainnet.rpc.porters.xyz/taiko-public'
    ],
    vm: 'EVM'
  },
  {
    chainId: '8453',
    name: 'Base',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://basescan.org'
      },
      {
        name: 'OKX',
        url: 'https://www.oklink.com/base'
      },
      {
        name: 'L2Scan',
        url: 'https://base.l2scan.co'
      }
    ],
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
      coinKey: 'ETH',
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: [
      'https://base-rpc.publicnode.com',
      'https://mainnet.base.org/',
      'https://developer-access-mainnet.base.org/',
      'https://base.gateway.tenderly.co',
      'https://base.blockpi.network/v1/rpc/public',
      'https://1rpc.io/base',
      'https://base-pokt.nodies.app',
      'https://base-mainnet.public.blastapi.io',
      'https://gateway.tenderly.co/public/base',
      'https://base.api.onfinality.io/public',
      'https://api.zan.top/base-mainnet'
    ],
    vm: 'EVM'
  },
  {
    chainId: '59144',
    name: 'Linea',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://lineascan.build'
      },
      {
        name: 'OKX',
        url: 'https://www.oklink.com/linea'
      },
      {
        name: 'L2Scan',
        url: 'https://linea.l2scan.co'
      }
    ],
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
      coinKey: 'ETH',
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: ['https://linea-rpc.publicnode.com', 'https://rpc.linea.build', 'https://linea.blockpi.network/v1/rpc/public', 'https://1rpc.io/linea'],
    vm: 'EVM'
  },
  {
    chainId: '5000',
    name: 'Mantle',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://mantlescan.xyz'
      }
    ],
    nativeCurrency: {
      name: 'MNT',
      symbol: 'MNT',
      decimals: 18,
      coinKey: 'MNT',
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: [
      'https://rpc.mantle.xyz',
      'https://mantle-rpc.publicnode.com',
      'https://mantle-mainnet.public.blastapi.io',
      'https://mantle.drpc.org',
      'https://rpc.ankr.com/mantle',
      'https://1rpc.io/mantle',
      'https://mantle.api.onfinality.io/public',
      'https://api.zan.top/mantle-mainnet'
    ],
    vm: 'EVM'
  },
  {
    chainId: '204',
    name: 'OPBNB',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://opbnb.bscscan.com'
      },
      {
        name: 'OKX',
        url: 'https://www.oklink.com/opbnb'
      }
    ],
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
      coinKey: 'BNB',
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: [
      'https://opbnb-rpc.publicnode.com',
      'https://opbnb-mainnet-rpc.bnbchain.org',
      'https://opbnb-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3',
      'https://opbnb-mainnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
      'https://1rpc.io/opbnb',
      'https://opbnb-mainnet.4everland.org/v1/37fa9972c1b1cd5fab542c7bdd4cde2f'
    ],
    vm: 'EVM'
  },
  {
    chainId: '169',
    name: 'Manta',
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://pacific-explorer.manta.network'
      },
      {
        name: 'OKX',
        url: 'https://www.oklink.com/manta'
      }
    ],
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      coinKey: 'ETH',
      decimals: 18,
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: ['https://pacific-rpc.manta.network/http', 'https://manta-pacific.drpc.org', 'https://1rpc.io/manta'],
    vm: 'EVM'
  },
  {
    chainId: '81457',
    name: 'Blast',
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://blastscan.io'
      }
    ],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      coinKey: 'ETH',
      address: '0x0000000000000000000000000000000000000000'
    },
    rpc: [
      'https://blastl2-mainnet.public.blastapi.io',
      'https://blast.blockpi.network/v1/rpc/public',
      'https://blast-rpc.publicnode.com',
      'https://rpc.blast.io',
      'https://rpc.ankr.com/blast',
      'https://blast.din.dev/rpc',
      'https://rpc.envelop.is/blast',
      'https://blast.drpc.org',
      'https://blast.gateway.tenderly.co'
    ],
    vm: 'EVM'
  },
  {
    chainId: 'SOLANA_MAIN',
    name: 'Solana',
    nativeCurrency: {
      name: 'Wrapped SOL',
      symbol: 'SOL',
      decimals: 9,
      coinKey: 'SOL',
      address: 'So11111111111111111111111111111111111111112'
    },
    rpc: ['https://odella-kzfk20-fast-mainnet.helius-rpc.com/'],
    explorers: [
      {
        name: 'Solscan',
        url: 'https://solscan.io'
      },
      {
        name: 'OKX',
        url: 'https://www.oklink.com/sol'
      }
    ],
    vm: 'SOLANAVM'
  },
  {
    chainId: '130',
    name: 'Unichain',
    nativeCurrency: {
      coinKey: 'ETH',
      address: '0x0000000000000000000000000000000000000000',
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    },
    rpc: [
      'https://mainnet.unichain.org',
      'https://unichain.drpc.org',
      'https://unichain-rpc.publicnode.com',
      'https://unichain.api.onfinality.io/public'
    ],
    explorers: [
      {
        name: 'Explore',
        url: 'https://uniscan.xyz'
      }
    ],
    vm: 'EVM'
  },
  {
    chainId: 'SUI_MAIN',
    name: 'Sui',
    nativeCurrency: {
      coinKey: 'SUI',
      name: 'SUI',
      symbol: 'SUI',
      decimals: 9,
      address: '0x2::sui::SUI'
    },
    rpc: ['https://fullnode.mainnet.sui.io:443'],
    explorers: [
      {
        name: 'Suiscan',
        url: 'https://suiscan.xyz/mainnet'
      }
    ],
    vm: 'SUIVM'
  },
  {
    chainId: '1868',
    name: 'Soneium',
    nativeCurrency: {
      coinKey: 'ETH',
      address: '0x0000000000000000000000000000000000000000',
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    },
    rpc: ['https://rpc.soneium.org', 'https://soneium.drpc.org'],
    explorers: [
      {
        name: 'Explore',
        url: 'https://soneium.blockscout.com'
      }
    ],
    vm: 'EVM'
  }
]

export const mainnetChainMap = mainnetChains.reduce(
  (acc, chain) => {
    acc[chain.chainId] = chain
    return acc
  },
  {} as Record<string, ChainDto>
)
