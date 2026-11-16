import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "@phosphor-icons/react/dist/ssr";
import {doorDesigns,doorSystems} from "@/data/catalog";
import {DoorCard} from "@/components/DoorCard";
type Props={params:Promise<{system:string}>};
export function generateStaticParams(){return doorSystems.map(({slug})=>({system:slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {system:slug}=await params,item=doorSystems.find(s=>s.slug===slug);return item?{title:`${item.name} Entrance Door System Melbourne`,description:item.description,alternates:{canonical:`/doors/${item.slug}`}}:{}}
export default async function SystemPage({params}:Props){const {system:slug}=await params,item=doorSystems.find(s=>s.slug===slug);if(!item)notFound();const compatible=doorDesigns.filter(d=>d.systems.includes(slug));return <><section className="detail-hero system-detail-hero"><Image src={item.image} alt={`${item.name} entrance system`} fill priority sizes="60vw"/><div><span className="eyebrow">{item.eyebrow} · {compatible.length} design references</span><h1>{item.name}</h1><p>{item.description}</p><dl><div><dt>Door leaf</dt><dd>750–1500 mm</dd></div><div><dt>Overall frame</dt><dd>Custom to opening</dd></div><div><dt>Opening</dt><dd>Configured to project</dd></div><div><dt>Price</dt><dd>Shown at review</dd></div></dl><Link className="button dark" href={`/configure?system=${item.slug}`}>Configure this system <ArrowRight/></Link></div></section><section className="section system-library"><div className="section-heading horizontal"><div><span className="eyebrow">Compatible Version 13 references</span><h2>Select the architectural face.</h2></div><p>{compatible.length} prepared designs can be configured with the {item.name} system.</p></div><div className="product-grid">{compatible.map(door=><DoorCard key={door.slug} door={door}/>)}</div></section></>}
