import type {Metadata} from "next";
import Link from "next/link";
import {ArrowRight} from "@phosphor-icons/react/dist/ssr";
export const metadata:Metadata={title:"Entrance Door & Smart Lock FAQ | VALART",description:"Answers about VALART custom door dimensions, estimates, frames, smart locks, installation and Melbourne projects.",alternates:{canonical:"/faq"}};
const groups=[
 {title:"Custom entrances",items:[
  ["How does the custom door process work?","Choose an entrance system and Version 13 design, enter working dimensions, select the opening and complete frame arrangement, then add a smart lock if required. VALART reviews the saved specification before providing final engineering and pricing."],
  ["When is the door price shown?","The configurator shows an indicative planning estimate only at the final review step. The confirmed price is provided after the project details, dimensions, installation and delivery requirements are reviewed."],
  ["What door sizes can I configure?","The working door-leaf width is 750–1500 mm. The complete frame can be made to the architectural opening, including compatible sidelights, solid panels and transoms."],
  ["Are the catalogue designs fixed products?","No. Version 13 images are architectural design references. Final proportions, frame composition, finish and technical detailing are resolved for the project."]
 ]},
 {title:"Opening, frame and installation",items:[
  ["How is left or right opening defined?","The configurator describes handing as viewed from the exterior approach. Final handing and clearances are checked before manufacturing."],
  ["Do you provide site measure and installation?","The frontend is prepared to request site measure, delivery and installation. Service area, scope and pricing still require final confirmation from VALART."],
  ["Can you replace an existing entrance?","Use the quote form and select Door replacement as the project type. Removal work and existing-site conditions are assessed as part of the quotation."]
 ]},
 {title:"Smart locks",items:[
  ["Can I buy a smart lock separately?","Yes. The prototype supports adding a smart lock directly to the cart. Final stock, payment, delivery and installation will be connected with the commerce backend."],
  ["Why can a lock be added to a door specification?","Door construction, handing, hardware preparation and installation affect compatibility. Adding a lock to the specification lets VALART review the complete entrance together."],
  ["Which access methods are available?","The catalogue includes model-dependent fingerprint, PIN, RFID card, mechanical key, mobile-app and face or palm options. Check the individual product page for each model."]
 ]},
];
export default function FAQ(){return <><section className="support-hero"><span className="eyebrow">Questions, resolved</span><h1>Before the quote.<br/>Before the threshold.</h1><p>Confirmed answers from the current VALART specification flow. Operational details still awaiting client approval are identified clearly.</p></section><section className="faq-layout"><aside><span className="eyebrow">Topics</span>{groups.map((group,index)=><a href={`#faq-${index}`} key={group.title}>{group.title}</a>)}<Link className="button dark wide" href="/contact">Ask VALART <ArrowRight/></Link></aside><div>{groups.map((group,index)=><section id={`faq-${index}`} key={group.title}><span className="eyebrow">{group.title}</span>{group.items.map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden>+</span></summary><p>{answer}</p></details>)}</section>)}</div></section></>};
