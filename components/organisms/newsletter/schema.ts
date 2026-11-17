import { z } from "zod";

export type FormDataType = z.infer<typeof formSchema>;

export const formSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
});

export const defaultValues: FormDataType = {
  email: "",
};

export const mockDefaultValues: FormDataType = {
  email: process.env.NEXT_PUBLIC_TEST_EMAIL!,
};
