import React from 'react'
import { useAccount } from 'wagmi'
import EmptySlate from './EmptySlate';
import CampaignCollection from './CampaignCollection';

const UserCampaigns = () => {
    const { isConnected } = useAccount();
    
    if (!isConnected) {
        return (
            <EmptySlate />
        )
    }

    return (
        <CampaignCollection />
    )
}

export default UserCampaigns;