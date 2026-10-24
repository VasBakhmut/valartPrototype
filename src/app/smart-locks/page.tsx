import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight,Fingerprint,Key,Password,DeviceMobile} from "@phosphor-icons/react/dist/ssr";
import {LockCatalog} from "@/components/LockCatalog";
import {locks} from "@/data/catalog";

export const metadata:Metadata={
 title:"Smart Door Locks Australia | VALART Melbourne",
 description:"Compare VALART smart door locks with fingerprint, PIN, RFID, key and app access for aluminium entrance doors in Melbourne and across Australia.",
 alternates:{canonical:"/smart-locks"},
};

export default function LocksPage(){return <>
 <section className="page-hero dark-page locks-hero"><div><span className="eyebrow">Intelligent access · Australia</span><h1>Security without<br/>the visual noise.</h1><p>Compare {locks.length} slim smart-lock models for architectural aluminium entrances. Choose the access methods you need, then confirm compatibility and installation with VALART.</p><div className="button-row"><a className="button inverse" href="#lock-library">Compare models <ArrowRight/></a><Link className="button outline lock-hero-secondary" href="/configure">Configure an entrance</Link></div></div><div className="lock-hero-object"><span className="lock-scan-line"/><Image src="/images/locks/Z8.jpg" alt="VALART Z8 slim smart lock" fill priority sizes="55vw"/><div className="lock-hero-readout"><span>MODEL</span><b>Z8</b><span>FULL-AUTOMATIC ACCESS</span></div></div></section>
 <section className="access-strip" aria-label="Available smart lock access methods"><div><Fingerprint/><span>Fingerprint</span></div><div><Password/><span>PIN code</span></div><div><DeviceMobile/><span>Mobile app</span></div><div><Key/><span>Mechanical key</span></div></section>
 <section className="lock-principle"><div><span className="eyebrow">One entrance · multiple credentials</span><h2>Access should fit the people using it.</h2></div><div className="lock-principle-grid"><article><span>Everyday</span><h3>Fast personal access</h3><p>Fingerprint and PIN entry for residents without relying on a physical key.</p></article><article><span>Managed</span><h3>App-based control</h3><p>Model-dependent Tuya, TTLock or Xhome integration for connected access.</p></article><article><span>Fallback</span><h3>Practical redundancy</h3><p>RFID and mechanical-key options maintain flexible ways to enter.</p></article></div></section>
 <section className="section lock-library-section" id="lock-library"><div className="section-heading horizontal"><div><span className="eyebrow">Smart-lock catalogue</span><h2>Compare the range.</h2></div><p>Indicative prototype pricing in AUD. Final price, door compatibility and installation are confirmed before purchase.</p></div><LockCatalog/></section>
 </>}
