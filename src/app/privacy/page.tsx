import type {Metadata} from "next";import {TechnicalPage} from "@/components/TechnicalPage";
export const metadata:Metadata={title:"Privacy Policy | VALART Australia",description:"Pre-launch privacy policy structure for the VALART website and project enquiry process.",alternates:{canonical:"/privacy"}};
export default function Privacy(){return <TechnicalPage eyebrow="Legal" title="Privacy policy." intro="This structure identifies the information the finished website may collect. It must be reviewed against the final analytics, commerce, CRM and hosting setup." sections={[
 {title:"Information collected",body:"The live site may collect contact details, project information, delivery details, door specifications and communications submitted by customers."},
 {title:"How information is used",body:"Information may be used to answer enquiries, prepare quotations, manage orders, arrange delivery or installation and improve website operation."},
 {title:"Website technology",body:"Cookies, analytics, advertising tools and payment-provider data flows must be listed only after the final services are selected and configured."},
 {title:"Disclosure and storage",body:"The final policy must name relevant service-provider categories, overseas handling if applicable, retention practices and reasonable security measures."},
 {title:"Access and contact",body:"Privacy contact details and the process for requesting access, correction or raising a concern require client confirmation."}
 ]}/>}