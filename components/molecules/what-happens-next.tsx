import { GetInTouch } from "../organisms/get-in-touch";

export const WhatHappensNext = () => {
  return (
    <div className="space-y-8 lg:col-span-2">
      <GetInTouch />
      <div className="">
        <h2 className="text-brand-dark text-3xl font-bold">What happens next</h2>
        <ol className="mt-8 space-y-6">
          {[
            {
              title: "Choose a time",
              summary: "Pick the service, date and time that suit you.",
            },
            {
              title: "We confirm",
              summary: "We call or email you to confirm the appointment.",
            },
            {
              title: "We meet",
              summary: "We talk through your needs and start building a care plan.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-5">
              <span className="bg-accent flex size-12 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted mt-1">{item.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
