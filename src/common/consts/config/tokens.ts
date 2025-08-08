import { MultiChainToken, TokenType } from '@/service/models/token.model'

export const testnetTokensConfig: MultiChainToken = {
  '6912115': [
    {
      id: '21dd8cff-6317-4250-8f50-fa5a8eb81116',
      name: 'Wrapped USDC',
      chainId: '6912115',
      symbol: 'USDC',
      decimals: 6,
      address: '0x09699f978c2b4fa617e3656ba16c38889f6e696d',
      isNative: false,
      coinKey: 'USDC',
      tokenType: TokenType.WRAPPED
    },
    {
      id: '841188b7-1c5b-490e-bbaa-85cf563f5cfc',
      name: 'Wrapped ETH',
      chainId: '6912115',
      symbol: 'ETH',
      decimals: 18,
      address: '0xd92355628cd263b32436cb687759d581a8700677',
      isNative: false,
      coinKey: 'ETH',
      tokenType: TokenType.WRAPPED
    },
    {
      id: '2038085d-d440-4b60-8ee0-050e006c4164',
      name: 'Bridged ETH',
      chainId: '6912115',
      symbol: 'ETH',
      decimals: 18,
      address: '0x5307abc8e43ca26c3c1d7a81457c1061bc373ee2',
      isNative: false,
      coinKey: 'ETH',
      tokenType: TokenType.BRIDGED
    },
    {
      id: 'fac69807-7958-4a9a-97bf-5b7922e3d437',
      name: 'Bridged USDT',
      chainId: '6912115',
      symbol: 'USDT',
      decimals: 6,
      address: '0x964bbbd795fabb114b2be29b66038134e9afbd6f',
      isNative: false,
      coinKey: 'USDT',
      tokenType: TokenType.BRIDGED
    },
    {
      id: 'c14ec6c0-3ffd-48e9-84e3-e0509e862c2c',
      name: 'Bridged USDC',
      chainId: '6912115',
      symbol: 'USDC',
      decimals: 6,
      address: '0xda5e11302a0b36f2bb1e36a3c4e92b36d4f3e40d',
      isNative: false,
      coinKey: 'USDC',
      tokenType: TokenType.BRIDGED
    }
  ],
  '11155111': [
    {
      id: '56179786-d6ee-4092-86f9-3bd557e45391',
      name: 'Ethereum',
      chainId: '11155111',
      symbol: 'ETH',
      decimals: 18,
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      isNative: true,
      coinKey: 'ETH',
      tokenType: TokenType.NATIVE
    },
    {
      id: '127be7f0-8a13-4e3b-94d9-3810373e1105',
      name: 'Tether USD',
      chainId: '11155111',
      symbol: 'USDT',
      decimals: 6,
      address: '0x42c7013dfe01a9a431903fe36523690cbe571b7e',
      isNative: false,
      coinKey: 'USDT',
      tokenType: TokenType.ERC20
    },
    {
      id: 'c0aeac0a-3e10-4271-a380-e547cb7ca2da',
      name: 'USD Coin',
      chainId: '11155111',
      symbol: 'USDC',
      decimals: 6,
      address: '0x1c7d4b196cb0c7b01d743fbc6116a902379c7238',
      isNative: false,
      coinKey: 'USDC',
      tokenType: TokenType.ERC20
    }
  ]
}

export const mainnetTokensConfig: MultiChainToken = {
  // Mainnet
  1: [
    {
      id: 'aec33e72-37fa-4374-a818-41f383731a77',
      name: 'Ethereum',
      chainId: '1',
      symbol: 'ETH',
      decimals: 18,
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      isNative: true,
      coinKey: 'ETH',
      tokenType: 'native'
    },
    {
      id: '5278f3c2-d65c-4709-9436-5858004fc5b0',
      name: 'Tether USD',
      chainId: '1',
      symbol: 'USDT',
      decimals: 6,
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      isNative: false,
      coinKey: 'USDT',
      tokenType: 'erc20'
    },
    {
      id: 'bd0ab5ca-8bc9-4e11-ab81-bbe792a441d2',
      name: 'USD Coin',
      chainId: '1',
      symbol: 'USDC',
      decimals: 6,
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      isNative: false,
      coinKey: 'USDC',
      tokenType: 'erc20'
    },
    {
      id: 'a60cb395-fa71-411a-a550-878b74c8e4ff',
      name: 'Bitcoin',
      chainId: '1',
      symbol: 'BTC',
      decimals: 8,
      address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      isNative: false,
      coinKey: 'BTC',
      tokenType: 'erc20'
    }
  ],
  173: [
    {
      id: '41ab42d2-5eeb-4515-a323-6bbfb5ac4822',
      name: 'Bridged ETH',
      chainId: '173',
      symbol: 'ETH',
      decimals: 18,
      address: '0x488adf2a18da00ec1c30c8dc5632ed1c9d2b42b6',
      isNative: false,
      iconUrl: null,
      coinKey: 'ETH',
      tokenType: 'bridged'
    },
    {
      id: 'dc889bb5-f279-47d3-a29a-396fa54d851f',
      name: 'Bridged USDT',
      chainId: '173',
      symbol: 'USDT',
      decimals: 6,
      address: '0x47c98f74dbc1acc4cf2e04c4a729e22379ef4373',
      isNative: false,
      iconUrl: null,
      coinKey: 'USDT',
      tokenType: 'bridged'
    },
    {
      id: 'e4287f33-bd7c-4a0b-9d80-69bb2d994e78',
      name: 'Bridged USDC',
      chainId: '173',
      symbol: 'USDC',
      decimals: 6,
      address: '0x246b7d304e4c62577022fef5befca7339f8330cb',
      isNative: false,
      iconUrl: null,
      coinKey: 'USDC',
      tokenType: 'bridged'
    },
    {
      id: 'a49a3ca6-500a-48f0-965f-90eb573ec815',
      name: 'Bridged BTC',
      chainId: '173',
      symbol: 'BTC',
      decimals: 8,
      address: '0x648f9b76d813eba3afcf22d15459a52d7e21f300',
      isNative: false,
      iconUrl: null,
      coinKey: 'BTC',
      tokenType: 'bridged'
    },
    {
      id: 'd967fccb-6faf-48a9-aa82-58ec38a09e99',
      name: 'Wrapped ETH',
      chainId: '173',
      symbol: 'ETH',
      decimals: 18,
      address: '0xb0bd57cbeff9acf419e550b4c2ed667d90471f55',
      isNative: false,
      iconUrl: null,
      coinKey: 'ETH',
      tokenType: 'wrapped'
    },
    {
      id: 'a944d5e6-6533-42fd-8b95-a8c60eba699e',
      name: 'Wrapped USDC',
      chainId: '173',
      symbol: 'USDC',
      decimals: 6,
      address: '0xaff944b96c1baea587159ec446280e468b32ee15',
      isNative: false,
      coinKey: 'USDC',
      tokenType: 'wrapped'
    },
    {
      id: '4655c769-6b1c-460c-8c6d-257e6912efc4',
      name: 'Wrapped USDT',
      chainId: '173',
      symbol: 'USDT',
      decimals: 6,
      address: '0xdc1a8a35b0baa3229b13f348ed708a2fd50b5e3a',
      isNative: false,
      iconUrl: null,
      coinKey: 'USDT',
      tokenType: 'wrapped'
    },
    {
      id: '969b2db0-9a2d-4539-85b5-5ee171a28cc5',
      name: 'Wrapped BTC',
      chainId: '173',
      symbol: 'BTC',
      decimals: 8,
      address: '0xeb42854e3ef027ac9f39248e6bc519aca9dc045d',
      isNative: false,
      iconUrl: null,
      coinKey: 'BTC',
      tokenType: 'native'
    }
  ]
}
