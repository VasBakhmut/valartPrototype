import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { doorDesigns, doorSystems } from "@/data/catalog";
import { DoorCard } from "@/components/DoorCard";

export function generateStaticParams() { return doorSystems.map(({ slug }) => ({ system: slug })); }
export default async function SystemPage({ params }: { params: Promise<{ system: string }> }) {
  const { system: slug } = await params; const system = doorSystems.find((item) => item.slug === slug); if (!system) notFound();
  const compatible = doorDesigns.filter((door) => door.systems.includes(slug));
  return <><section className="detail-hero"><Image src={system.image} alt={`${system.name} entrance system`} fill priority sizes="60vw"/><div><span className="eyebrow">{system.eyebrow}</span><h1>{system.name}</h1><p>{system.description}</p><dl><div><dt>Door leaf</dt><dd>750–1500 mm</dd></div><div><dt>Overall frame</dt><dd>Custom</dd></div><div><dt>Opening</dt><dd>Configured</dd></div></dl><Link className="button dark" href={`/configure?system=${system.slug}`}>Configure this system <ArrowRight/></Link></div></section><section className="section"><div className="section-heading"><span className="eyebrow">Compatible catalogue designs</span><h2>Refine the surface.</h2></div><div className="product-grid">{compatible.map((door) => <DoorCard key={door.slug} door={door}/>)}</div></section></>;
}
