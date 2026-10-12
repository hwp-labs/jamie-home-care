import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  HandHeart,
  HeartHandshake,
  HeartPulse,
  MapPin,
  Scale,
  ShieldCheck,
  Smile,
  Sparkles,
  Users,
  Accessibility,
UserCheck,
CalendarClock,
  type LucideIcon,
} from "lucide-react";
import { Hero } from "@/components/molecules/hero";
import { Banner } from "@/components/organisms/banner";
import { IMAGE } from "@/constants/IMAGE";

export const metadata: Metadata = {
  title: "About Us - Jamie Home Care",
  description:
    "Compassionate, individualized home care for seniors and individuals with disabilities in Kitchener, Waterloo, Cambridge, and surrounding communities.",
  alternates: { canonical: "/about" },
};

type Item = { title: string; text: string; icon: LucideIcon };

const WHY_CHOOSE: ReadonlyArray<Item> = [
  {
    title: "Guilt-Free Relief for Families",
    text: "We step in as your trusted partner so you can return to being a daughter, son, or family member instead of an exhausted full-time caregiver.",
    icon: Users,
  },
  {
    title: "Hands-On Expertise & Compassionate Care",
    text: "Experienced care professionals who understand daily hands-on care. We treat every client with compassionate and respect.",
    icon: HandHeart,
  },
  {
    title: "Personalized Care",
    text: "Support is tailored to the client’s routines, abilities and personal goals.",
    icon: HeartPulse,
  },
  {
    title: "Dignity and Independence",
    text: "We encourage clients to do what they can while providing assistance where needed.",
    icon: Accessibility,
  },
  {
    title: "Consistent & Reliable Caregivers",
    text: "Familiar caregivers help clients feel comfortable, secure and heard.",
    icon: UserCheck,
  },
  {
    title: "Flexible Support Options",
    text: "Our services can be adjusted as the client’s needs, routines or circumstances change.",
    icon: CalendarClock,
  },
];

const VALUES: ReadonlyArray<Item> = [
  {
    title: "Trust",
    text: "We show up on time, communicate openly, and uphold the highest standards of professional safety.",
    icon: ShieldCheck,
  },
  {
    title: "Dignity",
    text: "We honor every client's personal preferences, routines, and autonomy during every task.",
    icon: Scale,
  },
  {
    title: "Compassion",
    text: "We don't just complete tasks; we listen, build relationships, and bring warmth into every home.",
    icon: HeartHandshake,
  },
  {
    title: "Peace of Mind",
    text: "We lift the weight off family members' shoulders so they can rest knowing their loved one is in safe hands.",
    icon: Smile,
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        current="About Us"
        title="Welcome to Jamie Home Care"
        description="Care You Can Trust!"
      />

      {/* Welcome */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-brand-soft shadow-lg">
          {IMAGE.AboutUs}
        </div>
        <div>
          {/* <p className="font-semibold uppercase tracking-wide text-accent">
            Welcome to Jamie Home Care
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">
            Care You Can Trust
          </h2> */}
          <p className="text-muted_ mt-6 text-2xl leading-[40px]">
            At Jamie Home Care, we believe that aging and receiving daily
            support should never mean giving up independence, comfort, or
            dignity. Based in the heart of the Kitchener-Waterloo-Cambridge
            (KWC) region, we provide compassionate, individualized home care
            services designed to support seniors and individuals with
            disabilities right where they feel safest: in the comfort of their
            own homes.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center rounded-full bg-brand px-8 py-4 font-semibold text-white transition hover:bg-brand-dark"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-brand-soft py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Sparkles className="mx-auto size-10 text-accent" aria-hidden />
          <h2 className="mt-5 text-3xl font-bold text-brand-dark sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-muted">
            To empower seniors and individuals with disabilities to live rich,
            dignified, and independent lives at home, while giving families and
            primary caregivers complete peace of mind, free from stress,
            burnout, and guilt.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Why Choose Jamie Home Care?
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {WHY_CHOOSE.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="flex gap-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                <Icon className="size-7 text-brand" aria-hidden />
              </span>
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Core values */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Our Core Values
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ title, text, icon: Icon }) => (
              <article key={title} className="border-l-4 border-brand pl-6">
                <Icon className="size-9 text-brand" aria-hidden />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Banner />
    </>
  );
}
