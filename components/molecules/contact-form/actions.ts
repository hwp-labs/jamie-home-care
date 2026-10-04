"use server";

import { saveContact } from "./save";

type Field = "name" | "email" | "phone" | "message";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors: Partial<Record<Field, string>>;
      values: Record<Field, string>;
    };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function read(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real people never fill this hidden field.
  if (read(formData, "website") !== "") return { status: "success" };

  const values: Record<Field, string> = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    phone: read(formData, "phone"),
    message: read(formData, "message"),
  };

  const fieldErrors: Partial<Record<Field, string>> = {};
  if (values.name.length < 2) fieldErrors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email)) fieldErrors.email = "Please enter a valid email address.";
  if (values.phone && values.phone.replace(/\D/g, "").length < 7) {
    fieldErrors.phone = "Please enter a valid phone number or leave it blank.";
  }
  if (values.message.length < 10) fieldErrors.message = "Please write at least 10 characters.";
  if (values.message.length > 2000) fieldErrors.message = "Please keep your message under 2000 characters.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", fieldErrors, values };
  }

  const result = await saveContact({
    name: values.name,
    email: values.email,
    phone: values.phone || null,
    message: values.message,
  });

  if (!result.ok) {
    return {
      status: "error",
      message: "We could not send your message. Please try again or call +1 (548) 577-4216.",
      fieldErrors: {},
      values,
    };
  }

  return { status: "success" };
}