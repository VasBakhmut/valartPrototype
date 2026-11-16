import Link from "next/link";
import {ArrowRight,WarningCircle} from "@phosphor-icons/react/dist/ssr";

export type TechnicalSection={title:string;body:string;points?:string[]};
export function TechnicalPage({eyebrow,title,intro,status="Pre-launch information",sections}:{eyebrow:string;title:string;intro:string;status?:string;sections:TechnicalSection[]}){
 return <article className="technical-page">
  <header><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div><aside><span>DOCUMENT STATUS</span><b>{status}</b><p>Final commercial wording, service areas, fees and contact details must be confirmed by VALART before launch.</p></aside></header>
  <div className="technical-layout"><nav aria-label="On this page"><span className="eyebrow">On this page</span>{sections.map((section,index)=><a key={section.title} href={`#section-${index+1}`}><span>{String(index+1).padStart(2,"0")}</span>{section.title}</a>)}</nav><div className="technical-content"><div className="technical-notice"><WarningCircle/><p>This page is production-structured but intentionally avoids inventing unconfirmed business terms. Replace the marked pre-launch information after client and legal review.</p></div>{sections.map((section,index)=><section id={`section-${index+1}`} key={section.title}><span>{String(index+1).padStart(2,"0")}</span><h2>{section.title}</h2><p>{section.body}</p>{section.points&&<ul>{section.points.map(point=><li key={point}>{point}</li>)}</ul>}</section>)}<div className="technical-cta"><span className="eyebrow">Need a project-specific answer?</span><h2>Discuss it before ordering.</h2><p>Custom entrances depend on the selected system, opening, site conditions and installation scope.</p><Link className="button inverse" href="/contact">Contact VALART <ArrowRight/></Link></div></div></div>
 </article>;
}
