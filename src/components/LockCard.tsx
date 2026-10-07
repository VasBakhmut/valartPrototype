"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "@phosphor-icons/react";
import type { Lock } from "@/data/catalog";
import { money } from "@/data/catalog";
import { useCart } from "@/store/cart";

export function LockCard({ lock }: { lock: Lock }) {
  const add = useCart((state) => state.add);
  return <article className="lock-card"><Link href={`/smart-locks/${lock.slug}`} className="lock-image"><Image src={lock.image} alt={`VALART ${lock.model} smart lock`} fill sizes="(max-width: 700px) 100vw, 25vw"/></Link><div className="lock-info"><span className="eyebrow">{lock.type}</span><h3>{lock.model}</h3><p>{lock.access.slice(0,3).join(" · ")}</p><div><strong>{money(lock.price)}</strong><button onClick={() => add({ id: `lock-${lock.model}`, kind: "lock", name: `Smart Lock ${lock.model}`, price: lock.price, image: lock.image, quantity: 1 })} aria-label={`Add ${lock.model} to cart`}><ShoppingBag size={19}/> Add</button></div></div></article>;
}
