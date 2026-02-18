import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://listnerzone.in'),
  title: "ListnerZone - Anonymous Emotional Support & Active Listening",
  description: "A digital sanctuary for anonymous emotional support. Connect with compassionate listeners who understand, without judgment. Speak your truth and find your inner peace.",
  keywords: ["emotional support", "anonymous chat", "active listening", "mental wellness", "listnerzone", "peace of mind", "talk to someone"],
  authors: [{ name: "ListnerZone Team" }],
  openGraph: {
    title: "ListnerZone - Find Your Inner Peace",
    description: "Connect with compassionate listeners anonymously. Your safe harbor for emotional support.",
    url: "https://listnerzone.in",
    siteName: "ListnerZone",
    images: [
      {
        url: "/images/hero_banner_premium.png",
        width: 1200,
        height: 630,
        alt: "ListnerZone - Find Your Inner Peace",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ListnerZone - Find Your Inner Peace",
    description: "Anonymous emotional support and active listening.",
    images: ["/images/hero_banner_premium.png"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
