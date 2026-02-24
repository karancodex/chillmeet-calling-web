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
  title: "Someone to Talk to Online | Anonymous Conversation | ListenerZone",
  description: "Feeling lonely and need someone to talk? ListenerZone offers private, anonymous listening sessions. Vent to someone online without judgement today.",
  keywords: [
    "emotional support", "anonymous chat", "active listening", "mental wellness",
    "listnerzone", "peace of mind", "talk to someone", "mental health support",
    "anonymous listening", "online vent", "healing conversation",
    "private vent online", "lonely talk to someone", "low cost emotional support",
    "anonymous calling platform", "safe space to talk", "listen to me online",
    "someone to talk to when lonely", "venting without judgement",
    "mental health companion", "anonymous empathy", "online listening service"
  ],
  authors: [{ name: "ListnerZone Team", url: "https://listnerzone.com" }],
  creator: "ListnerZone",
  publisher: "ListnerZone",
  openGraph: {
    title: "Someone to Talk to When The World Feels Too Loud. | ListenerZone",
    description: "Feeling overwhelmed? ListenerZone offers private, anonymous listening sessions. Talk to someone online without judgement today.",
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
    title: "Someone to Talk to When The World Feels Too Loud. | ListenerZone",
    description: "Feeling overwhelmed? ListenerZone offers private, anonymous listening sessions. Talk to someone online without judgement today.",
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

import BottomNav from "@/components/ui/BottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
