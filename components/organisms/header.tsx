import { Logo } from "../logo";
import { AppButton } from "../atoms/app-button";
import { Nav } from "./nav";

export const Header = () => (
  <section className="flex-cc bg-card_ h-24">
    <div className="flex-cb app-container">
      <Logo />
      <div className="flex-cb gap-6">
        <Nav />
        <AppButton>Book Appointment</AppButton>
      </div>
    </div>
  </section>
);
