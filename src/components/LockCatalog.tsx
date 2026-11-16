"use client";
import {useMemo,useState} from "react";
import {MagnifyingGlass,X} from "@phosphor-icons/react";
import {locks} from "@/data/catalog";
import {LockCard} from "@/components/LockCard";

const access=["All access","Fingerprint","PIN code","RFID card","Face / palm options"];
export function LockCatalog(){
 const [type,setType]=useState("all"),[method,setMethod]=useState("All access"),[search,setSearch]=useState("");
 const filtered=useMemo(()=>locks.filter(lock=>(type==="all"||lock.type===type)&&(method==="All access"||lock.access.includes(method))&&(`${lock.model} ${lock.app} ${lock.material}`.toLowerCase().includes(search.trim().toLowerCase()))),[type,method,search]);
 const clear=()=>{setType("all");setMethod("All access");setSearch("")};
 return <div className="lock-catalog">
  <div className="catalog-toolbar lock-toolbar"><label className="catalog-search"><MagnifyingGlass/><span className="sr-only">Search smart locks</span><input value={search} onChange={event=>setSearch(event.target.value)} placeholder="Search model, app or material"/></label><div className="catalog-count"><b>{String(filtered.length).padStart(2,"0")}</b><span>of {locks.length}<br/>models</span></div></div>
  <div className="catalog-filter-row" aria-label="Filter by lock operation"><span>Operation</span><button type="button" className={type==="all"?"active":""} onClick={()=>setType("all")}>All models</button><button type="button" className={type==="Semi-automatic"?"active":""} onClick={()=>setType("Semi-automatic")}>Semi-automatic</button><button type="button" className={type==="Full-automatic"?"active":""} onClick={()=>setType("Full-automatic")}>Full-automatic</button></div>
  <div className="catalog-filter-row" aria-label="Filter by access method"><span>Access</span>{access.map(item=><button type="button" className={method===item?"active":""} onClick={()=>setMethod(item)} key={item}>{item}</button>)}</div>
  {filtered.length?<div className="lock-grid lock-library-grid">{filtered.map((lock,index)=><LockCard key={lock.slug} lock={lock} index={index}/>)}</div>:<div className="catalog-empty"><h3>No lock matches these filters.</h3><p>Clear the filters to return to the complete smart-lock range.</p><button type="button" onClick={clear}><X/> Clear filters</button></div>}
 </div>;
}
