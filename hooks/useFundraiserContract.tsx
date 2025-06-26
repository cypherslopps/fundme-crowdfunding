"use client";

import {   
    useAppKitProvider,
    useAppKitAccount
} from "@reown/appkit/react";
import { 
    Contract,
    BrowserProvider,
    formatUnits, 
    Eip1193Provider
} from "ethers";
import { useEffect, useState } from "react";
import FundraiserABI from "../abis/Fundraiser.abi.json";
import { ErrorDecoder } from 'ethers-decode-error';

const errorDecoder = ErrorDecoder.create([FundraiserABI]);

const useFundraiserContract = () => {
    const { address, isConnected } = useAppKitAccount();
    const { walletProvider } = useAppKitProvider("eip155");
    const [contract, setContract] = useState<Contract | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const initializeContract = async () => {
            try {
                if (!isConnected || !walletProvider) {
                    throw new Error("Wallet not connected");
                }

                const contractAddress = process.env.NEXT_PUBLIC_FUNDRAISER_CONTRACT_ADDRESS;
                if (!contractAddress) {
                    throw new Error("Contract address not configured");
                }

                const ethersProvider = new BrowserProvider(walletProvider as Eip1193Provider);
                const signer = await ethersProvider.getSigner();
                
                const instance = new Contract(
                    contractAddress,
                    FundraiserABI,
                    signer
                );

                setContract(instance);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to initialize contract");
            }
        };

        initializeContract();
    }, [isConnected, walletProvider]);

    useEffect(() => {
        async function readContract() {
            if (contract && isConnected) {
                try {
                    console.log("fetching")
                    const response = await contract.getAllCampaigns();
                    console.log(isConnected, contract, response);
                } catch(err) {
                    const decoded = await errorDecoder.decode(err);
                    console.error("Revert Reason:", decoded.reason);
                }
            }
        }

        readContract();
    }, [contract, isConnected])

    console.log("Fundraising Contract", contract);
}

export default useFundraiserContract;