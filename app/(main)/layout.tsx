import "@/styles/globals.css";
//
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
//
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import { META } from "@/constants/META";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = META;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="bg-cream text-ink font-sans text-lg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
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
