import type { Metadata } from "next";
import { Jumbotron } from "@/components/organisms/jumbotron";
import { GetInTouch } from "@/components/organisms/get-in-touch";
import { ContactForm } from "@/components/molecules/contact-form";
import { PATH } from "@/constants/PATH";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: { canonical: PATH.contactUs },
};

export default function ContactUsPage() {
  return (
    <>
      <Jumbotron
        current="Contact Us"
        title="Contact Us"
        description="Questions about care for your loved one? We are here to help."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-5">
        <GetInTouch />
        <ContactForm />
      </section>
    </>
  );
}
