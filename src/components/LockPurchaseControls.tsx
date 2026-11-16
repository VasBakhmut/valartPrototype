"use client";

import {useState} from "react";
import {Check,Minus,Plus,ShoppingCart} from "@phosphor-icons/react";
import {useRouter} from "next/navigation";
import type {Lock} from "@/data/catalog";
import {useCart} from "@/store/cart";

export function LockPurchaseControls({lock}:{lock:Lock}){
 const [quantity,setQuantity]=useState(1),[operation,setOperation]=useState<Lock["type"]>(lock.type),[finish,setFinish]=useState("Black"),[added,setAdded]=useState(false);
 const add=useCart(state=>state.add);
 const router=useRouter();
 const addToCart=()=>{for(let index=0;index<quantity;index++)add({id:`lock-${lock.slug}-${finish.toLowerCase()}`,kind:"lock",name:`Smart Lock ${lock.model}`,price:lock.price,image:lock.image,quantity:1,details:`${operation} · ${finish}`});setAdded(true);window.setTimeout(()=>setAdded(false),1600)};
 return <div className="lock-purchase-controls">
  <div className="lock-choice"><span>Operation</span><div><button type="button" className={operation===lock.type?"active":""} onClick={()=>setOperation(lock.type)}>{lock.type}</button><button type="button" className={operation!==lock.type?"active":""} onClick={()=>setOperation(lock.type==="Full-automatic"?"Semi-automatic":"Full-automatic")}>{lock.type==="Full-automatic"?"Semi-automatic":"Full-automatic"}</button></div></div>
  <div className="lock-choice finish-choice"><span>Finish</span><div><button type="button" aria-label="Black finish" className={finish==="Black"?"active black":"black"} onClick={()=>setFinish("Black")}/><button type="button" aria-label="Aluminium finish" className={finish==="Aluminium"?"active aluminium":"aluminium"} onClick={()=>setFinish("Aluminium")}/></div></div>
  <div className="lock-purchase-row"><div className="lock-quantity"><button type="button" aria-label="Decrease quantity" onClick={()=>setQuantity(value=>Math.max(1,value-1))}><Minus/></button><span>{quantity}</span><button type="button" aria-label="Increase quantity" onClick={()=>setQuantity(value=>value+1)}><Plus/></button></div><button type="button" className="lock-cart-button" onClick={addToCart}>{added?<><Check/>Added to cart</>:<><ShoppingCart/>Add to cart</>}</button></div>
  <button type="button" className="lock-buy-button" onClick={()=>{addToCart();router.push("/cart")}}>Buy now</button>
 </div>;
}
