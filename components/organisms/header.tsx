import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { APP } from "@/constants/APP";

export const Header = () => (
  <header className="flex-cc h-12 bg-primary text-sm text-primary-foreground">
    <div className="flex-cb container">
      <ul className="flex-cx gap-2">
        <li>{APP.tel}</li>
        <li>|</li>
        <li>{APP.address}</li>
        <li>|</li>
        <li>{APP.workHours}</li>
      </ul>
      <ul className="flex-cx gap-4">
        <li className="flex-cc size-[24px] rounded-full bg-primary-foreground">
          <a href="" title="Facebook">
            <IconBrandFacebook className="size-[16px] text-primary" />
          </a>
        </li>
        <li className="flex-cc size-[24px] rounded-full bg-primary-foreground">
          <a href="" title="Instagram">
            <IconBrandInstagram className="size-[16px] text-primary" />
          </a>
        </li>
        <li className="flex-cc size-[24px] rounded-full bg-primary-foreground">
          <a href="" title="Twitter">
            <IconBrandTwitter className="size-[16px] text-primary" />
          </a>
        </li>
        <li className="flex-cc size-[24px] rounded-full bg-primary-foreground">
          <a href="" title="YouTube">
            <IconBrandYoutube className="size-[16px] text-primary" />
          </a>
        </li>
      </ul>
    </div>
  </header>
);
