import { APP } from "./APP";

export const META = {
  metadataBase: new URL(APP.website),
  applicationName: APP.name,
  title: {
    default: APP.titleLong,
    template: `%s | ${APP.name}`,
  },
  description: APP.description,
  openGraph: {
    type: "website",
    siteName: APP.name,
    locale: "en_CA",
    images: [{ url: "/social-preview.png", alt: "" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/social-preview.png"],
  },
};
