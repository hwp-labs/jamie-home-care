import Image from "next/image";

export const IMAGE = {
  Home: {
    Hero: (
      <Image
        src="/images/banner-1.jpeg"
        alt="A caregiver sharing a warm moment with a senior"
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        loading="eager"
        className="object-cover object-right"
      />
    ),
    AboutUs: (
      <Image
        src="/images/banner-2.jpeg"
        alt="Residents enjoying time together at home"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-right"
      />
    ),
  },
  AboutUs: (
    <Image
      src="/images/banner-3.jpg"
      alt="Caregiver and senior sharing a conversation"
      fill
      priority
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="object-cover"
    />
  ),
};
