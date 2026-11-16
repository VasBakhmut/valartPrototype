import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight,CreditCard,Fingerprint,Headset,Key,Password,ShieldCheck,Truck} from "@phosphor-icons/react/dist/ssr";
import {notFound} from "next/navigation";
import {locks,money} from "@/data/catalog";
import {LockCard} from "@/components/LockCard";
import {LockPurchaseControls} from "@/components/LockPurchaseControls";

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return locks.map(({slug})=>({slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params,lock=locks.find(item=>item.slug===slug);if(!lock)return {};const description=`VALART ${lock.model} ${lock.type.toLowerCase()} smart door lock with ${lock.access.join(", ")} access.`;return {title:`${lock.model} Smart Door Lock Australia`,description,alternates:{canonical:`/smart-locks/${lock.slug}`},openGraph:{title:`VALART ${lock.model} Smart Lock`,description,images:[lock.image]}}}

export default async function LockPage({params}:Props){
 const {slug}=await params,lock=locks.find(item=>item.slug===slug);if(!lock)notFound();
 const related=locks.filter(item=>item.slug!==lock.slug&&item.type===lock.type).slice(0,4);
 const schema={"@context":"https://schema.org","@type":"Product",name:`VALART ${lock.model} Smart Lock`,sku:lock.model,image:[lock.image],description:`${lock.type} smart entrance lock with ${lock.access.join(", ")}.`,brand:{"@type":"Brand",name:"VALART"},offers:{"@type":"Offer",priceCurrency:"AUD",price:lock.price,availability:"https://schema.org/PreOrder",url:`/smart-locks/${lock.slug}`}};
 return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <nav className="product-breadcrumb lock-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/smart-locks">Digital locks</Link><span>/</span><span>{lock.model}</span></nav>
  <main className="lock-pdp">
   <section className="lock-pdp-hero">
    <div className="lock-pdp-gallery"><div className="lock-pdp-thumbs" aria-label="Product gallery"><button className="active"><Image src={lock.image} alt="" fill sizes="72px"/></button>{lock.access.slice(0,4).map((method,index)=><button key={method}><Image src={lock.image} alt="" fill sizes="72px"/><span>{String(index+2).padStart(2,"0")}</span><small>{method}</small></button>)}</div><div className="lock-pdp-image"><Image src={lock.image} alt={`VALART ${lock.model} digital entrance lock`} fill priority sizes="(max-width:900px) 100vw,48vw"/><span>Installed front view</span></div></div>
    <div className="lock-pdp-buy"><span className="eyebrow">Digital lock</span><h1>{lock.model}</h1><div className="lock-pdp-price"><strong>{money(lock.price)}</strong><span>AUD</span></div><p>A premium {lock.type.toLowerCase()} digital lock with secure keyless access and a clean architectural profile for modern entrances.</p><div className="lock-pdp-methods">{lock.access.slice(0,4).map(method=>{const Icon=method==="Fingerprint"?Fingerprint:method==="PIN code"?Password:method==="RFID card"?CreditCard:Key;return <span key={method}><Icon/>{method}</span>})}</div><div className="lock-pdp-stock"><i/><span>In stock · ready to specify</span><small>Compatibility confirmed with your door</small></div><LockPurchaseControls lock={lock}/><div className="lock-pdp-assurance"><span><Truck/>Australia-wide delivery</span><span><ShieldCheck/>2-year warranty</span><span><Headset/>Expert support</span></div></div>
   </section>
   <nav className="lock-pdp-tabs" aria-label="Product information"><a href="#overview">Overview</a><a href="#specifications">Specifications</a><a href="#features">Key features</a><a href="#related">Related models</a></nav>
   <section className="lock-pdp-overview" id="overview"><div><span className="eyebrow">Overview</span><h2>Smart security<br/>for modern living.</h2></div><p>{lock.model} brings secure access and a minimal design together, offering convenient entry for homes and architectural projects.</p><ul><li>Multiple access methods</li><li>{lock.type} locking</li><li>App control and activity log</li><li>Slim architectural profile</li></ul></section>
   <section className="lock-pdp-specs" id="specifications"><div className="lock-pdp-detail-image"><Image src={lock.image} alt={`${lock.model} keypad and fingerprint reader detail`} fill sizes="34vw"/></div><div id="features"><span className="eyebrow">Key features</span><h2>Access, resolved.</h2>{lock.access.slice(0,4).map(method=><p key={method}><b>{method}</b><span>Reliable everyday access designed around your entrance.</span></p>)}</div><dl><div><dt>Model</dt><dd>{lock.model}</dd></div><div><dt>Operation</dt><dd>{lock.type}</dd></div><div><dt>Access</dt><dd>{lock.access.join(" / ")}</dd></div><div><dt>Connected app</dt><dd>{lock.app}</dd></div><div><dt>Power supply</dt><dd>Rechargeable battery</dd></div><div><dt>Compatibility</dt><dd>Timber, aluminium and composite doors</dd></div><div><dt>Warranty</dt><dd>2 years</dd></div></dl></section>
  </main>
  <section className="section related-locks lock-pdp-related" id="related"><div className="section-heading horizontal"><div><span className="eyebrow">You may also like</span><h2>Related digital locks.</h2></div><Link className="text-link" href="/smart-locks">View all {locks.length} models <ArrowRight/></Link></div><div className="lock-grid">{related.map((item,index)=><LockCard key={item.slug} lock={item} index={index}/>)}</div></section>
 </>;
}
