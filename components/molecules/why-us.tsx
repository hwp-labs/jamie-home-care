import Link from "next/link";
import Image from "next/image";
import {
  AccessibilityIcon,
  ArrowRightIcon,
  CalendarClockIcon,
  CheckCircle2Icon,
  HandHeartIcon,
  HeartPulseIcon,
  UserCheckIcon,
  UsersIcon,
} from "lucide-react";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";

export const HomeWhyUs = () => {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
      <div className="bg-brand-soft aspect-square_ relative h-[480px] overflow-hidden rounded-3xl shadow-lg">
        <Image
          src="/images/banner-2.jpeg"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-right"
        />
      </div>
      <div>
        <p className="text-brand font-bold tracking-widest uppercase">Why families choose us</p>
        <h2 className="text-brand-dark mt-3 text-3xl font-extrabold sm:text-4xl">
          Compassion first, always
        </h2>
        <ul className="mt-8 space-y-4">
          {[
            "Certified, background-checked caregivers",
            "Support for seniors and individuals with disabilities",
            "Care plans shaped around each person",
            "Open every day of the week",
          ].map((p) => (
            <li key={p} className="flex items-start gap-3">
              <CheckCircle2Icon className="text-brand mt-1 size-6 shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <Link
          href={PATH.about}
          className="bg-brand hover:bg-brand-dark mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white transition"
        >
          About Us <ArrowRightIcon className="size-5" />
        </Link>
      </div>
    </section>
  );
};

export const AboutWhyUs = () => (
  <section className="mx-auto max-w-7xl px-6 py-16">
    <div className="max-w-2xl">
      <h2 className="text-brand-dark text-3xl font-bold sm:text-4xl">Why {APP.name}?</h2>
    </div>
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {[
        {
          title: "Guilt-Free Relief for Families",
          text: "We step in as your trusted partner so you can return to being a daughter, son, or family member instead of an exhausted full-time caregiver.",
          icon: UsersIcon,
        },
        {
          title: "Hands-On Expertise & Compassionate Care",
          text: "Experienced care professionals who understand daily hands-on care. We treat every client with compassionate and respect.",
          icon: HandHeartIcon,
        },
        {
          title: "Personalized Care",
          text: "Support is tailored to the client’s routines, abilities and personal goals.",
          icon: HeartPulseIcon,
        },
        {
          title: "Dignity and Independence",
          text: "We encourage clients to do what they can while providing assistance where needed.",
          icon: AccessibilityIcon,
        },
        {
          title: "Consistent & Reliable Caregivers",
          text: "Familiar caregivers help clients feel comfortable, secure and heard.",
          icon: UserCheckIcon,
        },
        {
          title: "Flexible Support Options",
          text: "Our services can be adjusted as the client’s needs, routines or circumstances change.",
          icon: CalendarClockIcon,
        },
      ].map(({ title, text, icon: Icon }) => (
        <article
          key={title}
          className="flex gap-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
        >
          <span className="bg-brand-soft flex size-14 shrink-0 items-center justify-center rounded-full">
            <Icon className="text-brand size-7" aria-hidden />
          </span>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted mt-2">{text}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
