import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
        <header className="flex justify-center items-center h-[8dvh] p-2 border-2 border-gray-500">
          <Link href={"/"}>전투력 측정기</Link>
        </header>
        <main className="w-full h-[82dvh] px-6 py-8 overflow-y-auto overflow-x-hidden scrollbar-hide antialiased border-2 border-gray-500">
          {children}
        </main>
        <footer className="flex justify-center items-center h-[10dvh] p-2 border-2 border-gray-500">
          <Link href={"/"}>홈</Link>
        </footer>
      </body>
    </html>
  );
}
