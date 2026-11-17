import type { Metadata } from "next";
import { HomeHero } from "@/components/molecules/hero";
import { OurServices } from "@/components/molecules/our-services";
import { WhyUs } from "@/components/molecules/why-us";
import { HowItWorks } from "@/components/molecules/how-it-works";
import { CallToAction } from "@/components/organisms/call-to-action";
import { PATH } from "@/constants/PATH";

export const metadata: Metadata = {
  alternates: { canonical: PATH.home },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <OurServices />
      <WhyUs />
      <HowItWorks />
      <CallToAction />
    </>
  );
}
