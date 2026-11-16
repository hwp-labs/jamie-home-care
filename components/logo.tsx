import Link from "next/link";
import Image from "next/image";
import { APP } from "@/constants/APP";
import clsx from "clsx";

interface Props {
  alt?: boolean;
}
export const Logo = ({ alt }: Props) => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo.png" alt="" width={44} height={44} />
      <span className={clsx("text-xl font-extrabold", alt ? "text-white" : "text-brand-dark")}>
        {APP.name}
      </span>
    </Link>
  );
};
