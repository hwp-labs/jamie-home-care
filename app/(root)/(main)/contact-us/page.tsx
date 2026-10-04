import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/molecules/contact-form";
import { Hero } from "@/components/molecules/hero";

export const metadata: Metadata = {
  title: "Contact Us - Jamie Home Care",
  description:
    "Get in touch with Jamie Home Care in Kitchener, Ontario. Call, email or send us a message.",
};

const ADDRESS = "1289 Queens Boulevard, Kitchener, Ontario";
const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

type Detail = { label: string; value: string; href?: string; icon: LucideIcon };

const DETAILS: ReadonlyArray<Detail> = [
  { label: "Phone", value: "+1 (548) 577-4216", href: "tel:+15485774216", icon: Phone },
  { label: "Email", value: "info@jamiehomecare.ca", href: "mailto:info@jamiehomecare.ca", icon: Mail },
  { label: "Address", value: ADDRESS, href: DIRECTIONS_URL, icon: MapPin },
  { label: "Hours", value: "Monday - Sunday, 9:00 - 17:00", icon: Clock },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        current="Contact Us"
        title="Contact Us"
        description="Questions about care for your loved one? We are here to help."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-brand-dark">Get in touch</h2>
          <p className="mt-4 text-muted">
            Call, email or send us a message. We reply as soon as we can.
          </p>

          <ul className="mt-8 space-y-4">
            {DETAILS.map(({ label, value, href, icon: Icon }) => (
              <li key={label} className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                  <Icon className="size-6" aria-hidden />
                </span>
                <div>
                  <p className="text-base font-semibold">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-muted underline-offset-4 hover:text-brand hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-muted">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10 lg:col-span-3">
          <h2 className="text-2xl font-bold text-brand-dark">Send us a message</h2>
          <p className="mt-2 text-muted">Fields marked with * are required.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}