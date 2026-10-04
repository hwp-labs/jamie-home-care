import { APP } from "@/constants/APP";
import Link from "next/link";

type Action = { label: string; href: string };

type BannerProps = {
  title?: string;
  text?: string;
  primary?: Action;
  secondary?: Action;
};

const DEFAULT_PRIMARY: Action = { label: "Book Appointment", href: "/book-appointment" };
const DEFAULT_SECONDARY: Action = { label: `Call ${APP.tel}`, href: APP.telHref };

function ActionLink({ action, className }: { action: Action; className: string }) {
  const isNative = action.href.startsWith("mailto:") || action.href.startsWith("tel:");
  return isNative ? (
    <a href={action.href} className={className}>
      {action.label}
    </a>
  ) : (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  );
}

export function Banner({
  title = "Ready to talk about care for your loved one?",
  text = "Our team is available every day from 9:00 to 17:00.",
  primary = DEFAULT_PRIMARY,
  secondary = DEFAULT_SECONDARY,
}: BannerProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-[2rem] bg-brand-dark px-8 py-14 text-center text-white sm:px-16">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ActionLink
            action={primary}
            className="rounded-full bg-accent px-8 py-4 font-semibold text-white transition hover:brightness-95"
          />
          <ActionLink
            action={secondary}
            className="rounded-full border-2 border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-brand-dark"
          />
        </div>
      </div>
    </section>
  );
}