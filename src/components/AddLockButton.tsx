"use client";
import {Check,ShoppingBag} from "@phosphor-icons/react";
import {useState} from "react";
import {useCart} from "@/store/cart";
import type {Lock} from "@/data/catalog";

export function AddLockButton({lock,className="button dark wide"}:{lock:Lock;className?:string}){
 const add=useCart(state=>state.add),[added,setAdded]=useState(false);
 const handle=()=>{add({id:`lock-${lock.model}`,kind:"lock",name:`Smart Lock ${lock.model}`,price:lock.price,image:lock.image,quantity:1});setAdded(true);window.setTimeout(()=>setAdded(false),1800)};
 return <button type="button" className={className} onClick={handle}>{added?<><Check/> Added to cart</>:<>Add to cart <ShoppingBag/></>}</button>;
}
