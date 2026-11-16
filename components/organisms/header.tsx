import Image from "next/image";
import Link from "next/link";
import { Clock, MailIcon,  MapPinIcon, PhoneIcon } from "lucide-react";
import { APP } from "@/constants/APP";
import { Nav } from "./nav";
import { Drawer } from "./drawer";
import { Logo } from "../logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="bg-brand-dark hidden text-sm text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex flex-row gap-4">
            <span className="flex items-center gap-2">
              <PhoneIcon className="size-4" /> {APP.tel}
            </span>
            <span className="flex items-center gap-2">
              <MailIcon className="size-4" /> {APP.email}
            </span>
          </div>
          <span className="flex items-center gap-2">
            <MapPinIcon className="size-4" />
            {APP.address}
          </span>
        </div>
      </div>

      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3"
      >
       <Logo />

        {/* Desktop menu */}
        <Nav />

        <Link
          href="/book-appointment"
          className="bg-accent focus-visible:outline-brand hidden rounded-full px-6 py-3 font-bold text-white transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 lg:inline-block"
        >
          Book Appointment
        </Link>

        {/* Mobile menu */}
        <Drawer />
      </nav>
    </header>
  );
}
