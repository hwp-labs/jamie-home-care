import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { APP } from "@/constants/APP";

const LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Our Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-extrabold">Jamie Home Care</h3>
          <p className="mt-3 text-white/80">
            We provide support for seniors and individuals with disabilities.
          </p>
          <ul className="mt-5 space-y-2 text-white/90">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 min-w-4 -mt-4" /> 
              {APP.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 min-w-4" />
              <a href={APP.telHref} className="hover:underline">
                {APP.tel}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 min-w-4" />
              <a
                href="mailto:info@jamiehomecare.ca"
                className="hover:underline"
              >
                {APP.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold">Helpful links</h4>
          <ul className="mt-4 space-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white/80 hover:text-white hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold">Newsletter</h4>
          <p className="mt-4 text-white/80">
            Stay up to date with our latest news.
          </p>
          <form className="mt-4 flex gap-2 ">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-full px-5 py-3 text-ink bg-white"
            />
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-3 font-bold"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-sm text-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {APP.name}. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="hover:text-white hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
