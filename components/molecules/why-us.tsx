import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";
import { PATH } from "@/constants/PATH";

export const WhyUs = () => {
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
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2Icon className="text-brand mt-1 size-6 shrink-0" />
              <span>{item}</span>
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
