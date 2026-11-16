import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { doorDesigns, doorSystems, locks } from "@/data/catalog";
import { DoorCard } from "@/components/DoorCard";
import { LockCard } from "@/components/LockCard";
import { FrameEducation } from "@/components/FrameEducation";

const surfaceDoors = [doorDesigns[1], doorDesigns[24], doorDesigns[3], doorDesigns[34], doorDesigns[37], doorDesigns[21]];

export default function Home() {
  return <>
    <section className="hero hero-v2 home-hero">
      <Image src="/images/home/hero-entrance-v3.webp" alt="Premium dark aluminium pivot entrance door on a contemporary Melbourne home" fill preload sizes="100vw"/>
      <div className="hero-shade"/>
      <div className="hero-copy"><span className="eyebrow">Designed for Australian homes</span><h1>Premium entrance doors <em>· Melbourne</em></h1><p>High-performance aluminium entrance systems combining architectural design, intelligent security and everyday comfort.</p><div className="button-row"><Link className="button metal" href="/doors">Explore doors <ArrowRight/></Link><Link className="button ghost" href="/request-a-quote">Request a quote</Link></div></div>
      <div className="hero-index"><span>VALART / MEL</span><b>ALUMINIUM<br/>ENTRANCE<br/>SYSTEMS</b></div><span className="scroll-note">Explore the collection</span>
    </section>

    <section className="systems systems-compact"><div className="systems-compact-copy"><span className="eyebrow">Four entrance systems</span><h2>Architecture begins<br/>at the threshold.</h2><p>Four refined systems, each engineered for a distinct architectural opening.</p><Link className="button dark" href="/doors">View systems <ArrowRight/></Link></div><div className="system-grid">{doorSystems.map((system) => <Link href={`/doors/${system.slug}`} className="system-card" key={system.slug}><Image src={system.image} alt={system.name} fill sizes="(max-width: 800px) 50vw, 18vw"/><div><span>{system.eyebrow}</span><h3>{system.name}</h3><b>View system <ArrowRight/></b></div></Link>)}</div></section>

    <section className="section home-catalogue"><div className="section-heading horizontal"><div><span className="eyebrow">From the catalogue</span><h2>Selected door designs.</h2></div><Link className="text-link" href="/doors">View all designs <ArrowRight/></Link></div><div className="product-grid">{doorDesigns.slice(0,6).map((door) => <DoorCard key={door.slug} door={door}/>)}</div></section>

    <section className="material-story material-story-compact"><div className="material-copy"><span className="eyebrow">Surface · structure · light</span><h2>Designed as part<br/>of the architecture.</h2><p>Distinct door faces, expressed through proportion, shadow and material—not decoration alone.</p><Link className="text-link" href="/doors">Explore door designs <ArrowRight/></Link></div><div className="surface-door-line">{surfaceDoors.map((door, index) => <Link href={`/doors/design/${door.slug}`} key={door.slug} className={`surface-door surface-door-${index + 1}`}><Image src={door.moduleImage} alt={`${door.name} aluminium entrance door`} fill sizes="(max-width: 780px) 30vw, 18vw"/><span>{door.name}<small>{door.code}</small></span></Link>)}</div></section>

    <FrameEducation/>

    <section className="configure-band configure-band-compact"><Image className="configure-backdrop" src="/images/doors/catalog-banners/catalog-41.webp" alt="Dark architectural entrance with an integrated handle" fill sizes="100vw"/><div className="configure-overlay"/><div className="config-copy"><span className="eyebrow">Door configurator</span><h2>One door path.<br/><em>Every detail resolved.</em></h2><p>Choose a design, set the opening and enter the dimensions for your project.</p><Link className="button inverse" href="/configure">Open configurator <ArrowRight/></Link></div><div className="config-spec-card"><span>Live specification</span><div className="config-spec-image"><Image src={doorDesigns[37].moduleImage} alt="Door design preview" fill sizes="260px"/></div><dl><div><dt>Design</dt><dd>Architectural face</dd></div><div><dt>Opening</dt><dd>Project specific</dd></div><div><dt>Size</dt><dd>Made to measure</dd></div></dl></div></section>

    <section className="smart-feature smart-feature-compact"><div className="smart-photo"><Image src={locks[10].image} alt="Z1 full-automatic smart lock" fill sizes="50vw"/></div><div className="smart-copy"><span className="eyebrow">Smart access</span><h2>Intelligence<br/>at your door.</h2><p>Fingerprint, PIN, card and app access in slim hardware designed for aluminium entrance systems.</p><ul><li>Fingerprint access</li><li>Mobile control options</li><li>PIN and RFID entry</li><li>Mechanical key backup</li></ul><Link className="button outline" href="/smart-locks">Explore smart locks <ArrowRight/></Link></div></section>

    <section className="section lock-range-section"><div className="section-heading horizontal"><div><span className="eyebrow">The smart-lock range</span><h2>Access, considered.</h2></div><Link className="text-link" href="/smart-locks">View all models <ArrowRight/></Link></div><div className="lock-grid">{locks.slice(10,14).map((lock) => <LockCard key={lock.slug} lock={lock}/>)}</div></section>

    <section className="melbourne-strip"><div className="melbourne-word" aria-hidden="true">MELBOURNE</div><div><span className="eyebrow">Local project support</span><h2>Specified for Australian homes.</h2></div><p>Guidance for homeowners, builders, architects and designers—from the first opening measurement through to the final entrance specification.</p><Link className="button outline" href="/contact">Discuss your project <ArrowRight/></Link></section>

    <section className="quote-banner quote-banner-refined"><Image src="/images/hero-valart-dark-v2.webp" alt="Contemporary Melbourne home with a custom entrance" fill sizes="100vw"/><div><span className="eyebrow">Begin with your opening</span><h2>Designed for the<br/>way you live.</h2><Link className="button inverse" href="/request-a-quote">Request a quote <ArrowRight/></Link></div></section>
  </>;
}
