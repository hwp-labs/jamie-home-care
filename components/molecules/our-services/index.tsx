import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { PATH } from "@/constants/PATH";
import { data } from "./data";

export const OurServices = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-brand-dark mt-3 text-3xl font-extrabold sm:text-4xl">Our Services</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map(({ Icon, ...item }, i) => (
            <article
              key={i}
              className="group bg-cream rounded-2xl border border-black/5 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="bg-brand inline-flex size-14 items-center justify-center rounded-full text-white">
                <Icon className="size-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              <p className="text-muted mt-2">{item.summary}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={PATH.services}
            className="text-brand inline-flex items-center gap-2 font-bold hover:underline"
          >
            View all services <ArrowRightIcon className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
