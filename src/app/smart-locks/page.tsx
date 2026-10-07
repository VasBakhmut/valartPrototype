import type { Metadata } from "next";
import Image from "next/image";
import { LockCard } from "@/components/LockCard";
import { locks } from "@/data/catalog";

export const metadata: Metadata = { title: "Smart Door Locks Australia", description: "Compare fingerprint, PIN, RFID, app-connected and full-automatic smart locks for aluminium doors." };
export default function LocksPage() { return <><section className="page-hero dark-page"><div><span className="eyebrow">Intelligent access</span><h1>Security without<br/>the visual noise.</h1><p>A focused range of slim smart locks for aluminium entrance doors, from fingerprint access to full-automatic face and palm options.</p></div><Image src="/images/locks/Z8.jpg" alt="Z8 slim smart lock" fill priority sizes="55vw"/></section><section className="section"><div className="section-heading horizontal"><div><span className="eyebrow">All supplied models</span><h2>{locks.length} base models.<br/>More ways to enter.</h2></div><p>Demo pricing in AUD. Final product, compatibility and installation details will be confirmed before launch.</p></div><div className="lock-grid">{locks.map((lock) => <LockCard key={lock.slug} lock={lock}/>)}</div></section></>; }
