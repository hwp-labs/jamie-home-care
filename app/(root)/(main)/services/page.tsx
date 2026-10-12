import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  CheckCircle2,
  ClipboardList,
  HandHeart,
  HeartPulse,
  Moon,
  Pill,
  Stethoscope,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { Banner } from "@/components/organisms/banner";
import { Hero } from "@/components/molecules/hero";

export const metadata: Metadata = {
  title: "Our Services - Jamie Home Care",
  description:
    "Personal care, companionship, meal preparation, medication reminders and more for seniors and individuals with disabilities in Kitchener, Ontario.",
  alternates: { canonical: "/services" },
};

type Service = {
  title: string;
  summary: string;
  includes: ReadonlyArray<string>;
  icon: LucideIcon;
};

const SERVICES: ReadonlyArray<Service> = [
  {
    title: "Personal care",
    summary: "Hands-on support with activities of daily life.",
    includes: [
      "Bathing and grooming",
      "Dressing assistance",
      "Mobility and transfers",
      "Toileting support",
    ],
    icon: HandHeart,
  },
  {
    title: "Companionship",
    summary: "Friendly company that keeps minds and spirits active.",
    includes: [
      "Conversation and games",
      "Walks and light activities",
      "Hobbies and reading",
      "Social outings",
    ],
    icon: Users,
  },
  {
    title: "Meal Prep & Feeding",
    summary: "Light cooking and feeding.",
    includes: [
      "Menu planning",
      "Special diet support",
      "Feeding assistance",
      "Kitchen clean-up",
    ],
    icon: Utensils,
  },
  {
    title: "Medication reminders",
    summary: "Gentle prompts that keep medication on schedule.",
    includes: [
      "Scheduled reminders",
      "Medication logs",
      "Refill reminders",
      "Updates to family",
    ],
    icon: Pill,
  },
  {
    title: "Health monitoring",
    summary: "Attentive caregivers who notice changes early.",
    includes: [
      "Daily wellness checks",
      "Mood and appetite notes",
      "Fall-risk awareness",
      "Reporting concerns",
    ],
    icon: Stethoscope,
  },
  {
    title: "Home Care & Cleaning",
    summary: "House keeping.",
    includes: [
      "Initial assessment",
      "Written care plan",
      "Regular reviews",
      "Plan updates as needs change",
    ],
    icon: ClipboardList,
  },
  {
    title: "Overnight care",
    summary: "A caregiver nearby through the night.",
    includes: [
      "Night-time supervision",
      "Help with restroom trips",
      "Comfort and reassurance",
      "Morning handover",
    ],
    icon: Moon,
  },
  {
    title: "Disability support",
    summary: "Transfers and more.",
    includes: [
      "Daily living skills",
      "Accessible routines",
      "Community participation",
      "Family guidance",
    ],
    icon: Accessibility,
  },
];

const WHO: ReadonlyArray<string> = [
  "Seniors who want help at home",
  "Individuals with physical disabilities",
  "Individuals with developmental disabilities",
  "People recovering after a hospital stay",
  "Families who need a break from caregiving",
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        current="Our Services"
        title="Our Services"
        description="Everyday support, tailored to each person and delivered with warmth and respect."
      />

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            How we can help
          </h2>
          <p className="mt-4 text-muted">
            Every plan is different. We combine the services below to fit your
            loved one.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map(({ title, summary, includes, icon: Icon }) => (
            <article
              key={title}
              className="flex gap-6 rounded-2xl bg-white p-8 ring-1 ring-black/5 transition hover:ring-brand"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                <Icon className="size-7" aria-hidden />
              </span>
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted">{summary}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2 hidden">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base">
                      <CheckCircle2
                        className="mt-0.5 size-5 shrink-0 text-brand"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Who we support */}
      <section className="bg-brand-soft py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <HeartPulse className="size-10 text-accent" aria-hidden />
            <h2 className="mt-4 text-3xl font-bold text-brand-dark sm:text-4xl">
              Who we support
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Care is never one-size-fits-all. If your situation is not listed,
              talk to us and we will tell you honestly whether we can help.
            </p>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center rounded-full bg-brand px-8 py-4 font-semibold text-white transition hover:bg-brand-dark"
            >
              Ask a question
            </Link>
          </div>
          <ul className="space-y-3">
            {WHO.map((w) => (
              <li
                key={w}
                className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  className="mt-1 size-6 shrink-0 text-brand"
                  aria-hidden
                />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Banner
        title="Not sure which services you need?"
        text="Book an appointment and we will help you build the right care plan."
      />
    </>
  );
}
