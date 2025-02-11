"use client"

// import { useRouter } from "next/navigation"
import { useState } from "react";
import { useFormik } from "formik";
import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import * as yup from "yup";

// Schema
export const campaignFormSchema = yup.object().shape({
    title: yup
      .string()
      .min(5, "Title must be minimum of 5 characters")
      .required("This field has to be filled."),
    description: yup
      .string()
      .min(50, "Description must be minimum of 50 characters")
      .required("This field has to be filled.")
      .trim(),
    targetAmount: yup
        .number()
        .min(10, 'Amount must be at least 100')
        .required('Target Amount is required')
  });

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