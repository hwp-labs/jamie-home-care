"use client";

import { useActionState, type ReactNode } from "react";
import { CalendarCheck } from "lucide-react";
import { submitAppointment, type AppointmentState } from "./actions";
import {
  APPOINTMENT_SERVICES,
  BOOKING_FOR_OPTIONS,
  TIME_SLOTS,
  formatTime,
} from "./utils";
import { BeforeSubmit } from "../before-submit";

type AppointmentFormProps = { minDate: string; maxDate: string };

const INITIAL_STATE: AppointmentState = { status: "idle" };

const INPUT =
  "mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-ink placeholder:text-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand aria-[invalid=true]:border-red-600";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-base text-red-700">
      {message}
    </p>
  );
}

function Field({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function formatLongDate(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function AppointmentForm({ minDate, maxDate }: AppointmentFormProps) {
  const [state, formAction, pending] = useActionState(
    submitAppointment,
    INITIAL_STATE,
  );

  if (state.status === "success") {
    const { summary, reference } = state;
    return (
      <div role="status" className="rounded-2xl bg-brand-soft p-8">
        <div className="flex items-start gap-4">
          <CalendarCheck
            className="mt-1 size-8 shrink-0 text-brand"
            aria-hidden
          />
          <div>
            <h3 className="text-2xl font-bold text-brand-dark">
              Appointment request received
            </h3>
            <p className="mt-2 text-muted">
              Thank you{summary.name ? `, ${summary.name}` : ""}. We will
              confirm your appointment by phone or email shortly.
            </p>
          </div>
        </div>

        <dl className="mt-6 grid gap-4 rounded-xl bg-white p-6 sm:grid-cols-2">
          <div>
            <dt className="text-base text-muted">Reference</dt>
            <dd className="font-semibold">{reference}</dd>
          </div>
          <div>
            <dt className="text-base text-muted">Service</dt>
            <dd className="font-semibold">{summary.service}</dd>
          </div>
          <div>
            <dt className="text-base text-muted">Date</dt>
            <dd className="font-semibold">
              {summary.date ? formatLongDate(summary.date) : ""}
            </dd>
          </div>
          <div>
            <dt className="text-base text-muted">Time</dt>
            <dd className="font-semibold">
              {summary.time ? formatTime(summary.time) : ""}
            </dd>
          </div>
        </dl>
      </div>
    );
  }

  const errors = state.status === "error" ? state.fieldErrors : {};
  const values = state.status === "error" ? state.values : undefined;

  return (
    <form action={formAction} noValidate className="space-y-6">
      {state.status === "error" ? (
        <p role="alert" className="rounded-xl bg-red-50 p-4 text-red-800">
          {state.message}
        </p>
      ) : null}

      <fieldset>
        <legend className="font-semibold">Who is the appointment for? *</legend>
        <div className="mt-3 flex flex-wrap gap-4">
          {BOOKING_FOR_OPTIONS.map((o) => (
            <label
              key={o.value}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-black/15 px-5 py-3 has-[:checked]:border-brand has-[:checked]:bg-brand-soft"
            >
              <input
                type="radio"
                name="bookingFor"
                value={o.value}
                required
                defaultChecked={(values?.bookingFor ?? "myself") === o.value}
                aria-describedby={
                  errors.bookingFor ? "bookingFor-error" : undefined
                }
                className="size-5 accent-brand"
              />
              {o.label}
            </label>
          ))}
        </div>
        <FieldError id="bookingFor-error" message={errors.bookingFor} />
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field>
          <label htmlFor="name" className="font-semibold">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={values?.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={INPUT}
          />
          <FieldError id="name-error" message={errors.name} />
        </Field>

        <Field>
          <label htmlFor="phone" className="font-semibold">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            defaultValue={values?.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={INPUT}
          />
          <FieldError id="phone-error" message={errors.phone} />
        </Field>
      </div>

      <Field>
        <label htmlFor="email" className="font-semibold">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={values?.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={INPUT}
        />
        <FieldError id="email-error" message={errors.email} />
      </Field>

      <Field>
        <label htmlFor="service" className="font-semibold">
          Service *
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue={values?.service ?? ""}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "service-error" : undefined}
          className={INPUT}
        >
          <option value="" disabled>
            Choose a service
          </option>
          {APPOINTMENT_SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <FieldError id="service-error" message={errors.service} />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field>
          <label htmlFor="date" className="font-semibold">
            Preferred date *
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            min={minDate}
            max={maxDate}
            defaultValue={values?.date}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "date-error" : undefined}
            className={INPUT}
          />
          <FieldError id="date-error" message={errors.date} />
        </Field>

        <Field>
          <label htmlFor="time" className="font-semibold">
            Preferred time *
          </label>
          <select
            id="time"
            name="time"
            required
            defaultValue={values?.time ?? ""}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? "time-error" : undefined}
            className={INPUT}
          >
            <option value="" disabled>
              Choose a time
            </option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {formatTime(t)}
              </option>
            ))}
          </select>
          <FieldError id="time-error" message={errors.time} />
        </Field>
      </div>

      <Field>
        <label htmlFor="notes" className="font-semibold">
          Anything we should know? (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          defaultValue={values?.notes}
          aria-invalid={Boolean(errors.notes)}
          aria-describedby={errors.notes ? "notes-error" : undefined}
          className={INPUT}
        />
        <FieldError id="notes-error" message={errors.notes} />
      </Field>

      {/* Honeypot: hidden from people and screen readers */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <BeforeSubmit />

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-semibold text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Booking..." : "Book appointment"}
      </button>
    </form>
  );
}
