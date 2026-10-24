import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Fingerprint, HouseLine, ShieldCheck, SketchLogo, Ruler, SelectionForeground, LockKey, FileText } from "@phosphor-icons/react/dist/ssr";
import { doorDesigns, doorSystems, locks } from "@/data/catalog";
import { DoorCard } from "@/components/DoorCard";
import { LockCard } from "@/components/LockCard";

export default function Home() {
  return <>
    <section className="hero hero-v2"><Image src="/images/hero-valart-dark-v2.png" alt="Contemporary Melbourne entrance with a custom black pivot door at dusk" fill priority sizes="100vw"/><div className="hero-shade"/><div className="hero-portal" aria-hidden="true"/><div className="hero-copy"><span className="eyebrow">Premium entrance doors · Melbourne</span><h1>Enter<br/><em>differently.</em></h1><p>Architectural aluminium doors and intelligent security, configured around your entrance.</p><div className="button-row"><Link className="button metal" href="/configure">Configure your door <ArrowRight/></Link><Link className="button ghost" href="/smart-locks">Discover smart locks</Link></div></div><div className="hero-index"><span>V / 01</span><b>DESIGN<br/>SECURITY<br/>LIFESTYLE</b></div><span className="scroll-note">Scroll to explore</span></section>

    <section className="proof-grid" aria-label="VALART values"><div><SketchLogo/><strong>Premium quality</strong><span>Built for lasting performance</span></div><div><HouseLine/><strong>Architectural design</strong><span>Made for modern homes</span></div><div><ShieldCheck/><strong>Intelligent security</strong><span>Access with confidence</span></div><div><Fingerprint/><strong>Melbourne support</strong><span>Local guidance</span></div></section>

    <section className="section systems threshold-section"><div className="threshold-mark" aria-hidden="true"><span>01</span><b>THE<br/>THRESHOLD</b></div><div className="section-heading"><span className="eyebrow">Four entrance systems</span><h2>Architecture begins<br/>at the threshold.</h2><p>Start with the architecture, then refine the design, proportions, opening and smart access.</p></div><div className="system-grid">{doorSystems.map((system) => <Link href={`/doors/${system.slug}`} className="system-card" key={system.slug}><Image src={system.image} alt={system.name} fill sizes="(max-width: 800px) 100vw, 25vw"/><div><span>{system.eyebrow}</span><h3>{system.name}</h3><p>{system.description}</p><b>Explore system <ArrowRight/></b></div></Link>)}</div></section>

    <section className="process-section">
      <div className="process-intro"><span className="eyebrow">From opening to entrance</span><h2>One clear path.<br/><em>Every detail resolved.</em></h2><p>Begin with the architecture of your opening. VALART then brings the door system, surface design, proportions and access together as one considered specification.</p><Link className="text-link" href="/configure">Begin your specification <ArrowRight/></Link></div>
      <div className="process-rail" aria-label="How the VALART process works">
        <article><span>01</span><Ruler/><div><b>Measure the opening</b><p>Set the door width, height and frame conditions.</p></div></article>
        <article><span>02</span><HouseLine/><div><b>Choose the system</b><p>Select the construction that suits the entrance.</p></div></article>
        <article><span>03</span><SelectionForeground/><div><b>Shape the design</b><p>Choose a catalogue face, finish and opening direction.</p></div></article>
        <article><span>04</span><LockKey/><div><b>Add smart access</b><p>Pair the entrance with compatible intelligent hardware.</p></div></article>
        <article><span>05</span><FileText/><div><b>Review and request</b><p>See an indicative estimate and request the final quote.</p></div></article>
      </div>
      <div className="process-aperture" aria-hidden="true"><span>750</span><div><i/><b/></div><span>1500 mm</span></div>
    </section>

    <section className="configure-band"><div className="config-copy"><span className="eyebrow">Door configurator</span><h2>Engineered around<br/><em>your opening.</em></h2><p>Choose a system, catalogue design, dimensions, opening direction, frame and smart lock. Your indicative estimate appears only when the configuration is complete.</p><Link className="button inverse" href="/configure">Start configuring <ArrowRight/></Link></div><div className="door-stage"><span className="dimension dimension-x">750—1500 mm</span><div className="preview-frame"><div className="preview-door"><i/><b/></div><div className="preview-side"/></div><span className="dimension dimension-y">CUSTOM HEIGHT</span></div></section>

    <section className="section"><div className="section-heading horizontal"><div><span className="eyebrow">From the catalogue</span><h2>Selected door designs.</h2></div><Link className="text-link" href="/doors">View all designs <ArrowRight/></Link></div><div className="product-grid">{doorDesigns.slice(0,6).map((door) => <DoorCard key={door.slug} door={door}/>)}</div></section>

    <section className="material-story">
      <div className="material-copy"><span className="eyebrow">Surface · structure · light</span><h2>Designed as part<br/>of the architecture.</h2><p>A VALART entrance is read in layers: the proportion of the opening, the depth of the frame, the character of the surface and the line of the handle. Each choice is considered together.</p><div className="material-spec"><span><b>01</b> Aluminium structure</span><span><b>02</b> Architectural surface</span><span><b>03</b> Integrated access</span></div></div>
      <div className="material-mosaic"><figure className="material-main material-cutout"><Image src="/images/doors/layers/catalog-41.png" alt="Dark stone-finish architectural entrance door" fill sizes="(max-width: 780px) 100vw, 50vw"/></figure><figure className="material-cutout"><Image src="/images/doors/layers/catalog-38.png" alt="Warm architectural entrance surface" fill sizes="25vw"/></figure><figure className="material-cutout"><Image src="/images/doors/layers/catalog-29.png" alt="Contemporary double entrance door" fill sizes="25vw"/></figure></div>
    </section>

    <section className="smart-feature"><div className="smart-photo"><Image src={locks[10].image} alt="Z1 full-automatic smart lock" fill sizes="50vw"/></div><div className="smart-copy"><span className="eyebrow">Smart access</span><h2>Intelligence<br/>at your door.</h2><p>Fingerprint, PIN, card and app access in slim hardware designed for aluminium entrance systems.</p><ul><li>Fingerprint access</li><li>Mobile control options</li><li>PIN and RFID entry</li><li>Mechanical key backup</li></ul><Link className="button outline" href="/smart-locks">Explore smart locks <ArrowRight/></Link></div></section>

    <section className="section"><div className="section-heading horizontal"><div><span className="eyebrow">The smart-lock range</span><h2>Access, considered.</h2></div><Link className="text-link" href="/smart-locks">View all models <ArrowRight/></Link></div><div className="lock-grid">{locks.slice(10,14).map((lock) => <LockCard key={lock.slug} lock={lock}/>)}</div></section>

    <section className="melbourne-strip"><div className="melbourne-word" aria-hidden="true">MELBOURNE</div><div><span className="eyebrow">Local project support</span><h2>Specified for Australian homes.</h2></div><p>Guidance for homeowners, builders, architects and designers—from the first opening measurement through to the final entrance specification.</p><Link className="button outline" href="/contact">Discuss your project <ArrowRight/></Link></section>

    <section className="quote-banner quote-banner-refined"><Image src="/images/hero-valart-dark-v2.png" alt="Contemporary Melbourne home with a custom entrance" fill sizes="100vw"/><div><span className="eyebrow">Begin with your opening</span><h2>Designed for the<br/>way you live.</h2><Link className="button inverse" href="/configure">Configure a door <ArrowRight/></Link></div></section>
  </>;
}
