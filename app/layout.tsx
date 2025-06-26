import { Metadata } from "next";
import { Barlow_Condensed, Bebas_Neue } from 'next/font/google'

import "./globals.css";
import Providers from "@/providers/Providers";
import Navigation from "@/components/Navigation";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow"
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas"
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
        className={`antialiased ${barlowCondensed.variable} ${bebasNeue.variable}`}
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
