import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  scrollSepolia,
  sepolia,

} from 'wagmi/chains'
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
  Chain,
} from '@rainbow-me/rainbowkit'
import * as chains from 'wagmi/chains'
import { citreaTestnet } from '@/components/CitreaTestnet'


export const config = getDefaultConfig({
  appName: 'hodlCoin',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID ?? '',
  chains: [scrollSepolia, citreaTestnet],
  ssr: true,
})
