import type { Metadata } from "next";
import { WhatHappensNext } from "@/components/molecules/what-happens-next";
import { AppointmentForm } from "@/components/molecules/appointment-form";
import { CallToAction } from "@/components/organisms/call-to-action";
import { TitleCard } from "@/components/organisms/title-card";

export const metadata: Metadata = {
  title: "Book Appointment",
  alternates: { canonical: "/book-appointment" },
};

export default function BookAppointmentPage() {
  return (
    <>
      <TitleCard
        current="Book Appointment"
        title="Book an Appointment"
        description="Tell us what suits you and we will confirm shortly."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-5">
        <WhatHappensNext />
        <AppointmentForm />
      </section>
      <CallToAction />
    </>
  );
}
