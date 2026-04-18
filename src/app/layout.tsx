import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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

export const metadata: Metadata = {
  title: "Optimal Plates – Barbell Plate Calculator App for Gym & Powerlifting",
  description:
    "Optimal Plates is the ultimate barbell plate calculator app for lifters, powerlifters, and gym enthusiasts. Instantly calculate the perfect plate combination for your Olympic barbell in KG or LBS, visualize your setup, and optimize your workouts. Community-driven, completely free on iOS — no subscriptions, no ads.",
  keywords: [
    "barbell calculator",
    "plate calculator",
    "gym app",
    "powerlifting",
    "weightlifting",
    "barbell math",
    "Olympic barbell",
    "plate math",
    "kg and lbs calculator",
    "strength training",
    "fitness app",
    "free fitness app",
    "community driven",
    "iOS",
    "Optimal Plates",
    "Tempered Strength",
  ],
  openGraph: {
    title:
      "Optimal Plates – Barbell Plate Calculator App for Gym & Powerlifting",
    description:
      "Calculate the perfect plate combination for your Olympic barbell in KG or LBS. Visualize your setup, optimize your gym sessions, and join a community of lifters. Completely free on iOS — no subscriptions, no ads.",
    url: "https://optimalplates.com",
    siteName: "Optimal Plates",
    type: "website",
  },
  metadataBase: new URL("https://optimalplates.com"),
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  other: {
    "apple-mobile-web-app-status-bar-style": "black",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
