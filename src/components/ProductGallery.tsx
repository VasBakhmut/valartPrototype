"use client";

import Image from "next/image";
import {useState} from "react";

type GalleryItem={src:string;alt:string;label:string;kind:"product"|"editorial"};

export function ProductGallery({items}: {items:GalleryItem[]}){
 const [active,setActive]=useState(0);
 const item=items[active];
 return <div className="pdp-gallery">
  <div className={`pdp-gallery-main ${item.kind}`}>
   <Image src={item.src} alt={item.alt} fill preload={active===0} sizes="(max-width: 960px) 100vw, 52vw"/>
   <span>{item.label}</span>
  </div>
  <div className="pdp-gallery-thumbs" aria-label="Product images">
   {items.map((image,index)=><button key={image.src} type="button" className={index===active?"active":""} onClick={()=>setActive(index)} aria-label={`Show ${image.label}`} aria-pressed={index===active}>
    <span><Image src={image.src} alt="" fill sizes="120px"/></span><b>{image.label}</b>
   </button>)}
  </div>
 </div>;
}
