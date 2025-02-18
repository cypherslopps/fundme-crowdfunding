import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/Dialog"
import { Button, buttonVariants } from './ui/Button';
import CampaignDonateForm from './forms/CampaignDonateForm';
import { cn } from '@/lib/utils';
  

const DonateModal = () => {
  return (
    <Dialog>
        <DialogTrigger className={cn(buttonVariants({ variant: "default", size: "default" }), "text-base font-semibold px-8")}>
            $ Donate
        </DialogTrigger>
        
        {/* Dialog Content */}
        <DialogContent>
            {/* Donate Form */}
            <CampaignDonateForm />
        </DialogContent>
    </Dialog>
  )
}

export default DonateModal