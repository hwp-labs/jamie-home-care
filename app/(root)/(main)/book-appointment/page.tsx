import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import { AppointmentForm } from "@/components/molecules/appointment-form/ui/form";
import { Banner } from "@/components/organisms/banner";
import { Hero } from "@/components/molecules/hero";
import { APP } from "@/constants/APP";

export const metadata: Metadata = {
  title: "Book an Appointment - Jamie Home Care",
  description:
    "Book a free consultation with Jamie Home Care in Kitchener, Ontario. Choose a date and time that suits you.",
  alternates: { canonical: "/book-appointment" },
};

// Dates depend on "today", so render on every request instead of at build time.
export const dynamic = "force-dynamic";

const STEPS: ReadonlyArray<{ title: string; text: string }> = [
  {
    title: "Choose a time",
    text: "Pick the service, date and time that suit you.",
  },
  {
    title: "We confirm",
    text: "We call or email you to confirm the appointment.",
  },
  {
    title: "We meet",
    text: "We talk through your needs and start building a care plan.",
  },
];

export default function BookAppointmentPage() {
  return (
    <>
      <Hero
        current="Book Appointment"
        title="Book an Appointment"
        description="Tell us what suits you and we will confirm shortly."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-brand-dark text-3xl font-bold">What happens next</h2>
          <ol className="mt-8 space-y-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="bg-accent flex size-12 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="text-muted mt-1">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <ul className="bg-brand-soft text-base_ mt-10 space-y-3 rounded-2xl p-6">
            <li className="flex items-center gap-3">
              <Phone className="text-brand size-5 shrink-0" aria-hidden />
              <a href={APP.telHref} className="hover:underline">
                {APP.tel}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-brand size-5 shrink-0" aria-hidden />
              {APP.address}
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-brand size-5 shrink-0" aria-hidden />
              {APP.workHours}
            </li>
          </ul>
        </div>
        <AppointmentForm />
      </section>

      <Banner
        title="Prefer to talk to someone?"
        text="Call us any day from 9:00 to 17:00 and we will book it for you."
        primary={{ label: `Call ${APP.tel}`, href: APP.telHref }}
        secondary={{ label: "Contact Us", href: "/contact-us" }}
      />
    </>
  );
}
