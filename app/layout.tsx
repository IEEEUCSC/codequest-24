import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenisWrapper from "@/components/LenisWrapper";
import { META_DESC, META_TITLE } from "@/libs/data";
import { prime } from "@/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    images: [
      {
        url: "/public/og-img.png",
        width: 1200,
        height: 630,
        alt: "Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
    images: ["/public/og-img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisWrapper>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${prime.variable} bg-dark-300 font-prime relative antialiased`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </LenisWrapper>
    </html>
  );
}
