import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";

interface Props {
  variant?: "default" | "footer";
}
export const Logo = ({ variant = "default" }: Props) => {
  return (
    <Link href={PATH.home} className="flex items-center gap-3">
      <Image src="/logo.png" alt="" width={44} height={44} priority loading="eager" />
      <span
        className={clsx(
          "text-brand-dark text-xl font-extrabold",
          variant === "footer" && "text-white",
        )}
      >
        {APP.name}
      </span>
    </Link>
  );
};
