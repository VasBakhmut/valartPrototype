import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "@phosphor-icons/react/dist/ssr";
import {DoorCatalog} from "@/components/DoorCatalog";
import {doorDesigns,doorSystems} from "@/data/catalog";

export const metadata:Metadata={
 title:"Custom Entrance Doors Melbourne",
 description:"Explore 46 architectural aluminium entrance-door designs, compare frame arrangements and configure a made-to-measure VALART entrance in Melbourne.",
 alternates:{canonical:"/doors"},
};

export default function DoorsPage(){return <>
 <section className="page-hero doors-hero"><div><span className="eyebrow">Custom entrance doors · Melbourne</span><h1>Architecture begins<br/>at the threshold.</h1><p>Four engineered systems and {doorDesigns.length} design references. Choose the complete entrance composition, then configure its dimensions, opening and intelligent access.</p><Link className="button dark" href="/configure">Start your configuration <ArrowRight/></Link></div><Image src="/images/doors/assemblies/catalog-29.png" alt="VALART architectural double entrance-door system" fill priority sizes="55vw"/></section>
 <section className="section systems-section"><div className="section-heading horizontal"><div><span className="eyebrow">Choose the system first</span><h2>Four ways to resolve an entrance.</h2></div><p>The system defines movement, scale and how the door meets the surrounding architecture.</p></div><div className="systems-list">{doorSystems.map((item,index)=><Link href={`/doors/${item.slug}`} key={item.slug}><span className="mono">0{index+1}</span><div><h3>{item.name}</h3><p>{item.description}</p></div><Image src={item.image} alt="" width={180} height={120}/><ArrowRight/></Link>)}</div></section>
 <section className="catalog-guide"><div><span className="eyebrow">How to use the library</span><h2>A design reference,<br/>not a fixed-size product.</h2></div><div className="catalog-guide-grid"><article><span>01</span><h3>Select a complete composition</h3><p>Review the leaf, frame, glazing, solid panels and transom as one entrance system.</p></article><article><span>02</span><h3>Set the proportions</h3><p>Door-leaf width is configurable from 750–1500 mm. The overall frame is made to the opening.</p></article><article><span>03</span><h3>Complete the specification</h3><p>Choose handing or pivot, confirm the frame and add compatible intelligent access.</p></article></div></section>
 <section className="door-library-section"><div className="section-heading horizontal"><div><span className="eyebrow">Version 13 catalogue</span><h2>The entrance library.</h2></div><p>Filter {doorDesigns.length} prepared references by system and architectural composition.</p></div><DoorCatalog/></section>
 </>}
