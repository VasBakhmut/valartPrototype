"use client";
import Image from "next/image";
import Link from "next/link";
import {useMemo,useState} from "react";
import {ArrowRight,MagnifyingGlass,X} from "@phosphor-icons/react";
import {doorDesigns,doorSystems,locks} from "@/data/catalog";

type SearchItem={name:string;description:string;href:string;type:string;keywords:string;image?:string};
const pages:SearchItem[]=[
 {name:"Door configurator",description:"Build a custom entrance specification with system, dimensions, opening, frame and optional smart lock.",href:"/configure",type:"Tool",keywords:"custom quote dimensions"},
 {name:"Shipping & delivery",description:"Current prototype information for door and smart-lock delivery.",href:"/shipping",type:"Support",keywords:"freight pickup melbourne"},
 {name:"Returns",description:"Returns, custom products and Australian Consumer Law information.",href:"/returns",type:"Support",keywords:"refund exchange consumer"},
 {name:"Warranty",description:"Door, finish, hardware, lock and installation warranty overview.",href:"/warranty",type:"Support",keywords:"guarantee service"},
 {name:"Frequently asked questions",description:"Answers about configuration, pricing, installation and smart locks.",href:"/faq",type:"Guide",keywords:"help process"},
 {name:"Resources",description:"Door measurement, opening, care and smart-lock guidance.",href:"/resources",type:"Guide",keywords:"technical architect builder"},
 {name:"Contact VALART",description:"Discuss a Melbourne entrance project with the VALART team.",href:"/contact",type:"Company",keywords:"showroom phone email"},
 {name:"About VALART",description:"Premium entrance doors and intelligent access for Australian homes.",href:"/about",type:"Company",keywords:"melbourne story"},
];
const all:SearchItem[]=[
 ...doorDesigns.map(item=>({name:`${item.name} · ${item.code}`,description:item.assemblyFrame??"Custom entrance design",href:`/doors/design/${item.slug}`,type:"Door design",keywords:`${item.systems.join(" ")} version 13 ${item.page}`,image:item.assemblyImage??item.layerImage??item.image})),
 ...doorSystems.map(item=>({name:item.name,description:item.description,href:`/doors/${item.slug}`,type:"Door system",keywords:item.eyebrow,image:item.image})),
 ...locks.map(item=>({name:`Smart Lock ${item.model}`,description:`${item.type} · ${item.access.join(" · ")}`,href:`/smart-locks/${item.slug}`,type:"Smart lock",keywords:`${item.app} ${item.material} fingerprint pin RFID`,image:item.image})),
 ...pages,
];

export default function SearchPage(){
 const [query,setQuery]=useState(""),[filter,setFilter]=useState("All");
 const types=["All","Door design","Door system","Smart lock","Guide","Support","Company","Tool"];
 const results=useMemo(()=>{const q=query.trim().toLowerCase();return all.filter(item=>(filter==="All"||item.type===filter)&&(!q||`${item.name} ${item.description} ${item.keywords}`.toLowerCase().includes(q)))},[query,filter]);
 const visible=query||filter!=="All"?results:all.slice(0,8);
 return <section className="search-page">
  <header className="search-hero"><span className="eyebrow">VALART index</span><h1>Find the right<br/>entrance detail.</h1><label className="global-search"><MagnifyingGlass/><span className="sr-only">Search VALART</span><input autoFocus value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search V13-29, pivot, fingerprint or delivery"/>{query&&<button type="button" onClick={()=>setQuery("")} aria-label="Clear search"><X/></button>}</label><div className="search-suggestions"><span>Try</span>{["pivot","V13-29","fingerprint","delivery"].map(term=><button type="button" key={term} onClick={()=>setQuery(term)}>{term}</button>)}</div></header>
  <div className="search-body"><aside><span className="eyebrow">Filter index</span>{types.map(type=><button type="button" className={filter===type?"active":""} onClick={()=>setFilter(type)} key={type}>{type}<span>{type==="All"?all.length:all.filter(item=>item.type===type).length}</span></button>)}</aside><div className="search-index"><div className="search-index-heading"><span>{query?`Results for “${query}”`:"Suggested destinations"}</span><b>{visible.length} results</b></div>{visible.length?<div className="search-result-grid">{visible.map(item=><Link href={item.href} key={item.href} className="search-result-card">{item.image?<div><Image src={item.image} alt="" fill sizes="(max-width:700px) 100vw,240px"/></div>:<span className="search-result-mark">{item.type.slice(0,2).toUpperCase()}</span>}<article><span className="eyebrow">{item.type}</span><h2>{item.name}</h2><p>{item.description}</p><b>Open <ArrowRight/></b></article></Link>)}</div>:<div className="search-empty"><h2>No exact match.</h2><p>Try a model number, door arrangement, access method or support topic.</p><button type="button" onClick={()=>{setQuery("");setFilter("All")}}>Reset search</button></div>}</div></div>
 </section>;
}
