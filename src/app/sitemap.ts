import type {MetadataRoute} from "next";
import {doorDesigns,doorSystems,locks} from "@/data/catalog";
const base="https://valart.com.au",updated=new Date("2026-10-21");
export default function sitemap():MetadataRoute.Sitemap{
 const pages=[
  ["",1,"weekly"],["/doors",.95,"weekly"],["/configure",.95,"monthly"],["/smart-locks",.9,"weekly"],["/resources",.7,"monthly"],["/about",.6,"monthly"],["/contact",.7,"monthly"],["/request-a-quote",.85,"monthly"],["/faq",.65,"monthly"],["/shipping",.5,"monthly"],["/returns",.5,"monthly"],["/warranty",.5,"monthly"],["/privacy",.3,"yearly"],["/terms",.3,"yearly"]
 ] as const;
 return [
  ...pages.map(([path,priority,changeFrequency])=>({url:`${base}${path}`,lastModified:updated,priority,changeFrequency})),
  ...doorSystems.map(item=>({url:`${base}/doors/${item.slug}`,lastModified:updated,priority:.85,changeFrequency:"monthly" as const})),
  ...doorDesigns.map(item=>({url:`${base}/doors/design/${item.slug}`,lastModified:updated,priority:.75,changeFrequency:"monthly" as const})),
  ...locks.map(item=>({url:`${base}/smart-locks/${item.slug}`,lastModified:updated,priority:.7,changeFrequency:"monthly" as const})),
 ];
}
