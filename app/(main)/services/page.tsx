import type { Metadata } from "next";
import { Jumbotron } from "@/components/organisms/jumbotron";
import { HomeCareServices } from "@/components/molecules/home-care-services";
import { HealthCareServices } from "@/components/molecules/health-care-services";
import { WhoWeSupport } from "@/components/molecules/who-we-support";
import { CallToAction } from "@/components/organisms/call-to-action";

export const metadata: Metadata = {
  title: "Our Services",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Jumbotron
        current="Our Services"
        title="Our Services"
        description="Everyday support, tailored to each person and delivered with warmth and respect."
      />
      <HomeCareServices />
      <HealthCareServices />
      <WhoWeSupport />
      <CallToAction />
    </>
  );
}
