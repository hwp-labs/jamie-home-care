import { APP } from "@/constants/APP";
import type { Metadata } from "next";
import {
  Briefcase,
  CalendarClock,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  SmilePlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Banner } from "@/components/organisms/banner";
import { Hero } from "@/components/molecules/hero";

export const metadata: Metadata = {
  title: "Careers - Jamie Home Care",
  description:
    "Join our caring team in Kitchener, Ontario. See open caregiver roles at Jamie Home Care and how to apply.",
  alternates: { canonical: "/careers" },
};

const APPLY_EMAIL = APP.email;

type Perk = { title: string; text: string; icon: LucideIcon };

const PERKS: ReadonlyArray<Perk> = [
  {
    title: "Meaningful work",
    text: "Make a real difference in someone's day, every day.",
    icon: HeartHandshake,
  },
  {
    title: "Training and growth",
    text: "Learn new skills and grow your career in care.",
    icon: GraduationCap,
  },
  {
    title: "Flexible shifts",
    text: "Day, evening and overnight options to suit your life.",
    icon: CalendarClock,
  },
  {
    title: "A supportive team",
    text: "You are never on your own. Colleagues and managers have your back.",
    icon: Users,
  },
];

type Role = {
  title: string;
  type: string;
  location: string;
  summary: string;
  requirements: ReadonlyArray<string>;
};

const ROLES: ReadonlyArray<Role> = [
  {
    title: "Personal Support Worker",
    type: "Full-time / Part-time",
    location: "Kitchener, ON",
    summary:
      "Provide hands-on personal care and daily living support with dignity and respect.",
    requirements: [
      "PSW certificate or equivalent",
      "Experience with seniors or disabilities",
      "Clear police check",
    ],
  },
  {
    title: "Companion Caregiver",
    type: "Part-time",
    location: "Kitchener, ON",
    summary:
      "Offer friendly company, light meal preparation and gentle activities.",
    requirements: [
      "Warm, patient personality",
      "Reliable and punctual",
      "Clear police check",
    ],
  },
  {
    title: "Overnight Caregiver",
    type: "Overnight shifts",
    location: "Kitchener, ON",
    summary:
      "Provide calm, attentive supervision and comfort through the night.",
    requirements: [
      "Previous caregiving experience",
      "Comfortable working overnight",
      "Clear police check",
    ],
  },
];

const STEPS: ReadonlyArray<{ title: string; text: string }> = [
  {
    title: "Apply",
    text: "Email us your resume and the role you are interested in.",
  },
  {
    title: "Chat",
    text: "We call you for a friendly conversation about your experience.",
  },
  { title: "Check", text: "We complete reference and police checks." },
  { title: "Start", text: "Meet the team, get oriented and begin caring." },
];

function applyHref(role?: string): string {
  const subject = encodeURIComponent(
    role ? `Application: ${role}` : "Career enquiry",
  );
  return `mailto:${APPLY_EMAIL}?subject=${subject}`;
}

export default function CareersPage() {
  return (
    <>
      <Hero
        current="Careers"
        title="Careers"
        description="Join a team that treats care as a calling, not just a shift."
      />

      {/* Why join */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Why work with us
          </h2>
          <p className="mt-4 text-muted">
            We look after our caregivers so they can look after our clients.
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map(({ title, text, icon: Icon }) => (
            <article key={title} className="border-l-4 border-brand pl-6">
              <Icon className="size-9 text-brand" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
              Open positions
            </h2>
            <p className="mt-4 text-muted">
              Do not see a perfect fit? Send us your details anyway and we will
              keep them on file.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {ROLES.map((role) => (
              <article
                key={role.title}
                className="bg-surface flex flex-col gap-6 rounded-2xl p-8 ring-1 ring-black/5 transition hover:ring-brand lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold">{role.title}</h3>
                  <p className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-muted">
                    <span className="inline-flex items-center gap-2">
                      <Briefcase className="size-4" aria-hidden /> {role.type}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="size-4" aria-hidden /> {role.location}
                    </span>
                  </p>
                  <p className="mt-3">{role.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {role.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-base">
                        <CheckCircle2
                          className="mt-0.5 size-5 shrink-0 text-brand"
                          aria-hidden
                        />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={applyHref(role.title)}
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-8 py-4 font-semibold text-white transition hover:brightness-95"
                >
                  Apply for this role
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="bg-brand-soft py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3">
            <SmilePlus className="size-9 text-accent" aria-hidden />
            <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
              How hiring works
            </h2>
          </div>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Banner
        title="Ready to join our team?"
        text={`Send your resume to ${APPLY_EMAIL} and tell us which role interests you.`}
        primary={{ label: "Email your resume", href: applyHref() }}
        secondary={{ label: "Call us", href: APP.telHref }}
      />
    </>
  );
}
