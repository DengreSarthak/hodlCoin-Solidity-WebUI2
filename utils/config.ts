import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { Chain } from '@rainbow-me/rainbowkit'
import { scrollSepolia } from 'wagmi/chains'
import { citreaTestnet } from '@/components/CitreaTestnet'

// export const config = getDefaultConfig({
//   appName: 'hodlCoin',
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID ?? '',
//   chains: [scrollSepolia, citreaTestnet],
//   ssr: true,
// })

export const config = getDefaultConfig({
  appName: 'hodlCoin',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID ?? '',
  chains: [scrollSepolia, citreaTestnet] as Chain[],
  ssr: true,
})
