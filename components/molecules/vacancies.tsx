import { APP } from "@/constants/APP";
import { mailto } from "@/utils";
import { BriefcaseIcon, CheckCircle2Icon, MapPinIcon } from "lucide-react";

const data = [
  {
    title: "Personal Support Worker",
    type: "Full-time / Part-time",
    location: "Kitchener, ON",
    summary: "Provide hands-on personal care and daily living support with dignity and respect.",
    requirements: [
      "PSW certificate or equivalent",
      "Experience with seniors or disabilities",
      "Clear police check",
    ],
  },
  {
    title: "Companion Caregiver",
    type: "Part-time",
    location: "Kitchener, ON",
    summary: "Offer friendly company, light meal preparation and gentle activities.",
    requirements: ["Warm, patient personality", "Reliable and punctual", "Clear police check"],
  },
  {
    title: "Overnight Caregiver",
    type: "Overnight shifts",
    location: "Kitchener, ON",
    summary: "Provide calm, attentive supervision and comfort through the night.",
    requirements: [
      "Previous caregiving experience",
      "Comfortable working overnight",
      "Clear police check",
    ],
  },
];

export function Vacancies() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-brand-dark text-3xl font-bold sm:text-4xl">Open positions</h2>
          <p className="text-muted mt-4">
            Do not see a perfect fit? Send us your details anyway and we will keep them on file.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {data.map((item, i) => (
            <article
              key={i}
              className="bg-surface hover:ring-brand flex flex-col gap-6 rounded-2xl p-8 ring-1 ring-black/5 transition lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="max-w-2xl">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-muted mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-base">
                  <span className="inline-flex items-center gap-2">
                    <BriefcaseIcon className="size-4" aria-hidden /> {item.type}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPinIcon className="size-4" aria-hidden /> {item.location}
                  </span>
                </p>
                <p className="mt-3">{item.summary}</p>
                <ul className="mt-4 space-y-2">
                  {item.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-base">
                      <CheckCircle2Icon className="text-brand mt-0.5 size-5 shrink-0" aria-hidden />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={mailto(APP.emailInfo, `RE: Careers at ${APP.name}`)}
                className="bg-accent inline-flex shrink-0 items-center justify-center rounded-full px-8 py-4 font-semibold text-white transition hover:brightness-95"
              >
                Apply for this role
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
