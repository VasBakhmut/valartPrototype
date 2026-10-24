import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { DoorDesign } from "@/data/catalog";

export function DoorCard({door,view="entrance"}:{door:DoorDesign;view?:"entrance"|"face"}){
 const image=view==="face"?door.layerImage??door.image:door.assemblyImage??door.layerImage??door.image;
 return <article className="product-card door-library-card">
  <Link href={`/doors/design/${door.slug}`} className="product-image">
   <span className="door-card-index">{door.code}</span>
   <span className="door-card-mode">{view==="face"?"Door design":"Complete entrance"}</span>
   <Image src={image} alt={view==="face"?`${door.name} door-face design`:`${door.name} ${door.assemblyFrame??"entrance door"}`} fill sizes="(max-width:700px) 100vw,(max-width:1100px) 50vw,33vw"/>
   <span className="door-card-view">View specification <ArrowRight/></span>
  </Link>
  <div className="product-meta">
   <div><span className="mono">VERSION 13 · PAGE {door.page}</span><h3>{door.name}</h3><p>{door.assemblyFrame??"Custom entrance configuration"}</p></div>
   <Link href={`/configure?design=${door.slug}`}>Configure <span aria-hidden>↗</span></Link>
  </div>
 </article>;
}
