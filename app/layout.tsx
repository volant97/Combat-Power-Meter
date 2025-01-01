import type { Metadata } from "next";
import Provider from "@/components/provider/Provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "전투력 측정기",
  description: "Combat Power Meter",
  // icons: {
  //   icon: '/favicon.png'
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="mx-auto max-w-md h-[100dvh] overflow-y-hidden">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
