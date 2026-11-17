import Link from "next/link";
import { CUR_YEAR } from "@/constants";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";

export function Copyright() {
  return (
    <div className="border-t border-white/15 py-5 text-sm_ text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 sm:flex-row">
        <p>
          &copy; {CUR_YEAR} {APP.name}. All rights reserved.
        </p>
        <Link href={PATH.privacyPolicy} className="hover:text-white hover:underline">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
