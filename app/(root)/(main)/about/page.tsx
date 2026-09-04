import { Banner } from "@/components/organisms/banner";
import { APP } from "@/constants/APP";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <div className="h-screen">
      <Banner title="About Us" subtitle={APP.name} />
    </div>
  );
}
