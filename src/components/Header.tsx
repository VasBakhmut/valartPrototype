"use client";
import Image from "next/image";
import Link from "next/link";
import { List, MagnifyingGlass, ShoppingBag, X } from "@phosphor-icons/react";
import { useState } from "react";
import { useCart } from "@/store/cart";

const links = [["Doors","/doors"],["Smart locks","/smart-locks"],["Configurator","/configure"],["Resources","/resources"],["About","/about"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const count = useCart((state) => state.items.reduce((sum, item) => sum + item.quantity, 0));
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="VALART home"><Image src="/brand/valart-compact.svg" alt="VALART" width={104} height={70} priority /></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <div className="header-tools">
      <Link href="/search" aria-label="Search"><MagnifyingGlass size={20}/></Link>
      <Link href="/cart" className="cart-link" aria-label={`Cart with ${count} items`}><ShoppingBag size={21}/>{count > 0 && <span>{count}</span>}</Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X/> : <List/>}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href}>{label}</Link>)}<Link href="/contact">Contact</Link></nav>}
  </header>;
}
