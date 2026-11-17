import { HeartHandshakeIcon, ScaleIcon, ShieldCheckIcon, SmileIcon } from "lucide-react";

export const CoreValues = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-brand-dark text-3xl font-bold sm:text-4xl">Our Core Values</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Trust",
              text: "We show up on time, communicate openly, and uphold the highest standards of professional safety.",
              icon: ShieldCheckIcon,
            },
            {
              title: "Dignity",
              text: "We honor every client's personal preferences, routines, and autonomy during every task.",
              icon: ScaleIcon,
            },
            {
              title: "Compassion",
              text: "We don't just complete tasks; we listen, build relationships, and bring warmth into every home.",
              icon: HeartHandshakeIcon,
            },
            {
              title: "Peace of Mind",
              text: "We lift the weight off family members' shoulders so they can rest knowing their loved one is in safe hands.",
              icon: SmileIcon,
            },
          ].map(({ title, text, icon: Icon }) => (
            <article key={title} className="border-brand border-l-4 pl-6">
              <Icon className="text-brand size-9" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="text-muted mt-2">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
