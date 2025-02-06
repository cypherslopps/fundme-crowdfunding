"use client";

import { FC, ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ThemeProvider } from "./ThemeProvider"
import WalletConnectProvider from "./WalletConnectProvider";

gsap.registerPlugin(useGSAP);

interface IProviders {
    children: ReactNode
}

const Providers: FC<IProviders> = ({ children }) => {
    return (
        // <WalletConnectProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        // </WalletConnectProvider>
    )
}

export default Providers;