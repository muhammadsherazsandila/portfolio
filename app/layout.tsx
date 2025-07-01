import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RippleEffect from "./components/RippleEffect";
import ArrowUp from "./components/ArrowUp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Sheraz | Full Stack Developer",
  description: "Welcome to my personal portfolio website.",
  icons: {
    icon: "/Images/favicon.png",
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
        <RippleEffect />
        <ArrowUp />
        {children}
      </body>
    </html>
  );
}
