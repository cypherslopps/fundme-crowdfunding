import { sepolia } from "@reown/appkit/networks";
import type { AppKitNetwork } from "@reown/appkit/networks";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";


export const projectID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "";

if (!projectID) {
    throw new Error("Project ID is not defined");   
}

export const metadata = {
  name: 'fundme',
  description: 'Crownfunding DAPP',
  url: 'https://reown.com/appkit',
  icons: ['https://assets.reown.com/reown-profile-pic.png']
};

export const networks = [sepolia] as [AppKitNetwork, ...AppKitNetwork[]];

export const ethersAdapter = new EthersAdapter();