import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {ArrowLeft,ArrowRight,Drop,ShieldCheck,SpeakerSlash,ThermometerSimple} from "@phosphor-icons/react/dist/ssr";
import {doorDesigns,doorSystems} from "@/data/catalog";
import {DoorCard} from "@/components/DoorCard";
import {ProductGallery} from "@/components/ProductGallery";
import {DoorConstruction} from "@/components/DoorConstruction";

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return doorDesigns.map(({slug})=>({slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params,door=doorDesigns.find(d=>d.slug===slug);
 if(!door)return {};
 const title=`${door.name} ${door.code} Custom Entrance Door Melbourne`;
 const description=`Explore the VALART ${door.name} (${door.code}) premium custom entrance door for Melbourne homes and architectural projects. View its clean door design, compatible systems and made-to-measure frame options.`;
 return {title,description,keywords:[`${door.name} entrance door`,`${door.code} door`,`custom entrance doors Melbourne`,`architectural front doors Australia`,`premium aluminium doors Melbourne`,`smart lock entrance door`],alternates:{canonical:`/doors/design/${door.slug}`},robots:{index:true,follow:true},openGraph:{type:"website",locale:"en_AU",title,description,images:[{url:door.catalogBanner,alt:`VALART ${door.name} ${door.code} custom entrance door in a contemporary Melbourne home`} ]},twitter:{card:"summary_large_image",title,description,images:[door.catalogBanner]}};
}

export default async function DesignPage({params}:Props){
 const {slug}=await params,door=doorDesigns.find(d=>d.slug===slug);if(!door)notFound();
 const systems=doorSystems.filter(s=>door.systems.includes(s.slug));
 const related=doorDesigns.filter(d=>d.slug!==door.slug&&d.systems.some(s=>door.systems.includes(s))).slice(0,3);
 const cleanedCatalogueImage=`/images/doors/preview-uniform/catalog-${String(door.page).padStart(2,"0")}.webp`;
 const gallery=[door.catalogBanner,door.editorialImage,cleanedCatalogueImage,door.moduleImage];
 const productGallery=[
  {src:door.catalogBanner,alt:`${door.name} ${door.code} installed in a contemporary architectural entrance`,label:"In situ",kind:"editorial" as const},
  {src:cleanedCatalogueImage,alt:`${door.name} ${door.code} complete cleaned product view`,label:"Product view",kind:"product" as const},
  {src:door.moduleImage,alt:`${door.name} ${door.code} approved front elevation`,label:"Front elevation",kind:"product" as const},
  {src:door.editorialImage,alt:`${door.name} ${door.code} editorial architectural setting`,label:"Editorial view",kind:"editorial" as const},
 ];
 const description=`The ${door.name} is a premium custom entrance-door design for contemporary Melbourne homes, renovations and architectural projects. Its door leaf can be specified with a made-to-measure frame, compatible opening system and intelligent access.`;
 const faq=[{q:`Can the ${door.name} ${door.code} be made to suit my opening?`,a:"Yes. The door leaf, complete frame and any fixed side panels are planned around the architectural opening, then confirmed during quotation and site measure."},{q:`Is the ${door.name} available for projects in Melbourne?`,a:"Yes. VALART specifies custom entrance doors for Melbourne homes, renovations, builders, architects and design-led residential projects."},{q:"Can a smart lock be integrated?",a:"Compatible fingerprint, PIN, RFID, mobile-app and mechanical-key options can be selected as part of the final entrance specification."}];
 const base="https://valart.com.au";
 const schema={"@context":"https://schema.org","@graph":[{"@type":"Product","@id":`${base}/doors/design/${door.slug}#product`,name:`VALART ${door.name}`,sku:door.code,image:gallery.map(image=>`${base}${image}`),description,brand:{"@type":"Brand",name:"VALART"},category:"Custom architectural entrance doors",areaServed:{"@type":"AdministrativeArea",name:"Melbourne, Victoria, Australia"},additionalProperty:[{"@type":"PropertyValue",name:"Frame arrangement",value:door.assemblyFrame??"Custom to opening"},{"@type":"PropertyValue",name:"Door leaf width",value:"750–1500 mm"},{"@type":"PropertyValue",name:"Manufacture",value:"Made to measure"}]},{"@type":"BreadcrumbList","@id":`${base}/doors/design/${door.slug}#breadcrumb`,itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:base},{"@type":"ListItem",position:2,name:"Entrance doors",item:`${base}/doors`},{"@type":"ListItem",position:3,name:`${door.name} ${door.code}`,item:`${base}/doors/design/${door.slug}`}]},{"@type":"FAQPage",mainEntity:faq.map(item=>({"@type":"Question",name:item.q,acceptedAnswer:{"@type":"Answer",text:item.a}}))}]};
 return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>
  <nav className="product-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/doors">Entrance doors</Link><span>/</span><strong>{door.name} · {door.code}</strong></nav>
  <section className="pdp-shell combined-product-stage" id="product">
   <ProductGallery items={productGallery}/>
   <aside className="pdp-summary">
    <div className="pdp-summary-copy"><div className="pdp-summary-topline"><span className="eyebrow">Door system · {door.code}</span><b>{String(door.page).padStart(2,"0")}</b></div><h1>{door.name}</h1><p className="pdp-intro">The {door.name} combines a made-to-measure aluminium entrance with a coordinated frame, opening hardware and intelligent access.</p>
     <div className="pdp-feature-row"><span><ThermometerSimple/><b>Insulated profile</b></span><span><SpeakerSlash/><b>Acoustic control</b></span><span><ShieldCheck/><b>Secure construction</b></span><span><Drop/><b>Weather sealing</b></span></div>
     <div className="pdp-actions"><Link className="button dark wide" href={`/configure?design=${door.slug}`}>Configure door <ArrowRight/></Link><Link className="button outline wide" href={`/request-a-quote?design=${door.slug}`}>Request quote</Link></div>
    </div>
    <figure className="pdp-profile-preview"><div><Image src="/images/frame/frame-hinge-product-v2.webp" alt="Technical cutaway of the VALART aluminium entrance frame and concealed hinge" fill sizes="(max-width: 900px) 48vw, 22vw"/></div><figcaption><span>Concealed hinge system</span><b>Frame, seal and opening hardware resolved together.</b></figcaption></figure>
   </aside>
   <nav className="pdp-anchor-tabs" aria-label="Product information"><a className="active" href="#product">Overview</a><a href="#specifications">Specifications</a><a href="#door-construction-title">Frame &amp; hardware</a><a href="#door-construction-title">Technical section</a><Link href={`/request-a-quote?design=${door.slug}`}>Request a quote</Link></nav>
  </section>
  <section className="pdp-spec-strip" id="specifications" aria-label={`${door.name} specifications`}><dl><div><dt>Door design</dt><dd>{door.name}</dd></div><div><dt>Reference</dt><dd>{door.code}</dd></div><div><dt>Door leaf width</dt><dd>750–1500 mm</dd></div><div><dt>Frame</dt><dd>Made to opening</dd></div><div><dt>Configuration</dt><dd>{door.assemblyFrame??"Flexible arrangement"}</dd></div><div><dt>Systems</dt><dd>{systems.map(s=>s.name).join(" · ")}</dd></div></dl></section>
  <section className="section related-doors"><div className="section-heading horizontal"><div><span className="eyebrow">Related references</span><h2>Continue exploring.</h2></div><Link className="text-link" href="/doors">View all {doorDesigns.length} designs <ArrowRight/></Link></div><div className="product-grid">{related.map(item=><DoorCard key={item.slug} door={item}/>)}</div></section>
  <DoorConstruction/>
  <section className="door-local-section"><div><span className="eyebrow">Custom entrance doors · Melbourne</span><h2>{door.name}, resolved for the whole entrance.</h2><p>VALART treats the door design, opening system, frame, dimensions and smart access as one coordinated specification. This makes the {door.name} suitable for new homes, facade upgrades and considered renovations across Melbourne.</p></div><div className="door-faq"><h3>Questions about {door.code}</h3>{faq.map(item=><details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
 </>;
}
