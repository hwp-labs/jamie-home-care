"use server";

import {
  APPOINTMENT_SERVICES,
  BOOKING_FOR_OPTIONS,
  TIME_SLOTS,
  getBookingWindow,
  isRealDate,
} from "./utils";
import { saveAppointment } from "./save";
import { APP } from "@/constants/APP";

type Field =
  | "name"
  | "email"
  | "phone"
  | "service"
  | "date"
  | "time"
  | "bookingFor"
  | "notes";

export type AppointmentState =
  | { status: "idle" }
  | {
      status: "success";
      reference: string;
      summary: {
        name: string;
        email: string;
        service: string;
        date: string;
        time: string;
      };
    }
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

export async function submitAppointment(
  _prev: AppointmentState,
  formData: FormData,
): Promise<AppointmentState> {
  // Honeypot: real people never fill this hidden field.
  if (read(formData, "website") !== "") {
    return {
      status: "success",
      reference: "JHC-000000",
      summary: { name: "", email: "", service: "", date: "", time: "" },
    };
  }

  const values: Record<Field, string> = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    phone: read(formData, "phone"),
    service: read(formData, "service"),
    date: read(formData, "date"),
    time: read(formData, "time"),
    bookingFor: read(formData, "bookingFor"),
    notes: read(formData, "notes"),
  };

  const window = getBookingWindow();
  const fieldErrors: Partial<Record<Field, string>> = {};

  if (values.name.length < 2) fieldErrors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email))
    fieldErrors.email = "Please enter a valid email address.";
  if (values.phone.replace(/\D/g, "").length < 7)
    fieldErrors.phone = "Please enter a valid phone number.";
  if (!APPOINTMENT_SERVICES.includes(values.service))
    fieldErrors.service = "Please choose a service.";
  if (!BOOKING_FOR_OPTIONS.some((o) => o.value === values.bookingFor)) {
    fieldErrors.bookingFor = "Please tell us who the appointment is for.";
  }
  if (!isRealDate(values.date)) {
    fieldErrors.date = "Please choose a date.";
  } else if (values.date < window.min || values.date > window.max) {
    fieldErrors.date =
      "Please choose a date within the next 90 days, starting tomorrow.";
  }
  if (!TIME_SLOTS.includes(values.time))
    fieldErrors.time = "Please choose a time.";
  if (values.notes.length > 1000)
    fieldErrors.notes = "Please keep notes under 1000 characters.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  const result = await saveAppointment({
    name: values.name,
    email: values.email,
    phone: values.phone,
    service: values.service,
    date: values.date,
    time: values.time,
    bookingFor: values.bookingFor,
    notes: values.notes || null,
  });

  if (!result.ok) {
    return {
      status: "error",
      message:
        `We could not book your appointment. Please try again or call ${APP.tel}.`,
      fieldErrors: {},
      values,
    };
  }

  return {
    status: "success",
    reference: result.reference,
    summary: {
      name: values.name,
      email: values.email,
      service: values.service,
      date: values.date,
      time: values.time,
    },
  };
}
