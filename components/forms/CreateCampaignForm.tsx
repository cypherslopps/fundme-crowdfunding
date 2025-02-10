"use client";

import React from 'react'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/textarea'
import ImageUploadBox from '../ImageUploadBox'

const CreateCampaignForm = () => {
  const [formData, setFormData] = React.useState({
    imageSource: ""
  });

  console.log(formData);

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

      <ImageUploadBox
        setImage={(source: string) => setFormData({ ...formData, imageSource: source })} 
      />
    </div>
  )
}

export default CreateCampaignForm