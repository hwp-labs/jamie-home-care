import { z } from "zod";
import { CUR_DATE, CUR_TIME } from "@/constants";
import { OptionType } from "@/types";

export const createFormSchema = (
  bookedForOptions: OptionType[],
  bookedServiceOptions: OptionType[],
) => {
  const bookedForValues = new Set(bookedForOptions.map(({ value }) => value));
  const bookedServiceValues = new Set(bookedServiceOptions.map(({ value }) => value));

  return z.object({
    bookedFor: z
      .string()
      .regex(/^\d+$/, "Select who the appointment is for.")
      .refine((v) => bookedForValues.has(v), "Select who the appointment is for."),
    firstName: z.string().trim().min(1, "First name is required.").max(50),
    lastName: z.string().trim().min(1, "Last name is required.").max(50),
    email: z.string().trim().email("Enter a valid email address."),
    tel: z
      .string()
      .trim()
      .regex(/^\+?[\d\s().-]{10,18}$/, "Enter a valid phone number.")
      .optional()
      .or(z.literal("")),
    bookedService: z
      .string()
      .regex(/^\d+$/, "Choose a valid service.")
      .refine((v) => bookedServiceValues.has(v), "Choose a valid service."),
    bookedDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a valid date.")
      .refine((d) => d >= new Date().toISOString().slice(0, 10), "Date cannot be in the past."),
    bookedTime: z.string().min(1, "Choose a time."),
    notes: z.string().trim().max(1000, "Notes are too long.").optional(),
    _bookedForText: z.string().trim().optional(),
    _bookedServiceText: z.string().trim().optional(),
    _id: z.number().optional(),
  });
};

export type FormDataType = z.infer<ReturnType<typeof createFormSchema>>;

export const defaultValues: FormDataType = {
  bookedFor: "",
  firstName: "",
  lastName: "",
  email: "",
  bookedService: "",
  bookedDate: "",
  bookedTime: "",
};

export const mockDefaultValues: FormDataType = {
  bookedFor: "1",
  firstName: "John",
  lastName: "Smith",
  email: process.env.NEXT_PUBLIC_TEST_EMAIL!,
  tel: process.env.NEXT_PUBLIC_TEST_TEL!,
  bookedService: "6",
  bookedDate: CUR_DATE,
  bookedTime: CUR_TIME,
  notes: "Care Giver must come with 450g of pepper flavored plantain chips from Jogucy Foods!",
};

export const mockBookedForOptions = [
  { value: "1", label: "Self" },
  { value: "2", label: "Family member or friend" },
];

export const mockBookedServiceOptions = [
  { label: "Personal Care", value: "1" },
  { label: "Companionship", value: "2" },
  { label: "Meal Preparation", value: "3" },
  { label: "Medication Reminders", value: "4" },
  { label: "Health Monitoring", value: "5" },
  { label: "Overnight Care", value: "6" },
  { label: "Disability Support", value: "7" },
  { label: "Care Planning", value: "8" },
  { label: "Other", value: "9" },
];
