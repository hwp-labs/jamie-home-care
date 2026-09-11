import { IconHome, IconShield, IconStar } from "@tabler/icons-react";

export const Perks = () => (
  <section className="app-section-sm flex-cc">
    <div className="app-container flex-col-cc debug_">
      <h2 className="font-heading text-4xl">
        Care that feels like <span className="text-primary">family</span>, not a
        shift
      </h2>
      <p className="mt-4 max-w-xl text-center">
        Fourteen years of helping families in Sylhet find dependable, dignified
        care for the people they love most.
      </p>
      <div className="grid-3 debug_ mt-16 gap-10">
        {PERKS.map(({ Icon, ...item }, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex-cc size-12 shrink-0 rounded-full bg-primary-foreground">
              <Icon size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{item.label}</h3>
              <p className="mt-1 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PERKS = [
  {
    label: "Round-the-clock watch",
    description: "A caregiver is always nearby, day and night.",
    Icon: IconShield,
  },
  {
    label: "Trained, background-checked staff",
    description: "Every caregiver is certified and vetted.",
    Icon: IconStar,
  },
  {
    label: "A real home setting",
    description: "Comfortable rooms, home-cooked meals, familiar routines.",
    Icon: IconHome,
  },
];
