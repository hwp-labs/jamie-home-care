import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { Banner } from "@/components/organisms/banner";
import { Hero } from "@/components/molecules/hero";
import { APP } from "@/constants/APP";

export const metadata: Metadata = {
  title: "FAQs - Jamie Home Care",
  description:
    "Answers to common questions about care services, staff, booking and getting started with Jamie Home Care in Kitchener, Ontario.",
  alternates: { canonical: "/faqs" },
};

type Faq = { question: string; answer: string };
type FaqGroup = { heading: string; items: ReadonlyArray<Faq> };

const GROUPS: ReadonlyArray<FaqGroup> = [
  {
    heading: "Getting started",
    items: [
      {
        question: "How do I get started with Jamie Home Care?",
        answer:
          "Call us or book an appointment online. We will talk with you about your loved one's needs and build a personal care plan together.",
      },
      {
        question: "Can I visit before making a decision?",
        answer:
          "Yes. Book an appointment and we will happily show you around and answer your questions in person.",
      },
      {
        question: "Who do you provide care for?",
        answer:
          "We support seniors and individuals with disabilities. If you are unsure whether we are the right fit, contact us and we will tell you honestly.",
      },
    ],
  },
  {
    heading: "Care and services",
    items: [
      {
        question: "What services do you offer?",
        answer:
          "Our services include personal care, companionship, meal preparation, medication reminders and health monitoring. See our Services page for the full list.",
      },
      {
        question: "Is care available around the clock?",
        answer:
          "Yes. A caregiver is always nearby, day and night. Contact us to discuss the arrangement that suits your family.",
      },
      {
        question: "Can the care plan change over time?",
        answer:
          "Absolutely. We review each plan regularly and update it whenever needs change.",
      },
    ],
  },
  {
    heading: "Staff and safety",
    items: [
      {
        question: "Are your caregivers qualified?",
        answer:
          "Every caregiver is trained, certified and background-checked before they start working with our clients.",
      },
      {
        question: "How will I be kept informed about my loved one?",
        answer:
          "We keep families updated regularly and are always available by phone or email if you have a question.",
      },
    ],
  },
  {
    heading: "Fees and booking",
    items: [
      {
        question: "How much does care cost?",
        answer:
          "Costs depend on the type and amount of care needed. Contact us for a clear, personalized quote with no obligation.",
      },
      {
        question: "What are your office hours?",
        answer:
          `We are open ${APP.workHours}. You can reach us at ${APP.tel} or ${APP.email}.`,
      },
    ],
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GROUPS.flatMap((g) => g.items).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

      <Hero
        current="FAQs"
        title="Frequently Asked Questions"
        description="Clear answers to the questions families ask us most."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-14">
          {GROUPS.map((group) => (
            <div key={group.heading}>
              <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">
                {group.heading}
              </h2>
              <div className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl bg-white ring-1 ring-black/5 transition open:ring-brand"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <ChevronDown
                        className="size-6 shrink-0 text-brand transition-transform group-open:rotate-180"
                        aria-hidden
                      />
                    </summary>
                    <p className="px-6 pb-6 text-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Banner
        title="Still have a question?"
        text="We are happy to talk it through. Reach out any day from 9:00 to 17:00."
        primary={{ label: "Contact Us", href: "/contact-us" }}
      />
    </>
  );
}
