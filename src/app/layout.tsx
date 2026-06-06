import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indo Explorers | Indonesia's First Mobile Scuba Diving & Adventure Expedition Company",
  description:
    "Join a small group expedition and travel across Indonesia discovering hidden dive sites, remote beaches, volcanoes, waterfalls and unforgettable adventures. Travel by expedition vehicle. Dive incredible locations. Camp under the stars.",
  keywords: [
    "Indonesia expedition",
    "scuba diving Indonesia",
    "adventure travel",
    "mobile diving",
    "island hopping",
    "Komodo",
    "Raja Ampat",
    "expedition travel",
  ],
  openGraph: {
    title: "Indo Explorers | Discover The Real Indonesia",
    description:
      "Indonesia's first mobile scuba diving and adventure expedition company. Explore Further.",
    type: "website",
    locale: "en_US",
    siteName: "Indo Explorers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indo Explorers | Discover The Real Indonesia",
    description:
      "Join a small group expedition across Indonesia. Scuba diving. Adventure. Exploration.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-navy text-off-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
