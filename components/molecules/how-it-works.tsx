import React from "react";

export const HowItWorks = () => {
  return (
    <section className="bg-brand-soft py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-brand-dark text-center text-3xl font-extrabold sm:text-4xl">
          How it works
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { title: "Get in touch", text: "Call us or book an appointment online." },
            {
              title: "Meet and plan",
              text: "We learn about your loved one and build a care plan.",
            },
            {
              title: "Settle in",
              text: "Your family member receives warm, steady care.",
            },
          ].map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <span className="bg-accent mx-auto flex size-14 items-center justify-center rounded-full text-2xl font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="text-muted mt-2">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
