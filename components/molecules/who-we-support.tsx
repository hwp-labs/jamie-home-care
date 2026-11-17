import Link from "next/link";
import { CheckCircle2Icon, HeartPulseIcon } from "lucide-react";

export function WhoWeSupport() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <HeartPulseIcon className="text-accent size-10" aria-hidden />
          <h2 className="text-brand-dark mt-4 text-3xl font-bold sm:text-4xl">Who we support</h2>
          <p className="text-muted mt-4 max-w-xl">
            Care is never one-size-fits-all. If your situation is not listed, talk to us and we will
            tell you honestly whether we can help.
          </p>
          <Link
            href="/contact-us"
            className="bg-brand hover:bg-brand-dark mt-8 inline-flex items-center rounded-full px-8 py-4 font-semibold text-white transition"
          >
            Ask a question
          </Link>
        </div>
        <ul className="space-y-3">
          {[
            "Seniors who want help at home",
            "Individuals with physical disabilities",
            "Individuals with developmental disabilities",
            "People recovering after a hospital stay",
            "Families who need a break from caregiving",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm">
              <CheckCircle2Icon className="text-brand mt-1 size-6 shrink-0" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
