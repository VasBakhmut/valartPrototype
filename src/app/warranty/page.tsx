import type {Metadata} from "next";import {TechnicalPage} from "@/components/TechnicalPage";
export const metadata:Metadata={title:"Door & Smart Lock Warranty | VALART",description:"Pre-launch warranty structure for VALART doors, finishes, hardware, smart locks and installation.",alternates:{canonical:"/warranty"}};
export default function Warranty(){return <TechnicalPage eyebrow="Customer information" title="Warranty." intro="The final warranty will distinguish the manufactured door, surface finish, hardware, smart lock and installation workmanship." sections={[
 {title:"Entrance system",body:"Coverage period, manufacturing tolerances, exclusions and the claim process for door leaves and frames require final client approval."},
 {title:"Finishes and materials",body:"Care requirements and finish-specific coverage must be aligned with the selected facade, colour and exposure conditions."},
 {title:"Hardware and smart locks",body:"Manufacturer warranties may vary by model. Final product pages must identify the applicable coverage, software dependencies and battery responsibilities."},
 {title:"Installation",body:"Workmanship coverage applies only where installation is supplied by the approved installer. The exact term and service area remain to be confirmed."},
 {title:"Making a claim",body:"The final process should request proof of purchase, photographs, installation details and a description of the issue before assessment."}
 ]}/>}