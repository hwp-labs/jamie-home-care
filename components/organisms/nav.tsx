import Link from "next/link";
import { MENU } from "@/constants/MENU";

export const Nav = () => (
  <nav className="flex-cx gap-5">
    {MENU.map((item, i) => (
      <Link key={i} href={item.path} className="text-lg_ font-semibold">
        {item.label}
      </Link>
    ))}
  </nav>
);
