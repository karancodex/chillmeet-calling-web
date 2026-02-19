import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#05070A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://listnerzone.com'),
  title: {
    default: "ListnerZone - Anonymous Emotional Support & Active Listening",
    template: "%s | ListnerZone"
  },
  description: "A digital sanctuary for anonymous emotional support. Connect with compassionate listeners who understand, without judgment. Speak your truth and find your inner peace.",
  keywords: [
    "emotional support", "anonymous chat", "active listening", "mental wellness",
    "listnerzone", "peace of mind", "talk to someone", "mental health support",
    "anonymous listening", "online vent", "healing conversation"
  ],
  authors: [{ name: "ListnerZone Team", url: "https://listnerzone.com" }],
  creator: "ListnerZone",
  publisher: "ListnerZone",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ListnerZone - Find Your Inner Peace",
    description: "Connect with compassionate listeners anonymously. Your safe harbor for emotional support.",
    url: "https://listnerzone.com",
    siteName: "ListnerZone",
    images: [
      {
        url: "/images/hero_banner_premium.png",
        width: 1200,
        height: 630,
        alt: "ListnerZone - Anonymous Emotional Support",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ListnerZone - Anonymous Emotional Support",
    description: "Speak your truth anonymously. Compassionate listeners available 24/7.",
    images: ["/images/hero_banner_premium.png"],
    creator: "@listnerzone",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "KlRyFDGrvckyqxAo3nJjhcCQ1ibo9jNlvpnjF4GZOi4",
  },
  category: 'health',
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
