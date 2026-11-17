import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { PATH } from "@/constants/PATH";

export function Hero() {
  return (
    <section className="from-brand-soft to-cream bg-gradient-to-b">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="text-brand-dark mt-4 text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
            Care You Can Trust!
          </h1>
          <p className="text-muted mt-6 max-w-xl text-xl">
            Stay in the home you love, with the support you need. Home is where your memories,
            routines, and sense of belonging live. Jamie Home Care supports aging in place through
            compassionate personal care, companionship, and everyday assistance - helping you
            maintain your independence and dignity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={PATH.bookAppointment}
              className="bg-accent inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white shadow transition hover:brightness-95"
            >
              Book Appointment <ArrowRightIcon className="size-5" />
            </Link>
            <Link
              href={PATH.services}
              className="border-brand text-brand bg-white hover:brightness-95 inline-flex items-center rounded-full border-2 px-8 py-4 font-bold transition "
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/banner-1.jpeg"
            alt="A caregiver sharing a warm moment with a senior"
            fill
            priority
            loading="eager"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
}
