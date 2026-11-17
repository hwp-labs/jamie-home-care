import { data } from "./data";

export const HealthCareServices = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="text-brand-dark text-3xl font-bold sm:text-4xl">Our Health Care Services</h2>
        <p className="text-muted mt-4">
          Every plan is different. We combine the services below to fit your loved one.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {data.map(({ Icon, ...item }, i) => (
          <article
            key={i}
            className="hover:ring-brand flex gap-6 rounded-2xl bg-white p-8 ring-1 ring-black/5 transition"
          >
            <span className="bg-brand flex size-14 shrink-0 items-center justify-center rounded-xl text-white">
              <Icon className="size-7" aria-hidden />
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
};
