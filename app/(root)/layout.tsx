import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { APP } from "@/constants/APP";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: APP.titleLong,
    template: `%s | ${APP.name}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body>{children}</body>
    </html>
  );
}
