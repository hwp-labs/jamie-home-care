import { ChevronDownIcon } from "lucide-react";
import { data } from "./data";

export const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: data
    .flatMap((item) => item.items)
    .map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

export function Faqs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 space-y-14">
        {data.map((group, i) => (
          <div key={i}>
            <h2 className="text-brand-dark text-2xl font-bold sm:text-3xl">{group.heading}</h2>
            <div className="mt-6 space-y-4">
              {group.items.map((item, j) => (
                <details
                  key={j}
                  className="group open:ring-brand rounded-2xl bg-white ring-1 ring-black/5 transition"
                >
                  <summary className="focus-visible:outline-brand flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <ChevronDownIcon
                      className="text-brand size-6 shrink-0 transition-transform group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <p className="text-muted px-6 pb-6">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
