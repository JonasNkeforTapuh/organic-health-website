import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Organic Stemcell Health & Wealth Ltd",

  description:
    "Restoring health, creating wealth and transforming lives through trusted organic wellness solutions and empowerment programs.",

  keywords: [
    "Organic Health",
    "Stemcell",
    "Wellness",
    "Health Products",
    "Nigeria",
    "Empowerment",
    "Natural Healthcare"
  ],

  authors:[
    {
      name:"Organic Stemcell Health & Wealth Ltd"
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
