"use client";

import { FC, ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { createAppKit } from '@reown/appkit/react'

import { Toaster } from "@/components/ui/Sonner";
import { ethersAdapter, networks, metadata, projectID } from "@/lib/walletConfig";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
// import WalletConnectProvider from "./WalletConnectProvider";

gsap.registerPlugin(useGSAP);

createAppKit({
    adapters: [ethersAdapter],
    networks,
    metadata,
    projectId: projectID,
    themeMode: "dark",
    features: {
        analytics: true
    },
    themeVariables: {
        "--w3m-accent": "#000000"
    }
})

interface IProviders {
    children: ReactNode
}

const Providers: FC<IProviders> = ({ children }) => {
    return (
        <>
            <Toaster />   
            {children}
            <BackgroundBeams />
        </>
    )
}

export default Providers;