import { z } from "zod";

export type FormDataType = z.infer<typeof formSchema>;

export const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required.").max(50),
  lastName: z.string().trim().min(1, "Last name is required.").max(50),
  email: z.email("Enter a valid email address."),
  tel: z
    .string()
    .trim()
    .regex(/^\+?[\d\s().-]{10,18}$/, "Enter a valid phone number.")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().max(1000, "Message is too long."),
});

export const defaultValues: FormDataType = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export const mockDefaultValues: FormDataType = {
  firstName: "John",
  lastName: "Smith",
  email: process.env.NEXT_PUBLIC_TEST_EMAIL!,
  tel: process.env.NEXT_PUBLIC_TEST_TEL!,
  message: "Care Giver must come with 450g of pepper flavored plantain chips from Jogucy Foods!",
};
