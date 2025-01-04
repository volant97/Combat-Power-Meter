import Footer from "./footer/Footer";
import Header from "./header/Header";

interface Props {
  children: React.ReactNode;
}

export default function LayoutContainer({ children }: Props) {
  return (
    <>
      <Header />
      <main className="w-full h-[calc(100dvh-18dvh)] px-6 py-8 overflow-y-auto overflow-x-hidden scrollbar-hide antialiased bg-bgc1">
        {children}
      </main>
      <Footer />
    </>
  );
}
