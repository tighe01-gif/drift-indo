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
  title: "DRIFT INDO | Indonesia Adventure Expeditions",
  description:
    "Explore Indonesia beyond the guidebook. Small-group adventure expeditions combining island hopping, exploration, camping and world-class diving.",
  keywords: [
    "Indonesia Adventure Tours",
    "Indonesia Expeditions",
    "Adventure Travel Indonesia",
    "Indonesia Van Life",
    "Scuba Adventure Indonesia",
    "Island Hopping Indonesia",
  ],
  openGraph: {
    title: "DRIFT INDO | Discover The Real Indonesia",
    description:
      "Explore Indonesia beyond the guidebook. Small-group adventure expeditions. Explore Further.",
    type: "website",
    locale: "en_US",
    siteName: "Drift Indo",
  },
  twitter: {
    card: "summary_large_image",
    title: "DRIFT INDO | Indonesia Adventure Expeditions",
    description:
      "Travel across Indonesia by expedition vehicle. Adventure. Exploration. Freedom.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
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
