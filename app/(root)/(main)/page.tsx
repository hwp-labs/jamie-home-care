import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  HandHeart,
  HeartHandshake,
  Home,
  Pill,
  ShieldCheck,
  Stethoscope,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { APP } from "@/constants/APP";

export const metadata: Metadata = {
  description:
    "Trained caregivers, warm companionship and round-the-clock support for seniors and individuals with disabilities in Kitchener, Ontario.",
  alternates: { canonical: "/" },
};

type Item = { title: string; text: string; icon: LucideIcon };

const TRUST: ReadonlyArray<Item> = [
  {
    title: "Round-the-clock watch",
    text: "A caregiver is always nearby, day and night.",
    icon: HeartHandshake,
  },
  {
    title: "Trained, vetted staff",
    text: "Every caregiver is certified and background-checked.",
    icon: ShieldCheck,
  },
  {
    title: "A real home setting",
    text: "Comfortable rooms, home-cooked meals, familiar routines.",
    icon: Home,
  },
];

const SERVICES: ReadonlyArray<Item> = [
  {
    title: "Personal Care",
    text: "Dignified help with bathing, dressing and daily routines.",
    icon: HandHeart,
  },
  {
    title: "Companionship",
    text: "Friendly conversation, activities and company every day.",
    icon: Users,
  },
  {
    title: "Meal Preparation",
    text: "Nutritious, home-cooked meals tailored to each person.",
    icon: Utensils,
  },
  {
    title: "Medication Reminders",
    text: "Gentle support to keep medication on schedule.",
    icon: Pill,
  },
  {
    title: "Health Monitoring",
    text: "Attentive caregivers who notice changes and report them.",
    icon: Stethoscope,
  },
  {
    title: "Care Planning",
    text: "A personal plan built around each person and family.",
    icon: ClipboardList,
  },
];

const STEPS: ReadonlyArray<{ title: string; text: string }> = [
  { title: "Get in touch", text: "Call us or book an appointment online." },
  {
    title: "Meet and plan",
    text: "We learn about your loved one and build a care plan.",
  },
  {
    title: "Settle in",
    text: "Your family member receives warm, steady care.",
  },
];

const POINTS: ReadonlyArray<string> = [
  "Certified, background-checked caregivers",
  "Support for seniors and individuals with disabilities",
  "Care plans shaped around each person",
  "Open every day of the week",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft to-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="font-bold tracking-widest text-brand uppercase">
              Home care in Kitchener
            </p>
            <h1 className="mt-4 text-4xl leading-tight font-extrabold text-brand-dark sm:text-5xl lg:text-6xl">
              Care You Can Trust!
            </h1>
            <p className="mt-6 max-w-xl text-xl text-muted">
              We provide support for seniors and individuals with disabilities.
              Trained caregivers, warm companionship, and round-the-clock
              attention, so every senior in our care feels at home, not just
              housed.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-white shadow transition hover:brightness-95"
              >
                Book Appointment <ArrowRight className="size-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border-2 border-brand px-8 py-4 font-bold text-brand transition hover:bg-brand hover:text-white"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/banner.jpg"
              alt="A caregiver sharing a warm moment with a senior"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto -mt-2 max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Care that feels like family, not a shift
          </h2>
          <p className="mt-4 text-muted">
            Dependable, dignified care for the people you love most.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TRUST.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
            >
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Icon className="size-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold tracking-widest text-brand uppercase">
              What we offer
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Our Services
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-2xl border border-black/5 bg-cream p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand text-white">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-brand hover:underline"
            >
              View all services <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-brand-soft shadow-lg">
          <Image
            src="/images/banner.jpg"
            alt="Residents enjoying time together at home"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-bold tracking-widest text-brand uppercase">
            Why families choose us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Compassion first, always
          </h2>
          <ul className="mt-8 space-y-4">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-6 shrink-0 text-brand" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-bold text-white transition hover:bg-brand-dark"
          >
            About Us <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-soft py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-brand-dark sm:text-4xl">
            How it works
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent text-2xl font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-brand-dark px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to talk about care for your loved one?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Our team is available every day from 9:00 to 17:00.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-appointment"
              className="rounded-full bg-accent px-8 py-4 font-bold text-white transition hover:brightness-95"
            >
              Book Appointment
            </Link>
            <a
              href={APP.telHref}
              className="rounded-full border-2 border-white px-8 py-4 font-bold transition hover:bg-white hover:text-brand-dark"
            >
              Call {APP.tel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
