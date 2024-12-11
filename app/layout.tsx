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
      <body className="w-full h-[100dvh] px-6 py-8 overflow-y-auto overflow-x-hidden scrollbar-hide antialiased border-2">
        {children}
      </body>
    </html>
  );
}
