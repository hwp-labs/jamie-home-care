import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Menu, Phone } from "lucide-react";
import { APP } from "@/constants/APP";
import { Nav } from "./nav";
import { Drawer } from "./drawer";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="hidden bg-brand-dark text-sm text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <a
              href={APP.telHref}
              className="flex items-center gap-2 hover:underline"
            >
              <Phone className="size-4" /> {APP.tel}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="size-4" />
              {APP.address}
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
          <Image
            src="/android-chrome-192x192.png"
            alt=""
            width={44}
            height={44}
          />
          <span className="text-xl font-extrabold text-brand-dark">
            Jamie Home Care
          </span>
        </Link>

        {/* Desktop menu */}
        <Nav />

        <Link
          href="/book-appointment"
          className="hidden rounded-full bg-accent px-6 py-3 font-bold text-white transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:inline-block"
        >
          Book Appointment
        </Link>

        {/* Mobile menu */}
        <Drawer />
      </nav>
    </header>
  );
}
