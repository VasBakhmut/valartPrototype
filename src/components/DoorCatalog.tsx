"use client";
import {useMemo,useState} from "react";
import {MagnifyingGlass} from "@phosphor-icons/react";
import {DoorCard} from "@/components/DoorCard";
import {doorDesigns} from "@/data/catalog";

export function DoorCatalog(){
 const [search,setSearch]=useState("");
 const filtered=useMemo(()=>doorDesigns.filter(door=>`${door.name} ${door.code}`.toLowerCase().includes(search.trim().toLowerCase())),[search]);
 return <div className="door-catalog collection-door-catalog"><label className="collection-search"><MagnifyingGlass/><input value={search} onChange={event=>setSearch(event.target.value)} placeholder="Search by name or V13 code"/><span>{filtered.length} results</span></label>{filtered.length?<div className="product-grid door-library-grid">{filtered.map(door=><DoorCard key={door.slug} door={door}/>)}</div>:<div className="catalog-empty"><h3>No design matches that search.</h3><p>Try another model name or Version 13 code.</p></div>}</div>;
}
