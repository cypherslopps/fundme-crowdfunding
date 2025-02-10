import React from 'react'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/textarea'

const CreateCampaignForm = () => {
  return (
    <div className="space-y-4">
      <Input 
        type="text"
        label="Campaign Title"
        placeholder="Enter title"
      />

      <Textarea 
        label="Campaign Description"
        placeholder="Enter description"
      />
    </div>
  )
}

export default CreateCampaignForm