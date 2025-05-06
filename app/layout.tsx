import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenisWrapper from "@/components/LenisWrapper";
import { META_DESC, META_TITLE, SITE_LINK } from "@/libs/data";
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
  metadataBase: new URL(SITE_LINK),

  openGraph: {
    type: "website",
    url: SITE_LINK,
    title: META_TITLE,
    description: META_DESC,
    images: [
      {
        url: "/og-img.png",
        alt: "Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_LINK,
    title: META_TITLE,
    description: META_DESC,
    images: ["/og-img.png"],
  },

  other: {
    flag: "Y29kZXF1ZXN0e3kwdV9kMWRuN19mMW5kXzdoM19mbDQ2XzdoM19mbDQ2X2YwdW5kX3kwdX0",
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
