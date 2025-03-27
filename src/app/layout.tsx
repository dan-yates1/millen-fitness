import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import SessionProviderWrapper from "@/components/providers/SessionProviderWrapper"; // Import the wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Millen Fitness - Online Transformation Coach",
  description:
    "Millen Galliven - Online Transformation Coach helping people stay lean without sacrificing their weekend. Offering online coaching, meal planning, and gym programs.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
       >
         {/* Wrap children with the SessionProviderWrapper */}
         <SessionProviderWrapper>
           {children}
           <Analytics />
         </SessionProviderWrapper>
       </body>
    </html>
  );
}
