import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "@phosphor-icons/react/dist/ssr";
import type {Lock} from "@/data/catalog";
import {money} from "@/data/catalog";
import {AddLockButton} from "@/components/AddLockButton";

export function LockCard({lock,index}:{lock:Lock;index?:number}){
 return <article className="lock-card lock-library-card">
  <Link href={`/smart-locks/${lock.slug}`} className="lock-image">
   <span className="lock-index">{String((index??0)+1).padStart(2,"0")}</span>
   <Image src={lock.image} alt={`VALART ${lock.model} smart lock`} fill sizes="(max-width:600px) 100vw,(max-width:1100px) 50vw,25vw"/>
   <span className="lock-card-link">View details <ArrowRight/></span>
  </Link>
  <div className="lock-info"><div className="lock-type"><span>{lock.type}</span><span>{lock.material}</span></div><h3>{lock.model}</h3><p>{lock.access.join(" · ")}</p><div className="lock-purchase"><strong>{money(lock.price)} <small>AUD</small></strong><AddLockButton lock={lock} className="lock-add"/></div></div>
 </article>;
}
