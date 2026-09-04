import Link from "next/link";
import { Button } from "../ui/button";
import { APP } from "@/constants/APP";

export const Nav = () => (
  <section className="bg-card h-24 flex-cc">
    <div className="container flex-cb">
      <figure className="flex-cx gap-3">
        <img src="/android-chrome-192x192.png" alt="" className="size-[70px]" />
        <figcaption>
          <h1 className="text-2xl font-bold">{APP.name}</h1>
          <p className="-mt-1 text-sm_ text-accent font-medium">{APP.title}</p>
        </figcaption>
      </figure>
      <div className="flex-cb gap-6">
        <nav className="flex-cx gap-4">
          {["Home", "About", "Services", "Pages", "News", "Contact"].map(
            (item, i) => (
              <Link key={i} href="/" className="font-semibold text-lg">
                {item}
              </Link>
            ),
          )}
        </nav>
        <Button className="h-[44px] px-6" variant="secondary">
          Book Appointment
        </Button>
      </div>
    </div>
  </section>
);
