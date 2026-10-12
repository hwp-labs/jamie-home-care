import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  HandHeart,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Banner } from "@/components/organisms/banner";
import { Hero } from "@/components/molecules/hero";

export const metadata: Metadata = {
  title: "About Us - Jamie Home Care",
  description:
    "Learn who we are, what we believe in, and how we care for seniors and individuals with disabilities in Kitchener, Ontario.",
  alternates: { canonical: "/about" },
};

type Value = { title: string; text: string; icon: LucideIcon };

const VALUES: ReadonlyArray<Value> = [
  {
    title: "Dignity",
    text: "Every person is treated with respect and keeps a voice in their own care.",
    icon: Scale,
  },
  {
    title: "Compassion",
    text: "We listen first, then act with patience and warmth.",
    icon: HandHeart,
  },
  {
    title: "Safety",
    text: "Trained, vetted caregivers and clear routines keep everyone safe.",
    icon: ShieldCheck,
  },
  {
    title: "Family",
    text: "We keep families informed and involved at every step.",
    icon: HeartHandshake,
  },
];

const COMMITMENTS: ReadonlyArray<string> = [
  "A personal care plan for every person",
  "Caregivers who are certified and background-checked",
  "Regular updates to family members",
  "A clean, comfortable, home-like setting",
  "Care that adapts as needs change",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        current="About Us"
        title="About Jamie Home Care"
        description="Support for seniors and individuals with disabilities, delivered with warmth and respect."
      />

      {/* Story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-brand-soft shadow-lg">
          <Image
            src="/images/banner.jpg"
            alt="Caregiver and senior sharing a conversation"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            loading="eager"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Care that feels like family, not a shift
          </h2>
          <div className="mt-6 space-y-4 text-muted">
            <p>
              Jamie Home Care provides support for seniors and individuals with
              disabilities in Kitchener, Ontario. We believe everyone deserves
              to feel at home, not just housed.
            </p>
            <p>
              Our caregivers bring training, patience and genuine companionship
              to each day, so families can rest knowing their loved one is in
              good hands.
            </p>
            <p>
              Placeholder copy: the client will supply the final story, founding
              year and team details.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center rounded-full bg-brand px-8 py-4 font-semibold text-white transition hover:bg-brand-dark"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="bg-brand-soft py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-10 shadow-sm">
            <Sparkles className="size-10 text-accent" aria-hidden />
            <h2 className="mt-5 text-2xl font-bold text-brand-dark">
              Our mission
            </h2>
            <p className="mt-3 text-muted">
              To give seniors and individuals with disabilities safe, dignified
              and compassionate care in a place that feels like home.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-10 shadow-sm">
            <Eye className="size-10 text-accent" aria-hidden />
            <h2 className="mt-5 text-2xl font-bold text-brand-dark">
              Our vision
            </h2>
            <p className="mt-3 text-muted">
              A community where every person can age and live with comfort,
              independence and connection.
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            What we stand for
          </h2>
          <p className="mt-4 text-muted">
            The principles behind every visit and every decision.
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ title, text, icon: Icon }) => (
            <article key={title} className="border-l-4 border-brand pl-6">
              <Icon className="size-9 text-brand" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
              Our commitment to you
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              When you choose Jamie Home Care, this is what you can count on.
            </p>
          </div>
          <ul className="space-y-4">
            {COMMITMENTS.map((c, i) => (
              <li
                key={c}
                className="bg-surface flex items-start gap-4 rounded-xl p-5 ring-1 ring-black/5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Banner />
    </>
  );
}
