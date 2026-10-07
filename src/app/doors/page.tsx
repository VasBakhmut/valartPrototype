import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { DoorCard } from "@/components/DoorCard";
import { doorDesigns, doorSystems } from "@/data/catalog";

export const metadata: Metadata = { title: "Custom Entrance Doors Melbourne", description: "Explore VALART aluminium entrance door systems and catalogue designs, then configure your custom entrance." };

export default function DoorsPage() { return <>
  <section className="page-hero"><div><span className="eyebrow">Custom entrance doors</span><h1>Architecture begins<br/>at the threshold.</h1><p>Four engineered systems. A complete catalogue of design directions. Dimensions and opening configured for your project.</p><Link className="button dark" href="/configure">Start your configuration <ArrowRight/></Link></div><Image src="/images/doors/hd/catalog-29.webp" alt="VALART modern double entrance door" fill priority sizes="55vw"/></section>
  <section className="section"><div className="section-heading"><span className="eyebrow">Choose the system first</span><h2>Four ways to frame an entrance.</h2></div><div className="systems-list">{doorSystems.map((system, index) => <Link href={`/doors/${system.slug}`} key={system.slug}><span className="mono">0{index+1}</span><div><h3>{system.name}</h3><p>{system.description}</p></div><Image src={system.image} alt="" width={180} height={120}/><ArrowRight/></Link>)}</div></section>
  <section className="section stone"><div className="section-heading horizontal"><div><span className="eyebrow">Version 13 catalogue</span><h2>Door design library.</h2></div><p>{doorDesigns.length} catalogue references currently prepared for selection.</p></div><div className="product-grid">{doorDesigns.map((door) => <DoorCard key={door.slug} door={door}/>)}</div></section>
  </>; }
