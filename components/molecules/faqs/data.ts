import { APP } from "@/constants/APP";

export const data = [
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
        answer: "Absolutely. We review each plan regularly and update it whenever needs change.",
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
        answer: `You can reach us at ${APP.tel} or ${APP.email}.`,
      },
    ],
  },
];
