"use client"

// import { useRouter } from "next/navigation"
import { useState } from "react";
import { useFormik } from "formik";
import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { campaignFormSchema } from "@/lib/schemas";

const useCampaignForm = () => {
    // const router = useRouter();
    const [isLoading] = useState(false);
    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 20),
    });
    const [imageSource, setImageSource] = useState("");

    const formik = useFormik({
        initialValues: {
          title: "",
          description: "",
          targetAmount: 0
        },
        validationSchema: campaignFormSchema,
        onSubmit: (values) => {
          console.log("submitting", values);
        }
    });
    const isValid = Object.values(formik.errors).every(val => val === "");

    return {
      formik,
      isLoading,
      isValid,
      date,
      setDate,
      imageSource,
      setImageSource
    }
}

export default useCampaignForm;