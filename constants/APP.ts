export const APP_NAME = "Jamie Home Health Care";
export const DOMAIN = "jamiehomecare.ca";

export const APP = {
  name: APP_NAME,
  shortName: "Jamie Care",
  slug: "jamie-care",
  abbr: "JHHC",
  title: "Care You Can Trust!",
  titleLong: `${APP_NAME} - Care You Can Trust!`,
  colors: {
    cream: "#f6ece2",
    orange: "#d24e38",
    maroon: "#690b1d",
  },
  website: `https://${DOMAIN}`,
  domain: DOMAIN,
  email: `info@${DOMAIN}`,
  tel: "(382)-885-4216",
  telHref: "tel:+13828854216",
  address: "152 Stamson Street. N2R OV2, Kitchener, Ontario, Canada.",
  workHours: "Monday to Friday, 9.00 - 17.00",
  socials: {
    fb: "https://facebook.com/profile.php?id=61594527770465",
    ig: "",
    x: "",
    yt: "",
  },
} as const;

export const COPY = {
  weProvide: "We provide support for seniors and individuals with disabilities",
} as const;
