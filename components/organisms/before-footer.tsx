import Link from "next/link";
import { Clock } from "lucide-react";

export const BeforeFooter = () => {
  return (
    <section className="bg-brand-dark py-16 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Clock className="mx-auto size-10 text-accent" aria-hidden />
        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
          Ready to Experience Care You Can Trust?
        </h2>
        <p className="mt-4 text-white/80">
          Whether you need a few hours of support each week, daily assistance,
          or dedicated respite care, Jamie Home Care is here to help your family
          thrive.
        </p>
        <Link
          href="/contact-us"
          className="mt-8 inline-flex items-center rounded-full bg-accent px-8 py-4 font-semibold text-white transition hover:opacity-90"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};
