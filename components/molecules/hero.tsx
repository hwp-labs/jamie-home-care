"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
//
import { Button, buttonVariants } from "@/components/ui/button";

const slides = [
  {
    title: "We provide compassionate care for",
    description:
      "A warm, attentive home where families trust us with what matters most.",
    cta: { label: "Our Service", ctaHref: "/services" },
    image: "/images/banner.jpg",
  },
  {
    title: "Everyday support, delivered with",
    description:
      "From daily routines to companionship, our team is there when it counts.",
    ctaLabel: "Meet our caregivers",
    ctaHref: "/about",
    image: "/images/banner.jpg",
    imageAlt: "A caregiver and senior sharing a conversation",
  },
];

export const Hero = () => {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  const handlePrev = () =>
    setActive((i) => (i - 1 + slides.length) % slides.length);
  const handleNext = () => setActive((i) => (i + 1) % slides.length);
  //
  return (
    <section
      className="flex-cc relative min-h-[calc(100vh-200px)] overflow-hidden bg-contain bg-center"
      style={{ backgroundImage: `url(/images/banner.jpg)` }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="debug_ flex-col-xc _min-h-[440px] relative container">
        <div className="flex-col-sx max-w-1/2 gap-4">
          <h1 className="font-serif text-[84px] leading-tight font-medium text-primary-foreground">
            {slide.title}
          </h1>
          <p className="text-[32px] text-muted">{slide.description}</p>
          <div className="flex-cx gap-4">
            <Button className="h-[48px] bg-accent px-8 text-accent-foreground">
              Our Services
            </Button>
            <Button className="h-[48px] bg-accent-foreground px-8 text-accent">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
      {renderControls(handlePrev, handleNext)}
      {renderIndicator(active, setActive)}
    </section>
  );
};

const renderControls = (handlePrev: () => void, handleNext: () => void) => (
  <>
    <button
      onClick={handlePrev}
      title="Previous"
      className="flex-cc absolute top-1/2 left-8 z-20 size-[40px] cursor-pointer rounded-full bg-primary-foreground text-primary transition hover:bg-primary hover:text-primary-foreground"
    >
      <ChevronLeft size={32} strokeWidth={3} />
    </button>
    <button
      onClick={handleNext}
      title="Next"
      className="flex-cc absolute top-1/2 right-8 z-20 size-[40px] cursor-pointer rounded-full bg-primary-foreground text-primary transition hover:bg-primary hover:text-primary-foreground"
    >
      <ChevronRight size={32} strokeWidth={3} />
    </button>
  </>
);

const renderIndicator = (
  active: number,
  handleClick: (indx: number) => void,
) => (
  <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => handleClick(i)}
        className={`h-2 rounded-full transition-all ${
          i === active ? "w-6 bg-accent" : "w-2 bg-primary-foreground"
        }`}
      />
    ))}
  </div>
);
