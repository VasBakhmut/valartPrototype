import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://valart.com.au"),
  title: { default: "VALART | Premium Entrance Doors & Smart Locks Melbourne", template: "%s | VALART" },
  description: "Configure premium custom entrance doors and discover smart locks for modern Melbourne homes.",
  openGraph: { title: "VALART — A stronger first impression", description: "Premium entrance doors and intelligent access.", images: ["/images/hero-valart.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${mono.variable}`}><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>;
}
