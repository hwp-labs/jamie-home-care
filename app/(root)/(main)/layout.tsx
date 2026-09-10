import { Ribbon } from "@/components/organisms/ribbon";
import { Header } from "@/components/organisms/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Ribbon />
      <Header />
      {children}
    </>
  );
}
