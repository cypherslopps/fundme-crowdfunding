import { Metadata } from "next";
import { Barlow_Condensed, Bebas_Neue } from 'next/font/google'

import "./globals.css";
import Providers from "@/providers/Providers";
import Navigation from "@/components/Navigation";

export const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
});

export const barlowCondensed = Barlow_Condensed({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow-condensed',
});

export const metadata: Metadata = {
  title: "FundME",
  description: "Crowdfunding DApp",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${barlowCondensed.variable} ${bebasNeue.variable} overflow-x-clip`}
      >
        {/* Navigation */}
        <Navigation />

        <Providers>
          <main className="mt-24 mb-6 px-1.5 msm:px-3 md:px-4 lg:px-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
