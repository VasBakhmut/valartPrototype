import type { MetadataRoute } from "next";
import { doorDesigns, doorSystems, locks } from "@/data/catalog";
export default function sitemap():MetadataRoute.Sitemap{const base="https://valart.com.au"; return ["","/doors","/configure","/smart-locks","/resources","/about","/contact"].map(path=>({url:`${base}${path}`,lastModified:new Date()})).concat(doorSystems.map(s=>({url:`${base}/doors/${s.slug}`,lastModified:new Date()})),doorDesigns.map(d=>({url:`${base}/doors/design/${d.slug}`,lastModified:new Date()})),locks.map(l=>({url:`${base}/smart-locks/${l.slug}`,lastModified:new Date()})))}
