import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import BackgroundMesh from "@/components/BackgroundMesh";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "CCE Hackathon | Department of Computer & Communication Engineering",
  description: "The premier collegiate hackathon presented by CCE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${playfair.variable} min-h-screen bg-[#060208] text-[#f8fafc] antialiased selection:bg-[#ff7eb6]/30 selection:text-white relative`}
      >
        <BackgroundMesh />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}