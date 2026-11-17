export const PATH = {
  nil: "#",
  home: "/",
  about: "/about",
  services: "/services",
  careers: "/careers",
  faqs: "/faqs",
  contactUs: "/contact-us",
  bookAppointment: "/book-appointment",
  privacyPolicy: "/privacy-policy",
} as const;

export const PATHS = Object.values(PATH).filter((path) => path !== "#");
