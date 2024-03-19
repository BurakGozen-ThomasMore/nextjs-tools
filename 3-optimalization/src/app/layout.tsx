import { cn } from "@/lib/classnames";
import { fontMono, fontSans, fontSerif } from "@/lib/font";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optimalization",
  description: "Example of optimalization in Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={cn(
          fontMono.variable,
          fontSerif.variable,
          fontSans.variable,
          "bg-slate-100 font-mono",
        )}
      >
        {children}
      </body>
      <GoogleTagManager gtmId="GTM-XYZ" />
    </html>
  );
}
