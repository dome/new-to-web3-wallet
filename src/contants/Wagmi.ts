import type { Transport } from 'viem'
import { createConfig, http } from 'wagmi'
import {
  mainnet,
  sepolia,
  polygon,
  polygonMumbai,
  optimism,
  optimismGoerli,
  arbitrum,
  arbitrumGoerli,
  zkSync,
  zkSyncSepoliaTestnet,
  linea,
  lineaTestnet,
  base,
  baseGoerli,
  bsc,
  bscTestnet,
  jbc
} from 'wagmi/chains'
import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import {
  argentWallet,
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets'

const ProjectId = '1'

if (!ProjectId) {
  // throw new Error('WalletConnect project ID is not defined. Please check your environment variables.')
}

const Connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet, rainbowWallet, ledgerWallet, rabbyWallet, coinbaseWallet, argentWallet, safeWallet]
    }
  ],
  { appName: 'New-To-Web3-Wallet', projectId: ProjectId }
)

// Fix missing icons
const customZkSyncSepoliaTestnet = { ...zkSyncSepoliaTestnet, iconUrl: '/assets/chains/zksync.svg' }
const customLinea = { ...linea, iconUrl: '/assets/chains/linea.svg' }
const customLineaTestnet = { ...lineaTestnet, iconUrl: '/assets/chains/linea.svg' }

const lavarock: Chain = {
  id: 8899001,
  name: 'Lavarock Chain',
  network: 'lavarock',
  testnet: false,
  nativeCurrency: {
    name: 'LAVA',
    symbol: 'LVR',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.lavarock.xyz']
    },
    public: {
      http: ['https://rpc.lavarock.xyz']
    }
  },
  iconUrl: 'https://exp.lavarock.xyz/assets/configs/network_icon.png'
}
export const Transports: Record<number, Transport> = {
  [mainnet.id]: http(),
  [lavarock.id]: http(),
  [sepolia.id]: http(),
  [polygon.id]: http(),
  [polygonMumbai.id]: http(),
  [optimism.id]: http(),
  [optimismGoerli.id]: http(),
  [arbitrum.id]: http(),
  [arbitrumGoerli.id]: http(),
  [zkSync.id]: http(),
  [zkSyncSepoliaTestnet.id]: http(),
  [linea.id]: http(),
  [lineaTestnet.id]: http(),
  [base.id]: http(),
  [baseGoerli.id]: http(),
  [bsc.id]: http(),
  [bscTestnet.id]: http(),
  [jbc.id]: http()
}
export const WagmiConfig = createConfig({
  chains: [
    mainnet,
    lavarock,
    sepolia,
    polygon,
    polygonMumbai,
    optimism,
    optimismGoerli,
    arbitrum,
    arbitrumGoerli,
    customLinea,
    customLineaTestnet,
    zkSync,
    customZkSyncSepoliaTestnet,
    base,
    baseGoerli,
    bsc,
    jbc
  ],
  connectors: Connectors,
  transports: Transports,
  ssr: true
})
