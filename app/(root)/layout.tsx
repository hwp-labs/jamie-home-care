import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import { SITE_NAME, SITE_URL } from "@/constants/SITE";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jamie Home Care - Care You Can Trust!",
  description:
    "Trained caregivers, warm companionship and round-the-clock support for seniors and individuals with disabilities in Kitchener, Ontario.",
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_CA",
    images: [{ url: "/images/banner-1.jpeg", alt: "Jamie Home Care caregiver with a senior" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/banner-1.jpeg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="bg-cream font-sans text-lg text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}