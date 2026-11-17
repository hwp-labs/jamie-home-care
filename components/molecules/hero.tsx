import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";

export function Hero() {}
export function HomeHero() {
  return (
    <section className="from-brand-soft to-cream bg-gradient-to-b">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="text-brand-dark mt-4 text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
            {APP.title}
          </h1>
          <p className="text-muted mt-6 max-w-xl text-xl">
            Stay in the home you love, with the support you need. Home is where your memories,
            routines, and sense of belonging live. {APP.name} supports aging in place through
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
              className="border-brand text-brand inline-flex items-center rounded-full border-2 bg-white px-8 py-4 font-bold transition hover:brightness-95"
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

export function AboutHero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
      <div className="bg-brand-soft relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg">
        <Image
          src="/images/banner-3.jpg"
          alt="Caregiver and senior sharing a conversation"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-muted_ mt-6 text-2xl leading-[40px]">
          At {APP.name}, we believe that aging and receiving daily support should never mean giving
          up independence, comfort, or dignity. Based in the heart of the
          Kitchener-Waterloo-Cambridge (KWC) region, we provide compassionate, individualized home
          care services designed to support seniors and individuals with disabilities right where
          they feel safest: in the comfort of their own homes.
        </p>
        <Link
          href={PATH.contact}
          className="bg-brand hover:bg-brand-dark mt-8 inline-flex items-center rounded-full px-8 py-4 font-semibold text-white transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
