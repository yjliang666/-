import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "雨姐咖啡 | 汕头大学东海岸校区精品咖啡馆",
  description:
    "雨姐咖啡 · 汕头大学东海岸校区 · 营业时间 08:00–22:00 · 一家主打极简美学与精品咖啡的小店。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
