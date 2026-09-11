import { Hero } from "@/components/molecules/hero";
import { Perks } from "@/components/molecules/perks";

export default function HomePage() {
  return (
    <div className="h-screen_">
      <Hero />
      <Perks />
    </div>
  );
}
