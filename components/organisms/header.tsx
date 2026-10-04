import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Menu, Phone } from "lucide-react";

export const NAV_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="hidden bg-brand-dark text-sm text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+15485774216" className="flex items-center gap-2 hover:underline">
              <Phone className="size-4" /> +1 (548) 577-4216
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="size-4" /> 1289 Queens Boulevard, Kitchener, ON
            </span>
          </div>
          <span className="flex items-center gap-2">
            <Clock className="size-4" /> Monday - Sunday 9:00 - 17:00
          </span>
        </div>
      </div>

      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image src="/android-chrome-192x192.png" alt="" width={44} height={44} />
          <span className="text-xl font-extrabold text-brand-dark">Jamie Home Care</span>
        </Link>

        <ul className="hidden items-center gap-8 font-semibold lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-brand">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/book-appointment"
          className="hidden rounded-full bg-accent px-6 py-3 font-bold text-white transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:inline-block"
        >
          Book Appointment
        </Link>

        {/* Mobile menu: no JS needed */}
        <details className="group relative lg:hidden">
          <summary
            aria-label="Open menu"
            className="flex cursor-pointer list-none items-center rounded-md border p-2 [&::-webkit-details-marker]:hidden"
          >
            <Menu className="size-6" />
          </summary>
          <ul className="absolute right-0 mt-3 w-64 space-y-1 rounded-xl border bg-white p-3 shadow-lg">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block rounded-md px-3 py-2 font-semibold hover:bg-brand-soft">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book-appointment"
                className="mt-2 block rounded-full bg-accent px-3 py-3 text-center font-bold text-white"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </details>
      </nav>
    </header>
  );
}