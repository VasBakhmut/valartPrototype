import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowLeft,ArrowRight,CheckCircle,Fingerprint,Key,DeviceMobile,Password} from "@phosphor-icons/react/dist/ssr";
import {locks,money} from "@/data/catalog";
import {AddLockButton} from "@/components/AddLockButton";
import {LockCard} from "@/components/LockCard";

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return locks.map(({slug})=>({slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params,lock=locks.find(item=>item.slug===slug);if(!lock)return {};
 const description=`VALART ${lock.model} ${lock.type.toLowerCase()} smart door lock with ${lock.access.join(", ")} access and ${lock.app} app support.`;
 return {title:`${lock.model} Smart Door Lock Australia | VALART`,description,alternates:{canonical:`/smart-locks/${lock.slug}`},openGraph:{title:`VALART ${lock.model} Smart Lock`,description,images:[lock.image]}};
}

export default async function LockPage({params}:Props){
 const {slug}=await params,lock=locks.find(item=>item.slug===slug);if(!lock)notFound();
 const related=locks.filter(item=>item.slug!==lock.slug&&item.type===lock.type).slice(0,4);
 const schema={"@context":"https://schema.org","@type":"Product",name:`VALART ${lock.model} Smart Lock`,sku:lock.model,image:[lock.image],description:`${lock.type} smart entrance lock with ${lock.access.join(", ")}.`,brand:{"@type":"Brand",name:"VALART"},material:lock.material,offers:{"@type":"Offer",priceCurrency:"AUD",price:lock.price,availability:"https://schema.org/PreOrder",url:`/smart-locks/${lock.slug}`}};
 return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <nav className="product-breadcrumb lock-breadcrumb" aria-label="Breadcrumb"><Link href="/smart-locks"><ArrowLeft/> Smart locks</Link><span>/</span><span>{lock.model}</span></nav>
  <section className="lock-product">
   <div className="lock-product-visual"><span className="lock-product-type">{lock.type}</span><div className="lock-orbit" aria-hidden/><Image src={lock.image} alt={`VALART ${lock.model} smart door lock`} fill priority sizes="(max-width:900px) 100vw,52vw"/><span className="lock-model-ghost">{lock.model}</span></div>
   <div className="lock-product-copy"><span className="eyebrow">VALART intelligent access</span><h1>{lock.model}</h1><p className="lead">A {lock.type.toLowerCase()} access system with a slim architectural profile for compatible entrance doors.</p><div className="detail-status"><CheckCircle weight="fill"/><span>Compatibility confirmed during specification</span></div><strong className="lock-product-price">{money(lock.price)} <small>indicative AUD</small></strong>
    <dl><div><dt>Operation</dt><dd>{lock.type}</dd></div><div><dt>Access methods</dt><dd>{lock.access.join(" · ")}</dd></div><div><dt>Connected app</dt><dd>{lock.app}</dd></div><div><dt>Body material</dt><dd>{lock.material}</dd></div><div><dt>Installation</dt><dd>Available with a compatible entrance</dd></div></dl>
    <div className="lock-product-actions"><AddLockButton lock={lock}/><Link className="button outline wide" href={`/configure?lock=${lock.slug}`}>Add to a door specification <ArrowRight/></Link></div><p className="fine-print">Product imagery, features and prototype pricing are indicative. Final handing, backset, door compatibility, installation and supply details are confirmed before order.</p>
   </div>
  </section>
  <section className="lock-access-detail"><div><span className="eyebrow">Ways to enter</span><h2>{lock.access.length} credentials.<br/>One considered interface.</h2></div><div className="lock-access-grid">{lock.access.map((method,index)=>{const Icon=method==="Fingerprint"?Fingerprint:method==="PIN code"?Password:method==="Key"?Key:DeviceMobile;return <article key={method}><Icon/><span>{String(index+1).padStart(2,"0")}</span><h3>{method}</h3><p>{method==="Fingerprint"?"Fast personal access without carrying a key.":method==="PIN code"?"Keyless entry using a memorable access code.":method==="RFID card"?"Simple credential access for family or regular users.":method==="Key"?"A physical fallback for practical redundancy.":"Model-dependent biometric access for supported configurations."}</p></article>})}</div></section>
  <section className="lock-door-link"><div><span className="eyebrow">Part of the entrance specification</span><h2>The lock is selected after the door system—not instead of it.</h2><p>Door construction, opening direction and installation details determine final compatibility. Add {lock.model} to a configuration so VALART can review the complete entrance.</p><Link className="button inverse" href={`/configure?lock=${lock.slug}`}>Configure with {lock.model} <ArrowRight/></Link></div><div className="lock-door-diagram"><span>DOOR SYSTEM</span><i/><span>FRAME & OPENING</span><i/><b>{lock.model}</b></div></section>
  <section className="section related-locks"><div className="section-heading horizontal"><div><span className="eyebrow">Related {lock.type.toLowerCase()} models</span><h2>Compare alternatives.</h2></div><Link className="text-link" href="/smart-locks">View all {locks.length} models <ArrowRight/></Link></div><div className="lock-grid">{related.map((item,index)=><LockCard key={item.slug} lock={item} index={index}/>)}</div></section>
 </>;
}
