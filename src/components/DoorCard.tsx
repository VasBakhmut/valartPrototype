import Image from "next/image";
import Link from "next/link";
import type { DoorDesign } from "@/data/catalog";

export function DoorCard({ door }: { door: DoorDesign }) {
  return <article className="product-card"><Link href={`/doors/design/${door.slug}`} className="product-image"><Image src={door.image} alt={`${door.name} entrance door from catalogue`} fill sizes="(max-width: 700px) 100vw, 33vw"/></Link><div className="product-meta"><span className="mono">{door.code}</span><h3>{door.name}</h3><Link href={`/configure?design=${door.slug}`}>Configure <span aria-hidden>↗</span></Link></div></article>;
}
