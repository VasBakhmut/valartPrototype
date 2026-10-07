import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Fingerprint, HouseLine, ShieldCheck, SketchLogo } from "@phosphor-icons/react/dist/ssr";
import { doorDesigns, doorSystems, locks } from "@/data/catalog";
import { DoorCard } from "@/components/DoorCard";
import { LockCard } from "@/components/LockCard";

export default function Home() {
  return <>
    <section className="hero hero-v2"><Image src="/images/hero-valart-dark-v2.png" alt="Contemporary Melbourne entrance with a custom black pivot door at dusk" fill priority sizes="100vw"/><div className="hero-shade"/><div className="hero-portal" aria-hidden="true"/><div className="hero-copy"><span className="eyebrow">Premium entrance doors · Melbourne</span><h1>Enter<br/><em>differently.</em></h1><p>Architectural aluminium doors and intelligent security, configured around your entrance.</p><div className="button-row"><Link className="button metal" href="/configure">Configure your door <ArrowRight/></Link><Link className="button ghost" href="/smart-locks">Discover smart locks</Link></div></div><div className="hero-index"><span>V / 01</span><b>DESIGN<br/>SECURITY<br/>LIFESTYLE</b></div><span className="scroll-note">Scroll to explore</span></section>

    <section className="proof-grid" aria-label="VALART values"><div><SketchLogo/><strong>Premium quality</strong><span>Built for lasting performance</span></div><div><HouseLine/><strong>Architectural design</strong><span>Made for modern homes</span></div><div><ShieldCheck/><strong>Intelligent security</strong><span>Access with confidence</span></div><div><Fingerprint/><strong>Melbourne support</strong><span>Local guidance</span></div></section>

    <section className="section systems threshold-section"><div className="threshold-mark" aria-hidden="true"><span>01</span><b>THE<br/>THRESHOLD</b></div><div className="section-heading"><span className="eyebrow">Four entrance systems</span><h2>Architecture begins<br/>at the threshold.</h2><p>Start with the architecture, then refine the design, proportions, opening and smart access.</p></div><div className="system-grid">{doorSystems.map((system) => <Link href={`/doors/${system.slug}`} className="system-card" key={system.slug}><Image src={system.image} alt={system.name} fill sizes="(max-width: 800px) 100vw, 25vw"/><div><span>{system.eyebrow}</span><h3>{system.name}</h3><p>{system.description}</p><b>Explore system <ArrowRight/></b></div></Link>)}</div></section>

    <section className="configure-band"><div className="config-copy"><span className="eyebrow">Door configurator</span><h2>Engineered around<br/><em>your opening.</em></h2><p>Choose a system, catalogue design, dimensions, opening direction, frame and smart lock. Your indicative estimate appears only when the configuration is complete.</p><Link className="button inverse" href="/configure">Start configuring <ArrowRight/></Link></div><div className="door-stage"><span className="dimension dimension-x">750—1500 mm</span><div className="preview-frame"><div className="preview-door"><i/><b/></div><div className="preview-side"/></div><span className="dimension dimension-y">CUSTOM HEIGHT</span></div></section>

    <section className="section"><div className="section-heading horizontal"><div><span className="eyebrow">From the catalogue</span><h2>Selected door designs.</h2></div><Link className="text-link" href="/doors">View all designs <ArrowRight/></Link></div><div className="product-grid">{doorDesigns.slice(0,6).map((door) => <DoorCard key={door.slug} door={door}/>)}</div></section>

    <section className="smart-feature"><div className="smart-photo"><Image src={locks[10].image} alt="Z1 full-automatic smart lock" fill sizes="50vw"/></div><div className="smart-copy"><span className="eyebrow">Smart access</span><h2>Intelligence<br/>at your door.</h2><p>Fingerprint, PIN, card and app access in slim hardware designed for aluminium entrance systems.</p><ul><li>Fingerprint access</li><li>Mobile control options</li><li>PIN and RFID entry</li><li>Mechanical key backup</li></ul><Link className="button outline" href="/smart-locks">Explore smart locks <ArrowRight/></Link></div></section>

    <section className="section"><div className="section-heading horizontal"><div><span className="eyebrow">The smart-lock range</span><h2>Access, considered.</h2></div><Link className="text-link" href="/smart-locks">View all models <ArrowRight/></Link></div><div className="lock-grid">{locks.slice(10,14).map((lock) => <LockCard key={lock.slug} lock={lock}/>)}</div></section>

    <section className="quote-banner"><Image src="/images/doors/hd/catalog-47.webp" alt="Contemporary entrance from the VALART catalogue" fill sizes="100vw"/><div><span className="eyebrow">Begin with your opening</span><h2>Designed for the<br/>way you live.</h2><Link className="button inverse" href="/configure">Configure a door <ArrowRight/></Link></div></section>
  </>;
}
