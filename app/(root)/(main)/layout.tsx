import { Header } from "@/components/organisms/header";
import { Nav } from "@/components/organisms/nav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Nav />
      {children}
    </>
  );
}
