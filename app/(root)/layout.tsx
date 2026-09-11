import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";
import { fontBody, fontHeading } from "@/constants/FONT";
import { APP } from "@/constants/APP";

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
      className={clsx("antialiased", fontHeading.variable, fontBody.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
