import CreateCampaignForm from '@/components/forms/CreateCampaignForm'
import React from 'react'

const CreateCampaign = () => {
  return (
    <main className="flex justify-center">
      <div className="w-1/2 space-y-8">
        <h1 className="heading">Create New Campaign</h1>
      
        {/* Form */}
        <CreateCampaignForm />
      </div>
    </main>
  )
}

export default CreateCampaign