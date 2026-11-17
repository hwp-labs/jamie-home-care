import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { APP, APP_DIRECTIONS_URL } from "@/constants/APP";

export const GetInTouch = () => {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-brand-dark text-3xl font-bold">Get in touch</h2>
      <ul className="mt-8 space-y-4">
        {[
          {
            label: "Phone",
            value: APP.tel,
            href: APP.telHref,
            Icon: PhoneIcon,
          },
          {
            label: "Email",
            value: APP.emailInfo,
            href: `mailto:${APP.emailInfo}`,
            Icon: MailIcon,
          },
          {
            label: "Address",
            value: APP.address,
            href: APP_DIRECTIONS_URL,
            Icon: MapPinIcon,
          },
        ].map(({ Icon, href, ...item }) => (
          <li
            key={item.label}
            className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-black/5"
          >
            <span className="bg-brand flex size-12 shrink-0 items-center justify-center rounded-xl text-white">
              <Icon className="size-6" aria-hidden />
            </span>
            <div>
              <p className="text-base font-semibold">{item.label}</p>
              {href ? (
                <a
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-muted hover:text-brand underline-offset-4 hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-muted">{item.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
