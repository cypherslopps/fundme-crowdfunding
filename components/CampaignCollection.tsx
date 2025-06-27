import React from 'react'
import CampaignCollectionItem from './CampaignCollectionItem';
import useFundraiserContract from '@/hooks/useFundraiserContract';

const CampaignCollection = () => {
  useFundraiserContract();
  
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 slg:grid-cols-4 gap-4 lg:gap-5">
      {Array.from({ length: 15 }).map((_, idx) => (
        <CampaignCollectionItem key={idx} />
      ))}
    </section>
  )
}

export default CampaignCollection;