import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {ArrowLeft,ArrowRight,CheckCircle} from "@phosphor-icons/react/dist/ssr";
import {doorDesigns,doorSystems,locks} from "@/data/catalog";
import {DoorCard} from "@/components/DoorCard";

type Props={params:Promise<{slug:string}>};
function analyseComposition(value?:string){const label=value??"Single leaf",v=label.toLowerCase();const leafCount=v.includes("double")?2:1;const sidelights=v.includes("three sidelight")?3:v.includes("two sidelight")||v.includes("sidelights")?2:v.includes("sidelight")?1:0;const solidPanels=v.includes("four solid")?4:v.includes("two solid")?2:v.includes("solid")||v.includes("companion")||v.includes("inactive")||v.includes("panel system")?1:0;return{label,leafCount,sidelights,solidPanels,transom:v.includes("transom"),arched:v.includes("arched"),asymmetric:v.includes("asymmetric")}}
export function generateStaticParams(){return doorDesigns.map(({slug})=>({slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params,door=doorDesigns.find(d=>d.slug===slug);
 if(!door)return {};
 const description=`${door.name} (${door.code}) is a custom VALART entrance-door reference with ${door.assemblyFrame??"a made-to-measure frame"}, available for Melbourne projects.`;
 return {title:`${door.name} ${door.code} Entrance Door`,description,alternates:{canonical:`/doors/design/${door.slug}`},openGraph:{title:`${door.name} · ${door.code}`,description,images:[door.assemblyImage??door.image]}};
}

export default async function DesignPage({params}:Props){
 const {slug}=await params,door=doorDesigns.find(d=>d.slug===slug);if(!door)notFound();
 const systems=doorSystems.filter(s=>door.systems.includes(s.slug));
 const related=doorDesigns.filter(d=>d.slug!==door.slug&&d.systems.some(s=>door.systems.includes(s))).slice(0,3);
 const access=locks.slice(door.page%5,door.page%5+3);
 const hero=door.assemblyImage??door.layerImage??door.image;
 const gallery=[hero,door.image,...(door.layerImage&&door.layerImage!==hero?[door.layerImage]:[])];
 const description=`A Version 13 architectural entrance reference configured around the project opening, selected system and access requirements.`;
 const anatomy=analyseComposition(door.assemblyFrame),leftGlass=Math.floor(anatomy.sidelights/2),rightGlass=anatomy.sidelights-leftGlass,leftSolid=Math.floor(anatomy.solidPanels/2),rightSolid=anatomy.solidPanels-leftSolid;
 const schema={"@context":"https://schema.org","@type":"Product",name:`VALART ${door.name}`,sku:door.code,image:gallery,description,brand:{"@type":"Brand",name:"VALART"},category:"Custom entrance doors"};
 return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <nav className="product-breadcrumb" aria-label="Breadcrumb"><Link href="/doors"><ArrowLeft/> Door library</Link><span>/</span><span>{door.code}</span></nav>
  <section className="door-detail">
   <div className="door-detail-visual"><span className="detail-index">{door.code}</span><Image src={hero} alt={`${door.name} complete entrance assembly`} fill priority sizes="(max-width:900px) 100vw,58vw"/><span className="detail-caption">Complete catalogue composition · indicative proportions</span></div>
   <div className="door-detail-copy"><span className="eyebrow">Version 13 · Catalogue page {door.page}</span><h1>{door.name}</h1><p className="lead">{description}</p>
    <div className="detail-status"><CheckCircle weight="fill"/><span>Prepared for live configuration</span></div>
    <dl><div><dt>Reference</dt><dd>{door.code}</dd></div><div><dt>Composition</dt><dd>{door.assemblyFrame??"Flexible frame arrangement"}</dd></div><div><dt>Door leaf</dt><dd>750–1500 mm</dd></div><div><dt>Overall frame</dt><dd>Made to architectural opening</dd></div><div><dt>Compatible systems</dt><dd>{systems.map(s=>s.name).join(" · ")}</dd></div><div><dt>Price</dt><dd>Indicative estimate after configuration</dd></div></dl>
    <Link className="button dark wide" href={`/configure?design=${door.slug}`}>Configure {door.code} <ArrowRight/></Link>
    <p className="fine-print">Final engineering, finish, dimensions, installation and pricing are confirmed during quotation and site measure.</p>
   </div>
  </section>
  <section className="door-anatomy-section"><div className="door-anatomy-copy"><span className="eyebrow">Entrance anatomy</span><h2>See what belongs to the door—and what belongs to the frame.</h2><p>The selected Version 13 reference is treated as a complete architectural opening. Every module remains individually proportioned in the configurator.</p><div className="anatomy-facts"><div><span>Door leaves</span><b>{anatomy.leafCount}{anatomy.asymmetric?" · asymmetric":""}</b></div><div><span>Glazed sidelights</span><b>{anatomy.sidelights||"None"}</b></div><div><span>Solid panels</span><b>{anatomy.solidPanels||"None"}</b></div><div><span>Upper transom</span><b>{anatomy.transom?(anatomy.arched?"Arched glazing":"Included"):"None"}</b></div></div><Link className="text-link" href={`/configure?design=${door.slug}`}>Open this composition in the configurator <ArrowRight/></Link></div><figure className="door-anatomy-figure"><figcaption><b>{door.code}</b><span>{anatomy.label}</span></figcaption><div className={anatomy.arched?"anatomy-frame arched":"anatomy-frame"}>{anatomy.transom&&<div className="anatomy-transom">Transom</div>}<div className="anatomy-body">{Array.from({length:leftSolid},(_,i)=><i className="solid" key={`ls-${i}`}>Panel</i>)}{Array.from({length:leftGlass},(_,i)=><i className="glass" key={`lg-${i}`}>Glass</i>)}{Array.from({length:anatomy.leafCount},(_,i)=><i className={anatomy.asymmetric&&i===1?"leaf narrow":"leaf"} key={`leaf-${i}`}>Leaf</i>)}{Array.from({length:rightGlass},(_,i)=><i className="glass" key={`rg-${i}`}>Glass</i>)}{Array.from({length:rightSolid},(_,i)=><i className="solid" key={`rs-${i}`}>Panel</i>)}</div></div><small>Schematic composition · dimensions remain configurable</small></figure></section>
  <section className="detail-gallery-section"><div className="section-heading"><span className="eyebrow">Catalogue reference</span><h2>Composition and surface.</h2><p>The clean assembly supports configuration; original catalogue imagery remains available as the design reference.</p></div><div className="door-detail-gallery">{gallery.map((image,index)=><figure key={image}><Image src={image} alt={index===0?`${door.name} complete entrance system`:`${door.name} catalogue detail`} fill sizes="(max-width:780px) 100vw,50vw"/><figcaption>{index===0?"Complete entrance assembly":"Original catalogue reference"}</figcaption></figure>)}</div></section>
  <section className="compatibility-section"><div><span className="eyebrow">Engineered as one specification</span><h2>System, frame and access.</h2><p>The catalogue face is only one layer. The final entrance brings its movement, complete frame arrangement and intelligent access together.</p></div><div className="compatibility-list"><article><span>01</span><h3>Entrance systems</h3><p>{systems.map(s=>s.name).join(", ")}</p></article><article><span>02</span><h3>Verified arrangement</h3><p>{door.assemblyFrame??"Resolved during configuration"}</p></article><article><span>03</span><h3>Access options</h3><p>{access.map(l=>l.model).join(", ")} and further catalogue locks</p><Link href="/smart-locks">View smart locks <ArrowRight/></Link></article></div></section>
  <section className="section related-doors"><div className="section-heading horizontal"><div><span className="eyebrow">Related references</span><h2>Continue exploring.</h2></div><Link className="text-link" href="/doors">View all {doorDesigns.length} designs <ArrowRight/></Link></div><div className="product-grid">{related.map(item=><DoorCard key={item.slug} door={item}/>)}</div></section>
 </>;
}
