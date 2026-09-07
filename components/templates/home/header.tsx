import { colors } from "../colors";

export const Header = () => {
  return (
    <header
      className="flex items-center justify-between px-6 py-5 md:px-16"
      style={{ background: colors.cream }}
    >
      <div className="font-display text-2xl" style={{ color: colors.tealDeep }}>
        Willow <span style={{ color: colors.coral }}>Home Care</span>
      </div>
      <nav
        className="hidden gap-8 text-sm font-medium md:flex"
        style={{ color: colors.ink }}
      >
        <a
          href="#"
          className="border-b-2"
          style={{ borderColor: colors.coral }}
        >
          Home
        </a>
        <a href="#services">Services</a>
        <a href="#team">Our Team</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </nav>
      <a
        href="#contact"
        className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white md:inline-block"
        style={{ background: colors.coral }}
      >
        Book a visit
      </a>
    </header>
  );
};
