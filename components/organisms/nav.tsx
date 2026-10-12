"use client";

import { MENU } from "@/constants/MENU";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center gap-8 font-semibold lg:flex">
      {MENU.map((item) => {
        const isActive =
          item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);

        return (
          <li key={item.path}>
            <Link
              href={item.path}
              aria-current={isActive ? "page" : undefined}
              className={clsx(
                "transition-colors hover:text-brand",
                isActive && "text-brand",
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
