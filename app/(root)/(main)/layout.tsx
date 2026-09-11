import { Ribbon } from "@/components/organisms/ribbon";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";

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
      <Footer />
    </>
  );
}
