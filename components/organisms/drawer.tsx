"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MENU } from "@/constants/MENU";
import clsx from "clsx";

export const Drawer = () => {
  const pathname = usePathname();

  return (
    <details className="group relative lg:hidden">
      <summary
        aria-label="Open menu"
        className="flex cursor-pointer list-none items-center rounded-md border p-2 [&::-webkit-details-marker]:hidden"
      >
        <Menu className="size-6" />
      </summary>
      <ul className="absolute right-0 mt-3 w-64 space-y-1 rounded-xl border bg-white p-3 shadow-lg">
        {MENU.map((item) => {
          const isActive =
            item.path === "/"
              ? pathname === "/"
              : pathname.startsWith(item.path);

          return (
            <li key={item.path}>
              <Link
                href={item.path}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "block rounded-md px-3 py-2 font-semibold hover:bg-brand-soft",
                  isActive && "text-brand",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href="/book-appointment"
            className="mt-2 block rounded-full bg-accent px-3 py-3 text-center font-bold text-white"
          >
            Book Appointment
          </Link>
        </li>
      </ul>
    </details>
  );
};
