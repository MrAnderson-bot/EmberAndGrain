import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ember & Grain | Rustic Cafe — Braidwood, NSW",
  description:
    "Specialty coffee and house-baked goods in the heart of Braidwood. Locally sourced, house roasted, baked daily.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
