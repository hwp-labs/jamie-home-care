import Link from "next/link";
import { PATH } from "@/constants/PATH";
import { Logo } from "../logo";
import { AppButton } from "../atoms/app-button";

export const Nav = () => (
  <section className="flex-cc h-24 bg-card_">
    <div className="flex-cb app-container">
      <Logo />
      <div className="flex-cb gap-6">
        <nav className="flex-cx gap-5">
          {[
            { path: PATH.home, label: "Home" },
            { path: PATH.about, label: "About Us" },
            { path: PATH.services, label: "Our Services" },
            { path: PATH.careers, label: "Careers" },
            { path: PATH.faqs, label: "FAQs" },
            { path: PATH.contact, label: "Contact Us" },
          ].map((item, i) => (
            <Link key={i} href={item.path} className="text-lg_ font-semibold">
              {item.label}
            </Link>
          ))}
        </nav>
        <AppButton>Book Appointment</AppButton>
      </div>
    </div>
  </section>
);
