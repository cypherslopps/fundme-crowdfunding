import * as yup from "yup";

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