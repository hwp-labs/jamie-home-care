export const APP_NAME = "Jamie Home Health Care";
export const APP_DOMAIN = "jamiehomecare.ca";
export const APP_ADDRESS = "152 Stamson Street. N2R OV2, Kitchener, Ontario, Canada.";
export const APP_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(APP_ADDRESS)}`;

export const APP = {
  name: APP_NAME,
  shortName: "Jamie Care",
  slug: "jamie-care",
  abbr: "JHHC",
  title: "Care You Can Trust!",
  titleLong: `${APP_NAME} - Care You Can Trust!`,
  description:
    "Trained caregivers, warm companionship and round-the-clock support for seniors and individuals with disabilities in Kitchener, Ontario.",
  colors: {
    cream: "#f6ece2",
    orange: "#d24e38",
    maroon: "#690b1d",
  },
  website: `https://${APP_DOMAIN}`,
  domain: APP_DOMAIN,
  email: `info@${APP_DOMAIN}`,
  emailInfo: `info@${APP_DOMAIN}`,
  emailNoReply: `no-reply@${APP_DOMAIN}`,
  tel: "(382)-885-4216",
  telHref: "tel:+13828854216",
  address: APP_ADDRESS,
  workHours: "Monday to Friday, 9.00 - 17.00",
  socials: {
    fb: "https://facebook.com/profile.php?id=61594527770465",
    ig: "",
    x: "",
    yt: "",
  },
  startDate: "2026-08-20",
  launchDate: "2026-10-05",
} as const;

export const COPY = {
  weProvide: "We provide support for seniors and individuals with disabilities",
} as const;
