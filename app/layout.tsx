import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "stockinsights.ai",
  description: "AI-powered tool for qualitative stock insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-w-screen min-h-screen bg-[#ebe6e6]">{children}</div>
      </body>
    </html>
  );
}
