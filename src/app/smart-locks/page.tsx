import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight,CreditCard,DeviceMobile,Fingerprint,Password} from "@phosphor-icons/react/dist/ssr";
import {LockCatalog} from "@/components/LockCatalog";
import {locks} from "@/data/catalog";

export const metadata:Metadata={title:"Digital Door Locks Australia | VALART Melbourne",description:"Explore 16 VALART digital locks with fingerprint, PIN, RFID and mobile access for architectural aluminium entrance doors.",alternates:{canonical:"/smart-locks"}};

export default function LocksPage(){return <>
 <section className="collection-hero lock-collection-hero"><div className="lock-collection-backdrop"/><div className="collection-hero-copy"><span>Digital lock collection</span><h1>Security<br/>without the<br/>visual <em>noise.</em></h1><p>A curated range of digital locks for modern architectural entrances.</p><div><a className="button inverse" href="#lock-library">Explore the collection <ArrowRight/></a><Link className="collection-outline-button" href="/configure">Configure a door</Link></div></div><div className="lock-collection-product"><Image src="/images/locks/Z8.jpg" alt="VALART Z8 slim digital lock" fill priority sizes="45vw"/></div></section>
 <section className="access-strip collection-access-strip" aria-label="Available digital lock access methods"><div><Fingerprint weight="thin"/><span>Fingerprint</span></div><div><Password weight="thin"/><span>PIN Code</span></div><div><CreditCard weight="thin"/><span>RFID Card</span></div><div><DeviceMobile weight="thin"/><span>Mobile App</span></div></section>
 <section className="collection-library lock-collection-library" id="lock-library"><header className="collection-library-head"><div><span>The collection</span><h2>Digital Locks</h2></div><p>A selection of smart, keyless locks combining security, convenience and clean architectural design.</p><strong>{locks.length} models</strong></header><LockCatalog/></section>
 </>}
