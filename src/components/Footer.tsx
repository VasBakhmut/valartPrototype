import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return <footer className="footer"><div className="footer-main">
    <div className="footer-brand"><Image src="/brand/valart-compact.svg" alt="VALART" width={150} height={108}/><p>Premium entrance doors and intelligent access for considered Australian homes.</p><span>Melbourne, Victoria</span></div>
    <div><h3>Explore</h3><Link href="/doors">Doors</Link><Link href="/configure">Configurator</Link><Link href="/smart-locks">Smart locks</Link></div>
    <div><h3>Company</h3><Link href="/about">About</Link><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link></div>
    <div><h3>Support</h3><Link href="/faq">FAQ</Link><Link href="/shipping">Shipping</Link><Link href="/returns">Returns</Link><Link href="/warranty">Warranty</Link></div>
  </div><div className="footer-bottom"><span>© 2026 VALART STAR. All rights reserved.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></footer>;
}
