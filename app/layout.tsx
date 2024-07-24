import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppBar } from "@/Components/AppBar";

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
        <div className="min-w-screen min-h-screen">
          <div className="fixed top-0 left-0 right-0 z-50">
            <AppBar />
          </div>
          <div className="pt-[72px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
