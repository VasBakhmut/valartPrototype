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
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: "VALART",
    title: "VALART — Premium Entrance Doors & Smart Locks Melbourne",
    description: "Architectural entrance doors and intelligent security, configured for modern Australian homes.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VALART premium entrance doors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VALART — Premium Entrance Doors & Smart Locks Melbourne",
    description: "Architectural entrance doors and intelligent security for modern Australian homes.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${mono.variable}`}><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>;
}
