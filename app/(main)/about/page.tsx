import type { Metadata } from "next";
import { Jumbotron } from "@/components/organisms/jumbotron";
import { AboutHero } from "@/components/molecules/hero";
import { OurMission } from "@/components/molecules/our-mission";
import { AboutWhyUs } from "@/components/molecules/about-why-us";
import { CoreValues } from "@/components/molecules/core-values";
import { CallToAction } from "@/components/organisms/call-to-action";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";

export const metadata: Metadata = {
  title: "About Us",
  alternates: { canonical: PATH.about },
};

export default function AboutPage() {
  return (
    <>
      <Jumbotron current="About Us" title={APP.name} description={APP.title} />
      <AboutHero />
      <OurMission />
      <AboutWhyUs />
      <CoreValues />
      <CallToAction />
    </>
  );
}
