import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "전투력 측정기",
  description: "Combat Power Meter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="mx-auto max-w-md h-[100dvh] overflow-y-hidden">
        <Header />
        <main className="w-full h-[calc(100dvh-18dvh)] px-6 py-8 overflow-y-auto overflow-x-hidden scrollbar-hide antialiased">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
