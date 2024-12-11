import type { Metadata } from "next";
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
    <html lang="ko" className="mx-auto max-w-md h-[100dvh] overflow-y-hidden">
      <body className="border-2">
        <header className="h-[10dvh] p-2 border-2 border-gray-500">
          header
        </header>
        <main className="h-[90dvh] px-6 py-8 overflow-y-auto overflow-x-hidden scrollbar-hide antialiased border-2 border-gray-500">
          {children}
        </main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
