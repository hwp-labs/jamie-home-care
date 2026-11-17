import { SparklesIcon } from "lucide-react";

export const OurMission = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SparklesIcon className="text-accent mx-auto size-10" aria-hidden />
        <h2 className="text-brand-dark mt-5 text-3xl font-bold sm:text-4xl">Our Mission</h2>
        <p className="text-muted mt-4 text-xl">
          To empower seniors and individuals with disabilities to live rich, dignified, and
          independent lives at home, while giving families and primary caregivers complete peace of
          mind, free from stress, burnout, and guilt.
        </p>
      </div>
    </section>
  );
};
