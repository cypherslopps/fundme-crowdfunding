import CreateCampaignForm from '@/components/forms/CreateCampaignForm'
import React from 'react'

const CreateCampaign = () => {
  return (
    <main className="flex justify-center">
      <div className="w-[97%] space-y-6 xm:w-11/12 sm:w-4/5 slg:w-1/2 sm:space-y-8">
        <h1 className="heading">Create New Campaign</h1>
      
        {/* Form */}
        <CreateCampaignForm />
      </div>
    </main>
  )
}

export default CreateCampaign