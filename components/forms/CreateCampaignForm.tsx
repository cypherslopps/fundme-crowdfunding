"use client";

import React from 'react'

import { Input } from '../ui/Input'
import { Textarea } from '../ui/textarea'
import ImageUploadBox from '../ImageUploadBox'
import { Button } from '../ui/Button';
import DateRangePicker from '../DateRangePicker';
import useCampaignForm from '@/hooks/useCampaignForm';

const CreateCampaignForm = () => {
  const { 
    formik, 
    isLoading, 
    isValid,
    imageSource,
    setImageSource,
    date,
    setDate
  } = useCampaignForm();
  

  return (
    <form 
      onSubmit={formik.handleSubmit}
      className="space-y-5 pb-6 msm:pb-8 md:pb-12"
    >
      <Input 
        type="text"
        name="title"
        label="Campaign Title"
        placeholder="Enter title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.title && formik.errors.title ? formik.errors.title : ""}
      />

      <Textarea 
        name="description"
        label="Campaign Description"
        placeholder="Enter description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && formik.errors.description ? formik.errors.description : ""}
      />

      <ImageUploadBox
        label="Campaign Image"
        setImage={(source: string) => setImageSource(source)} 
      />

      <DateRangePicker 
        label="Campaign Duration"
        date={date}
        setDate={setDate}
      />

      <Input 
        type="number"
        name="targetAmount"
        label="Target Amount (ETH)"
        placeholder="Desired target"
        value={formik.values.targetAmount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.targetAmount && formik.errors.targetAmount ? formik.errors.targetAmount : ""}
      />

      <Button
        type="submit"
        isLoading={isLoading}
        disabled={!isValid || isLoading}
        width="full"
      >
        Submit
      </Button>
    </form>
  )
}

export default CreateCampaignForm