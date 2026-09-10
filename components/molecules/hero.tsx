import { AppButton } from "../atoms/app-button";
import { APP } from "@/constants/APP";

export const Hero = () => {
  return (
    <section className="flex-cc bg-foreground text-background">
      <div className="app-container app-section grid-2">
        {renderLeftContent}
        {renderRightContent}
      </div>
    </section>
  );
};

const renderLeftContent = (
  <div className="debug_ flex-col-sc p-16">
    <h1 className="font-heading text-4xl leading-tight md:text-5xl">
      {APP.title}
    </h1>
    <p className="mt-6 max-w-md leading-relaxed text-muted">
      Trained caregivers, warm companionship, and round-the-clock attention — so
      every senior in our care feels at home, not just housed.
    </p>
    <div className="flex-cx gap-4 mt-8">
      <AppButton variant="accent">Our Services</AppButton>
      <AppButton variant="accent" invert>Book Appointment</AppButton>
    </div>
  </div>
);

const renderRightContent = (
  <div className="relative">
    <img
      src="/images/banner.jpg"
      className="h-full w-full object-cover"
      alt=""
    />
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(90deg, var(--foreground) 0%, rgba(44,86,82,0) 35%)`,
      }}
    />
  </div>
);
