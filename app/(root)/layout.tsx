import { Work_Sans, Fraunces } from 'next/font/google';

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { APP } from "@/constants/APP";

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
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
        workSans.variable,
        fraunces.variable,
      )}
    >
      <body>{children}</body>
    </html>
  );
}
