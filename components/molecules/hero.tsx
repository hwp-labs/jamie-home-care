import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  description?: ReactNode;
  current: string;
};

/** Shared inner-page banner. Reused by Services, FAQs, Contact, Careers. */
export function Hero({ title, description, current }: PageHeroProps) {
  return (
    <section className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-white/70">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-white hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-white">
              {current}
            </li>
          </ol>
        </nav>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-xl text-white/80">{description}</p>
        ) : null}
      </div>
    </section>
  );
}