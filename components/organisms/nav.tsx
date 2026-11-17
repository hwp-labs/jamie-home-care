"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MENU } from "@/constants/MENU";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center gap-8 font-semibold lg:flex">
      {MENU.map((item) => {
        const isActive = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);

        return (
          <li key={item.path}>
            <Link
              href={item.path}
              aria-current={isActive ? "page" : undefined}
              className={clsx(
                "hover:text-brand transition-colors",
                isActive && "text-brand font-bold",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
