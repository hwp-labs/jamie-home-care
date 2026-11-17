import Link from "next/link";
import { Logo } from "../logo";
import { Nav } from "./nav";
import { Banner } from "./banner";
import { Drawer } from "./drawer";
import { PATH } from "@/constants/PATH";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <Banner />
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3"
      >
        <Logo />
        <Nav />
        <Link
          href={PATH.bookAppointment}
          className="bg-accent focus-visible:outline-brand hidden rounded-full px-6 py-3 font-bold text-white transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 lg:inline-block"
        >
          Book Appointment
        </Link>
        <Drawer />
      </nav>
    </header>
  );
}
