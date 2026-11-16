import type {Metadata} from "next";
import Link from "next/link";
import {ArrowRight,Door,FrameCorners,Ruler,ShieldCheck,Wrench,Drop} from "@phosphor-icons/react/dist/ssr";
export const metadata:Metadata={title:"Entrance Door Guides & Resources | VALART",description:"Practical guidance for selecting, measuring, configuring and caring for custom entrance doors and smart locks.",alternates:{canonical:"/resources"}};
const resources=[
 {title:"Choose an entrance system",text:"Compare movement, frame scale and architectural intent across the four VALART systems.",href:"/doors",label:"Door systems",Icon:Door},
 {title:"Measure the working opening",text:"Understand the difference between door-leaf width and the complete architectural frame.",href:"/configure",label:"Configurator",Icon:Ruler},
 {title:"Left, right, inward or outward",text:"Select handing from the exterior approach and prepare it for final site verification.",href:"/faq",label:"Opening guide",Icon:FrameCorners},
 {title:"Smart-lock compatibility",text:"Compare access methods and add a model to the complete entrance specification.",href:"/smart-locks",label:"Intelligent access",Icon:ShieldCheck},
 {title:"Prepare for installation",text:"See which project details should be ready before site measure and quotation.",href:"/request-a-quote",label:"Project planning",Icon:Wrench},
 {title:"Care and warranty structure",text:"Review the current pre-launch framework for finishes, hardware and maintenance.",href:"/warranty",label:"Aftercare",Icon:Drop},
];
export default function Resources(){return <><section className="editorial-hero resource-hero"><span className="eyebrow">Guides & technical resources</span><h1>Specify with fewer unknowns.</h1><p>Practical paths for homeowners, architects and builders—from first dimensions to intelligent access and installation review.</p></section><section className="section resource-section"><div className="resource-grid resource-grid-v2">{resources.map(({title,text,href,label,Icon},index)=><Link href={href} key={title}><div><span className="mono">{String(index+1).padStart(2,"0")} · {label}</span><Icon/></div><h2>{title}</h2><p>{text}</p><b>Open resource <ArrowRight/></b></Link>)}</div></section></>};
