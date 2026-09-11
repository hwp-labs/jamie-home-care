import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { APP } from "@/constants/APP";

export const Ribbon = () => (
  <header className="flex-cc h-12 bg-primary text-sm text-primary-foreground">
    <div className="flex-cb app-container">
      <ul className="flex-cx gap-2">
        <li>{APP.tel}</li>
        <li>|</li>
        <li>{APP.address}</li>
        <li>|</li>
        <li>{APP.workHours}</li>
      </ul>
      <ul className="flex-cx gap-4">
        {SOCIAL.map(({ Icon, ...item }, i) => (
          <li
            key={i}
            className="flex-cc size-[24px] rounded-full bg-primary-foreground"
          >
            <a href={item.url} title={item.label} target="_blank">
              <Icon className="size-[16px] text-primary" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </header>
);

const SOCIAL = [
  {
    label: "Facebook",
    url: APP.socials.fb,
    Icon: IconBrandFacebook,
  },
  {
    label: "Instagram",
    url: APP.socials.ig,
    Icon: IconBrandInstagram,
  },
  {
    label: "Twitter",
    url: APP.socials.x,
    Icon: IconBrandTwitter,
  },
  {
    label: "YouTube",
    url: APP.socials.yt,
    Icon: IconBrandYoutube,
  },
];
