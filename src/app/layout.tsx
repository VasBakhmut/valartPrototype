import type {Metadata} from "next";
import {IBM_Plex_Mono,Manrope} from "next/font/google";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import "./globals.css";
const manrope=Manrope({subsets:["latin"],variable:"--font-manrope",display:"swap",preload:true});
const mono=IBM_Plex_Mono({subsets:["latin"],weight:["400","500"],variable:"--font-mono",display:"swap",preload:true});
const deploymentHost=process.env.VERCEL_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL ?? (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");
export const metadata:Metadata={
 metadataBase:new URL(siteUrl),
 title:{default:"VALART | Premium Entrance Doors & Smart Locks Melbourne",template:"%s | VALART"},
 description:"Configure premium custom entrance doors and discover smart locks for modern Melbourne homes.",
 applicationName:"VALART",category:"Home improvement",creator:"VALART",publisher:"VALART",
 keywords:["custom entrance doors Melbourne","aluminium entrance doors","pivot doors Melbourne","smart door locks Australia","architectural doors"],
 robots:{index:true,follow:true},
 openGraph:{type:"website",locale:"en_AU",url:"/",siteName:"VALART",title:"VALART — Premium Entrance Doors & Smart Locks Melbourne",description:"Architectural entrance doors and intelligent security, configured for modern Australian homes."},
 twitter:{card:"summary_large_image",title:"VALART — Premium Entrance Doors & Smart Locks Melbourne",description:"Architectural entrance doors and intelligent security for modern Australian homes."},
};
const organisation={"@context":"https://schema.org","@type":"Organization",name:"VALART",url:"https://valart.com.au",logo:"https://valart.com.au/brand/valart-black.svg",description:"Premium entrance doors and intelligent access for Australian homes.",areaServed:{"@type":"City",name:"Melbourne"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en-AU"><body className={`${manrope.variable} ${mono.variable}`}><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organisation)}}/></body></html>;}
