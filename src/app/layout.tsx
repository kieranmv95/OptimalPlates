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
    "Optimal Plates is the ultimate barbell plate calculator app for lifters, powerlifters, and gym enthusiasts. Instantly calculate the perfect plate combination for your Olympic barbell in KG or LBS, visualize your setup, and optimize your workouts. Community-driven, no subscriptions, and coming soon to iOS and Android.",
  keywords: [
    "barbell calculator",
    "plate calculator",
    "gym app",
    "powerlifting",
    "weightlifting",
    "barbell math",
    "Olympic barbell",
    "plate math",
    "strength training",
    "fitness app",
    "community driven",
    "iOS",
    "Android",
    "Optimal Plates",
    "Tempered Strength",
  ],
  openGraph: {
    title:
      "Optimal Plates – Barbell Plate Calculator App for Gym & Powerlifting",
    description:
      "Calculate the perfect plate combination for your Olympic barbell. Visualize your setup, optimize your gym sessions, and join a community of lifters. No subscriptions, just one-time payment. Available soon on iOS and Android.",
    url: "https://optimalplates.com",
    siteName: "Optimal Plates",
    type: "website",
  },
  metadataBase: new URL("https://optimalplates.com"),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
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
