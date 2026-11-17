import { SmilePlusIcon } from "lucide-react";

export function HiringProcess() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <SmilePlusIcon className="text-accent size-9" aria-hidden />
          <h2 className="text-brand-dark text-3xl font-bold sm:text-4xl">How hiring works</h2>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Apply",
              summary: "Email us your resume and the role you are interested in.",
            },
            {
              title: "Chat",
              summary: "We call you for a friendly conversation about your experience.",
            },
            { title: "Check", summary: "We complete reference and police checks." },
            { title: "Start", summary: "Meet the team, get oriented and begin caring." },
          ].map((item, i) => (
            <li key={item.title} className="flex gap-5">
              <span className="bg-accent flex size-12 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted mt-2">{item.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
