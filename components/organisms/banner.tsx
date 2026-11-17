import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { APP } from "@/constants/APP";

export function Banner() {
  return (
    <div className="bg-brand-dark hidden text-sm text-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <div className="flex flex-row gap-4">
          <span className="flex items-center gap-2">
            <PhoneIcon className="size-4" /> {APP.tel}
          </span>
          <span className="flex items-center gap-2">
            <MailIcon className="size-4" /> {APP.email}
          </span>
        </div>
        <span className="flex items-center gap-2">
          <MapPinIcon className="size-4" />
          {APP.address}
        </span>
      </div>
    </div>
  );
}
