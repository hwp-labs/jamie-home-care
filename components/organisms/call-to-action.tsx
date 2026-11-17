import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="bg-brand-dark rounded-[2rem] px-8 py-14 text-center text-white sm:px-16">
        <h2 className="text-3xl font-bold sm:text-4xl">Speak to care giver?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Let's discuss the right care plan for you or your loved ones
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <Link
            href={PATH.about}
            className="bg-accent rounded-full px-8 py-4 font-semibold text-white transition hover:brightness-95"
          >
            Book Appointment
          </Link>
          <a
            href={APP.telHref}
            target="_blank"
            className="hover:text-brand-dark rounded-full border-2 border-white px-8 py-4 font-semibold transition hover:bg-white"
          >
            Call {APP.tel}
          </a>
        </div>
      </div>
    </section>
  );
}
