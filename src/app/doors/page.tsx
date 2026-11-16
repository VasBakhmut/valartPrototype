import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight,Columns,DoorOpen,SquaresFour} from "@phosphor-icons/react/dist/ssr";
import {DoorCatalog} from "@/components/DoorCatalog";
import {doorDesigns} from "@/data/catalog";

export const metadata:Metadata={title:"Architectural Entrance Doors Melbourne",description:"Explore 46 approved VALART architectural aluminium entrance-door designs and configure a made-to-measure entrance for your Melbourne home.",alternates:{canonical:"/doors"}};

const arrangements=[["Single door",DoorOpen],["Single + 1 panel",Columns],["Single + 2 panels",Columns],["French door",SquaresFour],["1½ French door",Columns],["Pivot door",DoorOpen]] as const;

export default function DoorsPage(){return <>
 <section className="collection-hero doors-collection-hero"><Image src="/images/doors/door-collection-hero-v2.webp" alt="VALART Lustre architectural entrance door installed in a contemporary Melbourne home" fill priority sizes="100vw"/><div className="collection-hero-shade"/><div className="collection-hero-copy"><span>Door collection</span><h1>Architectural<br/>Entrance <em>Doors</em></h1><p>A curated collection of premium aluminium entrance doors designed for modern Melbourne homes.</p><div><Link className="button inverse" href="/configure">Use the configurator <ArrowRight/></Link><a className="collection-text-link" href="#door-designs">Explore the collection</a></div></div></section>
 <section className="arrangement-strip" aria-label="Available entrance arrangements">{arrangements.map(([label,Icon])=><div key={label}><Icon weight="thin"/><span>{label}</span></div>)}</section>
 <section className="collection-library" id="door-designs"><header className="collection-library-head"><div><span>The collection</span><h2>Door Designs</h2></div><p>Approved VALART door-leaf models, presented consistently so finish, proportion and architectural character are easy to compare.</p><strong>{doorDesigns.length} designs</strong></header><DoorCatalog/></section>
 </>}
