import { z } from "zod";

type ValidationResult<T extends z.ZodType> =
  | { success: true; data: z.infer<T>; errors: Record<string, never> }
  | { success: false; data: undefined; errors: Record<string, string> };

const validateFormSchema = <T extends z.ZodType>(
  schema: T,
  formData: unknown,
): ValidationResult<T> => {
  const result = schema.safeParse(formData);

  if (result.success) {
    return { success: true, data: result.data, errors: {} };
  }

  const errors: Record<string, string> = {};

  for (const issue of result.error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!errors[key]) errors[key] = issue.message;
  }

  return { success: false, data: undefined, errors };
};

export const zodUtils = { validateFormSchema };
