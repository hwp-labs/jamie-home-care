import type { Metadata } from "next";
import { Jumbotron } from "@/components/organisms/jumbotron";
import { FAQ_JSON_LD, Faqs } from "@/components/molecules/faqs";
import { CallToAction } from "@/components/organisms/call-to-action";

export const metadata: Metadata = {
  title: "FAQs",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <Jumbotron
        current="FAQs"
        title="Frequently Asked Questions"
        description="Clear answers to the questions families ask us most."
      />
      <Faqs />
      <CallToAction />
    </>
  );
}
