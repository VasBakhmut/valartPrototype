"use client";
import Image from "next/image";
import Link from "next/link";
import {List,MagnifyingGlass,ShoppingBag,X,ArrowRight} from "@phosphor-icons/react";
import {useEffect,useState} from "react";
import {usePathname} from "next/navigation";
import {useCart} from "@/store/cart";

const links=[["Doors","/doors"],["Smart locks","/smart-locks"],["Configurator","/configure"],["Resources","/resources"],["About","/about"]];
export function Header(){
 const [open,setOpen]=useState(false),pathname=usePathname(),count=useCart(state=>state.items.reduce((sum,item)=>sum+item.quantity,0));
 useEffect(()=>{if(!open)return;const close=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false)};document.addEventListener("keydown",close);document.body.classList.add("menu-open");return()=>{document.removeEventListener("keydown",close);document.body.classList.remove("menu-open")}},[open]);
 const active=(href:string)=>href==="/"?pathname==="/":pathname.startsWith(href);
 const close=()=>setOpen(false);
 return <header className="site-header">
  <Link href="/" className="brand" aria-label="VALART home"><Image src="/brand/valart-compact.svg" alt="" width={170} height={82} priority/></Link>
  <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href} aria-current={active(href)?"page":undefined}>{label}</Link>)}</nav>
  <div className="header-tools"><Link href="/search" aria-label="Search VALART" aria-current={pathname==="/search"?"page":undefined}><MagnifyingGlass size={20}/></Link><Link href="/cart" className="cart-link" aria-label={`Selection with ${count} items`} aria-current={pathname==="/cart"?"page":undefined}><ShoppingBag size={21}/>{count>0&&<span aria-hidden>{count}</span>}</Link><button type="button" className="menu-button" onClick={()=>setOpen(value=>!value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?"Close menu":"Open menu"}>{open?<X/>:<List/>}</button></div>
  {open&&<nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"><div className="mobile-nav-index"><span>VALART / MENU</span><span>MELBOURNE · AU</span></div>{links.map(([label,href],index)=><Link onClick={close} key={href} href={href} aria-current={active(href)?"page":undefined}><span>{String(index+1).padStart(2,"0")}</span>{label}</Link>)}<div className="mobile-nav-actions"><Link onClick={close} href="/request-a-quote">Request a quote <ArrowRight/></Link><Link onClick={close} href="/contact">Contact</Link></div></nav>}
 </header>;
}
