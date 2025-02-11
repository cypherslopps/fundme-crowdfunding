import { ReactNode, FC } from "react";
import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import { AppKitNetwork, sepolia } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

const queryClient = new QueryClient();
const projectID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "";

const metadata = {
  name: 'fundme',
  description: 'Crownfunding DAPP',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks: [sepolia],
  projectId: projectID,
  ssr: true
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: [sepolia],
  projectId: projectID,
  metadata,
  features: {
    analytics: true
  }
})

interface IWalletConnectProvider {
    children: ReactNode
}

const WalletConnectProvider: FC<IWalletConnectProvider> = ({ children }) => {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default WalletConnectProvider;