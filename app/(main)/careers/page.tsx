import type { Metadata } from "next";
import { Jumbotron } from "@/components/organisms/jumbotron";
import { WhyJoin } from "@/components/molecules/why-join";
import { Vacancies } from "@/components/molecules/vacancies";
import { HiringProcess } from "@/components/molecules/hiring-process";
import { CallToAction } from "@/components/organisms/call-to-action";

export const metadata: Metadata = {
  title: "Careers",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <Jumbotron
        current="Careers"
        title="Careers"
        description="Join a team that treats care as a calling, not just a shift."
      />
      <WhyJoin />
      <Vacancies />
      <HiringProcess />
      <CallToAction />
    </>
  );
}
