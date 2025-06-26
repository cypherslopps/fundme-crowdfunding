"use client";

import React from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import useDonateForm from '@/hooks/useDonateForm'

const CampaignDonateForm = () => {
    const { 
        formik, 
        isLoading, 
        isValid
      } = useDonateForm();
    
      return (
        <form
            onSubmit={formik.handleSubmit}
            className="grid gap-y-4"
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
                size="lg"
                width="full"
                className="rounded-full mt-2"
                disabled={!isValid || isLoading}
            >
                Donate
            </Button>
        </form>
    )
}

export default CampaignDonateForm