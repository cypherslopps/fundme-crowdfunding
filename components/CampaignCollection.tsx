import React from 'react'
import CampaignCollectionItem from './CampaignCollectionItem';

const CampaignCollection = () => {
  return (
    <section className="grid gap-y-5">
      <header className="flex items-center justify-between">
        <div>Content 1</div>
        <div>Content 2</div>
      </header>

      <div className="grid grid-cols-2 xm:grid-cols-3 slg:grid-cols-4 lg:grid-cols-5 gap-3 slg:gap-6">
        {Array.from({ length: 15 }).map((_, idx) => (
          <CampaignCollectionItem key={idx} />
        ))}
      </div>
    </section>
  )
}

export default CampaignCollection