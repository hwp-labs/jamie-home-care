import { AppButton } from "@/components/atoms/app-button";
import { Hero } from "@/components/molecules/hero";
import HomePageTemplate from "@/components/templates/home";
import { APP } from "@/constants/APP";
import { HomeIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="h-screen_">
      <Hero />
      {/* <SeniorCare />
      <BeHappy /> */}
    </div>
  );
}

const SeniorCare = () => (
  <section className="app-section _debug">
    <hgroup className="_leading-[100px] text-center font-serif font-medium">
      <h2 className="text-[84px]">{APP.name}</h2>
      <h2 className="text-[48px] text-accent">{APP.title}</h2>
    </hgroup>
    <div className="w-[25%] border-t-2" />
    <ul className="flex-cb app-container mt-8 gap-4">
      <li className="flex-col-cc gap-2">
        <HomeIcon size={48} />
        <strong>Furnished Rooms</strong>
        <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small>
      </li>
      <li className="flex-col-cc gap-2">
        <HomeIcon size={48} />
        <strong>Furnished Rooms</strong>
        <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small>
      </li>
      <li className="flex-col-cc gap-2">
        <HomeIcon size={48} />
        <strong>Furnished Rooms</strong>
        <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small>
      </li>
    </ul>
  </section>
);

const BeHappy = () => (
  <section className="app-section _debug">
    <div className="grid grid-cols-2">
      <div
        className="debug min-h-[480px] bg-cover bg-center"
        style={{ backgroundImage: `url(/images/banner.jpg)` }}
      />
      <div className="debug flex-col-sc gap-5 p-10">
        <hgroup className="_leading-[100px] _text-center font-serif font-medium">
          <h2 className="text-[48px]">{APP.name}</h2>
          <h2 className="text-[48px] text-accent">{APP.title}</h2>
        </hgroup>
        <p>
          Fostering strong relationships with our clients and their families is
          at the core of everything we do. Our friendly and professional team of
          care coordinators work hard to ensure they find the right care giver
          for each client.
        </p>
        <AppButton>Learn more</AppButton>
      </div>
    </div>
  </section>
);
