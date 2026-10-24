"use client";
import {useMemo,useState} from "react";
import {MagnifyingGlass,X} from "@phosphor-icons/react";
import {DoorCard} from "@/components/DoorCard";
import {doorDesigns,doorSystems} from "@/data/catalog";

const frameFilters=[
 {id:"all",label:"All arrangements"},
 {id:"single",label:"Single & pivot"},
 {id:"double",label:"Double leaf"},
 {id:"sidelight",label:"With sidelights"},
 {id:"panel",label:"Solid panels"},
 {id:"transom",label:"With transom"},
];

export function DoorCatalog(){
 const [system,setSystem]=useState("all"),[frame,setFrame]=useState("all"),[search,setSearch]=useState(""),[view,setView]=useState<"entrance"|"face">("entrance");
 const filtered=useMemo(()=>doorDesigns.filter(door=>{
  const text=`${door.name} ${door.code} ${door.assemblyFrame??""}`.toLowerCase();
  const systemMatch=system==="all"||door.systems.includes(system);
  const arrangement=(door.assemblyFrame??"Single leaf").toLowerCase();
  const frameMatch=frame==="all"||(frame==="single"&&!arrangement.includes("double")&&!arrangement.includes("sidelight"))||(frame==="double"&&arrangement.includes("double"))||(frame==="sidelight"&&arrangement.includes("sidelight"))||(frame==="panel"&&(arrangement.includes("panel")||arrangement.includes("surround")))||(frame==="transom"&&arrangement.includes("transom"));
  return systemMatch&&frameMatch&&text.includes(search.trim().toLowerCase());
 }),[system,frame,search]);
 const clear=()=>{setSystem("all");setFrame("all");setSearch("")};
 return <div className="door-catalog">
  <div className="catalog-toolbar">
   <label className="catalog-search"><MagnifyingGlass/><span className="sr-only">Search the door library</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name, V13 code or arrangement"/></label>
   <div className="catalog-view-switch" aria-label="Choose catalogue image view"><span>View</span><button type="button" className={view==="entrance"?"active":""} onClick={()=>setView("entrance")}>Complete entrance</button><button type="button" className={view==="face"?"active":""} onClick={()=>setView("face")}>Door design</button></div>
   <div className="catalog-count"><b>{String(filtered.length).padStart(2,"0")}</b><span>of {doorDesigns.length}<br/>designs</span></div>
  </div>
  <div className="catalog-filter-row" aria-label="Filter by entrance system">
   <span>System</span><button className={system==="all"?"active":""} onClick={()=>setSystem("all")}>All systems</button>{doorSystems.map(item=><button className={system===item.slug?"active":""} key={item.slug} onClick={()=>setSystem(item.slug)}>{item.name}</button>)}
  </div>
  <div className="catalog-filter-row" aria-label="Filter by frame arrangement">
   <span>Arrangement</span>{frameFilters.map(item=><button className={frame===item.id?"active":""} key={item.id} onClick={()=>setFrame(item.id)}>{item.label}</button>)}
  </div>
  <div className="catalog-result-line"><span>{view==="entrance"?"Showing complete catalogue compositions":"Showing door-face designs without surrounding frame emphasis"}</span>{(system!=="all"||frame!=="all"||search)&&<button type="button" onClick={clear}><X/> Reset filters</button>}</div>
  {filtered.length?<div className="product-grid door-library-grid">{filtered.map(door=><DoorCard key={door.slug} door={door} view={view}/>)}</div>:<div className="catalog-empty"><h3>No entrance matches these filters.</h3><p>Clear the filters to return to the complete Version 13 library.</p><button onClick={clear}><X/> Clear filters</button></div>}
 </div>;
}
