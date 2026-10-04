import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Banner } from "@/components/organisms/banner";
import { Hero } from "@/components/molecules/hero";

export const metadata: Metadata = {
  title: "Privacy Policy - Jamie Home Care",
  description:
    "How Jamie Home Care collects, uses, protects and shares your personal information.",
};

const LAST_UPDATED = "October 4, 2026";
const PRIVACY_EMAIL = "info@jamiehomecare.ca";

type Section = { id: string; title: string; body: ReactNode };

const SECTIONS: ReadonlyArray<Section> = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <>
        <p>
          Jamie Home Care (&quot;we&quot;, &quot;us&quot;) provides support for seniors and
          individuals with disabilities in Kitchener, Ontario. We respect your privacy and are
          committed to protecting the personal information you share with us.
        </p>
        <p>
          This policy explains what we collect through this website, why we collect it, and the
          choices you have. By using our website or submitting a form, you agree to the practices
          described here.
        </p>
      </>
    ),
  },
  {
    id: "collect",
    title: "Information we collect",
    body: (
      <>
        <p>We collect only what we need to respond to you and to arrange care. This may include:</p>
        <ul>
          <li>Your name, email address and phone number</li>
          <li>The service, date and time you request when booking an appointment</li>
          <li>Whether you are booking for yourself or for someone else</li>
          <li>Any message or notes you choose to write in our forms</li>
          <li>Basic technical data, such as browser type and pages visited, when you use our site</li>
        </ul>
        <p>
          Please do not include detailed medical information in our website forms. We will ask for
          what we need directly, in a conversation, once we are in touch.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use your information",
    body: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Reply to your questions and requests</li>
          <li>Confirm, schedule and manage appointments</li>
          <li>Assess care needs and prepare a care plan with you and your family</li>
          <li>Recruit staff, when you apply for a position</li>
          <li>Improve our website and services</li>
          <li>Meet our legal and professional obligations</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </>
    ),
  },
  {
    id: "consent",
    title: "Your consent",
    body: (
      <>
        <p>
          We collect, use and share personal information with your knowledge and consent, except
          where the law allows or requires otherwise. If you provide information about another
          person, such as a family member, you confirm you are entitled to do so.
        </p>
        <p>
          You may withdraw your consent at any time, subject to legal or contractual limits, by
          contacting us. Withdrawing consent may mean we can no longer provide some services.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>We only share personal information when necessary and only with:</p>
        <ul>
          <li>Staff and caregivers who need it to provide care or handle your request</li>
          <li>
            Service providers that help us run our website, email and systems, under
            confidentiality obligations
          </li>
          <li>Healthcare professionals or emergency services, when needed to protect someone&apos;s safety</li>
          <li>Authorities, where we are required to by law</li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect it",
    body: (
      <>
        <p>
          We use reasonable administrative, technical and physical safeguards to protect personal
          information against loss, theft and unauthorized access. Access is limited to people who
          need it for their work.
        </p>
        <p>
          No method of transmission or storage is completely secure, so we cannot guarantee
          absolute security. If a breach creates a real risk of significant harm, we will notify
          affected people and the authorities as the law requires.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <p>
        We keep personal information only as long as needed for the purposes described above or as
        required by law. When it is no longer needed, we securely delete or anonymize it.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <p>You may ask us to:</p>
        <ul>
          <li>Tell you what personal information we hold about you</li>
          <li>Give you access to it</li>
          <li>Correct anything that is inaccurate or incomplete</li>
          <li>Delete it, where we are not required to keep it</li>
        </ul>
        <p>
          Contact us using the details below. We may need to confirm your identity first, and we
          will respond within a reasonable time.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: (
      <p>
        Our website may use essential cookies and basic analytics to keep the site working and to
        understand how it is used. We do not use this data to identify you personally. You can
        control cookies through your browser settings.
      </p>
    ),
  },
  {
    id: "links",
    title: "Links to other sites",
    body: (
      <p>
        Our website may link to other sites, such as social media pages or maps. We are not
        responsible for their privacy practices, so please read their policies.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The &quot;last updated&quot; date at the top
        shows when it last changed. Significant changes will be highlighted on this page.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us and complaints",
    body: (
      <>
        <p>Questions about this policy, or requests about your information, can be sent to:</p>
        <address className="not-italic">
          <strong>Jamie Home Care</strong>
          <br />
          1289 Queens Boulevard, Kitchener, Ontario
          <br />
          Phone: <a href="tel:+15485774216">+1 (548) 577-4216</a>
          <br />
          Email: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
        </address>
        <p>
          If we have not resolved your concern, you may contact the{" "}
          <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">
            Office of the Privacy Commissioner of Canada
          </a>
          . For concerns about personal health information in Ontario, you may also contact the{" "}
          <a href="https://www.ipc.on.ca" target="_blank" rel="noopener noreferrer">
            Information and Privacy Commissioner of Ontario
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        current="Privacy Policy"
        title="Privacy Policy"
        description={`Last updated ${LAST_UPDATED}`}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4">
        {/* Table of contents */}
        <aside className="lg:col-span-1">
          <nav
            aria-label="On this page"
            className="rounded-2xl bg-brand-soft p-6 lg:sticky lg:top-32"
          >
            <h2 className="text-lg font-semibold text-brand-dark">On this page</h2>
            <ol className="mt-4 space-y-2 text-base">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-brand hover:underline">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Policy text */}
        <article className="lg:col-span-3">
          <div className="space-y-12">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">{s.title}</h2>
                <div className="mt-4 max-w-3xl space-y-4 text-muted [&_a]:font-medium [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-brand-dark [&_li]:marker:text-brand [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>

      <Banner
        title="Questions about your privacy?"
        text="We are happy to explain how we handle your information."
        primary={{ label: "Email us", href: `mailto:${PRIVACY_EMAIL}` }}
        secondary={{ label: "Contact Us", href: "/contact-us" }}
      />
    </>
  );
}