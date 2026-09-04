import Link from "next/link";
import { Button } from "../ui/button";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";

export const Nav = () => (
  <section className="flex-cc h-24 bg-card">
    <div className="flex-cb container">
      <figure className="flex-cx gap-3">
        <img src="/android-chrome-192x192.png" alt="" className="size-[70px]" />
        <figcaption>
          <h1 className="text-2xl font-bold">{APP.name}</h1>
          <p className="text-sm_ -mt-1 font-medium text-accent">{APP.title}</p>
        </figcaption>
      </figure>
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
        <Button className="h-[44px] px-6">
          Book Appointment
        </Button>
      </div>
    </div>
  </section>
);
