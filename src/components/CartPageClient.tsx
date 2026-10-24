"use client";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight,Minus,Plus,Trash,PencilSimple,ShoppingBag,FileText} from "@phosphor-icons/react";
import {useCart} from "@/store/cart";
import {money} from "@/data/catalog";

export default function CartPage(){
 const {items,remove,setQuantity}=useCart(),products=items.filter(item=>item.kind==="lock"),quotes=items.filter(item=>item.kind==="quote");
 const productCount=products.reduce((sum,item)=>sum+item.quantity,0),subtotal=products.reduce((sum,item)=>sum+item.price*item.quantity,0);
 return <section className="cart-page cart-v2">
  <header className="cart-heading"><div><span className="eyebrow">Selection register</span><h1>Cart & quote list.</h1></div><p>Smart locks can continue to prototype checkout. Custom entrances remain separate and continue to a project quotation.</p></header>
  {items.length===0?<div className="empty-cart"><span className="empty-mark">VA</span><h2>Your selection is empty.</h2><p>Browse smart locks or build a custom entrance specification to begin.</p><div className="button-row"><Link className="button dark" href="/configure">Configure a door <ArrowRight/></Link><Link className="button outline" href="/smart-locks">Browse smart locks</Link></div></div>:
  <div className="cart-layout">
   <div className="cart-register">
    {products.length>0&&<section className="cart-group"><div className="cart-group-title"><span><ShoppingBag/> Products</span><b>{productCount} {productCount===1?"item":"items"}</b></div>{products.map(item=><article className="cart-item" key={item.id}>{item.image&&<div className="cart-item-image"><Image src={item.image} alt="" fill sizes="110px"/></div>}<div className="cart-item-copy"><span className="eyebrow">Smart lock · Supply item</span><h3>{item.name}</h3><Link href={`/smart-locks/${item.id.replace("lock-","").toLowerCase()}`}>View product</Link></div><strong className="cart-line-price">{money(item.price*item.quantity)}</strong><div className="quantity" aria-label={`Quantity for ${item.name}`}><button type="button" onClick={()=>setQuantity(item.id,item.quantity-1)} aria-label="Decrease quantity"><Minus/></button><span>{item.quantity}</span><button type="button" onClick={()=>setQuantity(item.id,item.quantity+1)} aria-label="Increase quantity"><Plus/></button></div><button type="button" className="remove" onClick={()=>remove(item.id)} aria-label={`Remove ${item.name}`}><Trash/></button></article>)}</section>}
    {quotes.length>0&&<section className="cart-group quote-group"><div className="cart-group-title"><span><FileText/> Custom entrances</span><b>{quotes.length} awaiting quote</b></div>{quotes.map(item=><article className="cart-item quote-item" key={item.id}>{item.image&&<div className="cart-item-image quote-image"><Image src={item.image} alt="" fill sizes="110px"/></div>}<div className="cart-item-copy"><span className="eyebrow">Door specification</span><h3>{item.name}</h3><p>{item.details}</p><strong>Indicative estimate · {money(item.price)}</strong><Link href="/configure"><PencilSimple/> Edit latest configuration</Link></div><button type="button" className="remove" onClick={()=>remove(item.id)} aria-label={`Remove ${item.name}`}><Trash/></button></article>)}</section>}
   </div>
   <aside className="cart-summary"><span className="eyebrow">Selection summary</span>{products.length>0&&<><div><span>Smart-lock subtotal</span><b>{money(subtotal)}</b></div><p>Delivery, installation and final GST treatment will be confirmed when commerce is connected.</p><Link className="button dark wide" href="/checkout">Continue to checkout <ArrowRight/></Link></>}{quotes.length>0&&<><div><span>Door specifications</span><b>{quotes.length}</b></div><p>Entrance estimates are not charged at checkout. Send the specifications for project review.</p><Link className="button outline wide" href="/request-a-quote">Request a quote <ArrowRight/></Link></>}<div className="summary-note"><span>Prototype status</span><p>No payment or enquiry is transmitted from this frontend build.</p></div></aside>
  </div>}
 </section>;
}
