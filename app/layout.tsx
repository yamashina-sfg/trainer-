import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "@/components/AppHeader";

export const metadata: Metadata = {
  title: "SFG 怪我サポートアプリ",
  description: "スポーツで怪我をした選手が匿名で相談できるSFGのMVPプロトタイプ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
