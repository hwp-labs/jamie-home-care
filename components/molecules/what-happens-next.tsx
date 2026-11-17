import { ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { APP } from "@/constants/APP";

export const WhatHappensNext = () => {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-brand-dark text-3xl font-bold">What happens next</h2>
      <ol className="mt-8 space-y-6">
        {[
          {
            title: "Choose a time",
            text: "Pick the service, date and time that suit you.",
          },
          {
            title: "We confirm",
            text: "We call or email you to confirm the appointment.",
          },
          {
            title: "We meet",
            text: "We talk through your needs and start building a care plan.",
          },
        ].map((s, i) => (
          <li key={s.title} className="flex gap-5">
            <span className="bg-accent flex size-12 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-muted mt-1">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <ul className="bg-brand-soft text-base_ mt-10 hidden space-y-3 rounded-2xl p-6">
        <li className="flex items-center gap-3">
          <PhoneIcon className="text-brand size-5 shrink-0" aria-hidden />
          <a href={APP.telHref} className="hover:underline">
            {APP.tel}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <MapPinIcon className="text-brand size-5 shrink-0" aria-hidden />
          {APP.address}
        </li>
        <li className="flex items-center gap-3">
          <ClockIcon className="text-brand size-5 shrink-0" aria-hidden />
          {APP.workHours}
        </li>
      </ul>
    </div>
  );
};
