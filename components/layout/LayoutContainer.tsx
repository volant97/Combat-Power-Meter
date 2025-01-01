import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

export default function LayoutContainer({ children }: Props) {
  return (
    <Fragment>
      <Header />
      <main className="w-full h-[calc(100dvh-18dvh)] px-6 py-8 overflow-y-auto overflow-x-hidden scrollbar-hide antialiased">
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}
