import type { Metadata } from "next";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";
import { CallToAction } from "@/components/organisms/call-to-action";
import { Jumbotron } from "@/components/organisms/jumbotron";
import { Content, TableOfContents } from "@/components/molecules/privacy-policy";
import { momentUtils } from "@/utils/moment-utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: PATH.privacyPolicy },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Jumbotron
        current="Privacy Policy"
        title="Privacy Policy"
        description={`Last updated: ${momentUtils.longDate(APP.startDate)}`}
      />
      <div className="mx-auto grid max-w-7xl gap-12 bg-white px-6 py-16 lg:grid-cols-4">
        <TableOfContents />
        <Content />
      </div>
      <CallToAction />
    </>
  );
}
