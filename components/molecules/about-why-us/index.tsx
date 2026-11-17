import { APP } from "@/constants/APP";
import { data } from "./data";

export const AboutWhyUs = () => (
  <section className="mx-auto max-w-7xl px-6 py-16">
    <div className="max-w-2xl">
      <h2 className="text-brand-dark text-3xl font-bold sm:text-4xl">Why {APP.name}?</h2>
    </div>
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {data.map(({ Icon, ...item }, i) => (
        <article
          key={i}
          className="flex gap-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
        >
          <span className="bg-brand-soft flex size-14 shrink-0 items-center justify-center rounded-full">
            <Icon className="text-brand size-7" aria-hidden />
          </span>
          <div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-muted mt-2">{item.summary}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
