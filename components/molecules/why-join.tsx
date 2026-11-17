import { CalendarClockIcon, GraduationCapIcon, HeartHandshakeIcon, UsersIcon } from "lucide-react";

export function WhyJoin() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="text-brand-dark text-3xl font-bold sm:text-4xl">Why work with us</h2>
        <p className="text-muted mt-4">
          We look after our caregivers so they can look after our clients.
        </p>
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Meaningful work",
            summary: "Make a real difference in someone's day, every day.",
            Icon: HeartHandshakeIcon,
          },
          {
            title: "Training and growth",
            summary: "Learn new skills and grow your career in care.",
            Icon: GraduationCapIcon,
          },
          {
            title: "Flexible shifts",
            summary: "Day, evening and overnight options to suit your life.",
            Icon: CalendarClockIcon,
          },
          {
            title: "A supportive team",
            summary: "You are never on your own. Colleagues and managers have your back.",
            Icon: UsersIcon,
          },
        ].map(({ Icon, ...item }, i) => (
          <article key={i} className="border-brand border-l-4 pl-6">
            <Icon className="text-brand size-9" aria-hidden />
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="text-muted mt-2">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
