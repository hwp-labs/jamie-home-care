import type { Metadata } from "next";
import { Hero } from "@/components/molecules/hero";
import { OurServices } from "@/components/molecules/our-services";
import { WhyUs } from "@/components/molecules/why-us";
import { HowItWorks } from "@/components/molecules/how-it-works";
import { CallToAction } from "@/components/organisms/call-to-action";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurServices />
      <WhyUs />
      <HowItWorks />
      <CallToAction />
    </>
  );
}
