import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Logo } from "../logo";
import { Copyright } from "./copyright";
import { Newsletter } from "./newsletter";
import { APP } from "@/constants/APP";
import { MENU_FOOTER } from "@/constants/MENU";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Logo variant="footer" />
          <p className="mt-3 text-white/80">{APP.address}</p>
          <ul className="mt-5 space-y-2 text-white/90">
            <li className="flex items-center gap-2">
              <PhoneIcon className="size-4 min-w-4" />
              <a href={APP.telHref} className="hover:underline">
                {APP.tel}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="size-4 min-w-4" />
              <a href="mailto:info@jamiehomecare.ca" className="hover:underline">
                {APP.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="flex-cc_">
            <h4 className="text-lg font-bold">Helpful links</h4>
            <ul className="mt-4 space-y-2">
              {MENU_FOOTER.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-white/80 hover:text-white hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Newsletter />
      </div>
      <Copyright />
    </footer>
  );
}
