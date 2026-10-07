import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { doorDesigns } from "@/data/catalog";
export function generateStaticParams(){ return doorDesigns.map(({slug})=>({slug})); }
export default async function DesignPage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const door=doorDesigns.find(d=>d.slug===slug); if(!door)notFound(); return <section className="product-detail"><div className="detail-gallery"><Image src={door.image} alt={`${door.name} entrance door`} fill priority sizes="60vw"/></div><div className="detail-copy"><span className="eyebrow">Catalogue page {door.page}</span><h1>{door.name}</h1><p className="lead">A custom entrance design from the Version 13 catalogue, available within its compatible VALART systems.</p><dl><div><dt>Reference</dt><dd>{door.code}</dd></div><div><dt>Door width</dt><dd>750–1500 mm</dd></div><div><dt>Frame size</dt><dd>Made to opening</dd></div><div><dt>Price</dt><dd>Shown after configuration</dd></div></dl><Link className="button dark" href={`/configure?design=${door.slug}`}>Configure this design <ArrowRight/></Link><p className="fine-print">Catalogue photography is used as the product reference. Final proportions and detailing are confirmed during quotation.</p></div></section> }
