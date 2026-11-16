"use client";
import Image from "next/image";
import Link from "next/link";
import {FormEvent,useState} from "react";
import {ArrowLeft,ArrowRight,CheckCircle,CreditCard,ShieldCheck,Truck} from "@phosphor-icons/react";
import {money} from "@/data/catalog";
import {useCart} from "@/store/cart";

export default function CheckoutPage(){
 const {items,remove}=useCart(),products=items.filter(item=>item.kind==="lock"),subtotal=products.reduce((sum,item)=>sum+item.price*item.quantity,0);
 const [complete,setComplete]=useState(false);
 const submit=(event:FormEvent<HTMLFormElement>)=>{event.preventDefault();const data=new FormData(event.currentTarget),record={reference:`VAL-PROTOTYPE-${products.map(item=>item.id.replace("lock-","")).join("-").toUpperCase()}`,customer:Object.fromEntries(data),items:products};localStorage.setItem("valart-last-prototype-checkout",JSON.stringify(record));products.forEach(item=>remove(item.id));setComplete(true)};
 if(complete)return <section className="flow-success"><CheckCircle weight="thin"/><span className="eyebrow">Frontend demonstration complete</span><h1>Checkout flow confirmed.</h1><p>No payment was taken and no order was sent. The prototype successfully captured the flow locally in this browser.</p><div className="button-row"><Link className="button dark" href="/smart-locks">Continue browsing</Link><Link className="button outline" href="/">Return home</Link></div></section>;
 if(products.length===0)return <section className="flow-empty"><span className="eyebrow">Prototype checkout</span><h1>No products to check out.</h1><p>Add at least one smart lock to use the checkout demonstration.</p><Link className="button dark" href="/smart-locks">Browse smart locks <ArrowRight/></Link></section>;
 return <section className="commerce-flow">
  <div className="flow-main"><Link className="flow-back" href="/cart"><ArrowLeft/> Back to selection</Link><span className="eyebrow">Prototype checkout · Australia</span><h1>Delivery details.</h1><p className="flow-intro">Complete the frontend flow for the selected smart locks. Payment remains intentionally unavailable until the commerce backend is connected.</p>
   <form className="commerce-form" onSubmit={submit}>
    <fieldset><legend>Contact</legend><div className="flow-fields"><label>First name<input name="firstName" autoComplete="given-name" required placeholder="Alex"/></label><label>Last name<input name="lastName" autoComplete="family-name" required placeholder="Taylor"/></label><label className="full">Email<input name="email" type="email" autoComplete="email" required placeholder="alex@example.com"/></label><label className="full">Phone<input name="phone" type="tel" autoComplete="tel" required placeholder="04xx xxx xxx"/></label></div></fieldset>
    <fieldset><legend>Delivery address</legend><div className="flow-fields"><label className="full">Street address<input name="address" autoComplete="street-address" required placeholder="Street and number"/></label><label>Suburb<input name="suburb" autoComplete="address-level2" required placeholder="Melbourne"/></label><label>State<select name="state" autoComplete="address-level1" defaultValue="VIC" required><option>VIC</option><option>NSW</option><option>QLD</option><option>SA</option><option>WA</option><option>TAS</option><option>ACT</option><option>NT</option></select></label><label>Postcode<input name="postcode" autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{4}" required placeholder="3000"/></label><label>Delivery preference<select name="deliveryPreference" defaultValue="delivery"><option value="delivery">Delivery</option><option value="pickup">Showroom pickup</option><option value="confirm">Confirm with VALART</option></select></label></div></fieldset>
    <div className="prototype-payment"><CreditCard/><div><b>Payment is not connected</b><span>This button records a local prototype confirmation only.</span></div></div>
    <button className="button dark wide" type="submit">Complete prototype checkout <ArrowRight/></button>
   </form>
  </div>
  <aside className="flow-rail"><span className="eyebrow">Order summary</span><div className="flow-items">{products.map(item=><article key={item.id}><div><Image src={item.image??"/brand/valart-monogram.svg"} alt="" fill sizes="74px"/><span>{item.quantity}</span></div><p><b>{item.name}</b><small>{money(item.price)} each</small></p><strong>{money(item.price*item.quantity)}</strong></article>)}</div><dl><div><dt>Subtotal</dt><dd>{money(subtotal)}</dd></div><div><dt>Delivery</dt><dd>To confirm</dd></div><div><dt>Total today</dt><dd>{money(0)}</dd></div></dl><div className="flow-assurances"><p><ShieldCheck/> Compatibility checked before fulfilment</p><p><Truck/> Delivery or showroom pickup confirmed later</p></div></aside>
 </section>;
}
