"use client"

import { useState } from "react";
import { useFormik } from "formik";
import { campaignFormSchema } from "@/lib/schemas";

const useDonateForm = () => {
    // const router = useRouter();
    const [isLoading] = useState(false);

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
    }
}

export default useDonateForm;