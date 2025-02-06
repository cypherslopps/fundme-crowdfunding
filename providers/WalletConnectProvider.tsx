import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from 'react';
import { WagmiProvider } from "wagmi";
import { sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'FundMe',
  projectId: 'YOUR_PROJECT_ID',
  chains: [sepolia],
  ssr: true,
});

interface IWalletConnectProvider {
    children: ReactNode
}

const queryClient = new QueryClient();

const WalletConnectProvider: FC<IWalletConnectProvider> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default WalletConnectProvider;