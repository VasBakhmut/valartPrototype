import type {Metadata} from "next";import {TechnicalPage} from "@/components/TechnicalPage";
export const metadata:Metadata={title:"Terms & Conditions | VALART Australia",description:"Pre-launch commercial terms structure for VALART smart locks and custom entrance projects.",alternates:{canonical:"/terms"}};
export default function Terms(){return <TechnicalPage eyebrow="Legal" title="Terms & conditions." intro="These headings prepare the site for approved commercial terms without inventing deposits, cancellation fees, lead times or liability clauses." sections={[
 {title:"Website information",body:"Product visuals, indicative estimates and configurator outputs are planning references. Final specifications are established by an accepted quotation or order document."},
 {title:"Quotations and pricing",body:"Quotation validity, GST treatment, deposits, progress payments and variation rules must be inserted after commercial approval."},
 {title:"Custom manufacturing",body:"The final terms should define customer approval responsibilities for dimensions, opening direction, finishes, hardware and site information."},
 {title:"Smart-lock orders",body:"Payment, availability, dispatch, compatibility and cancellation terms depend on the final commerce setup and must be confirmed before launch."},
 {title:"Installation and site conditions",body:"Access, substrate, services, removal work, delays and responsibilities for a safe installation environment require approved project terms."},
 {title:"Legal review",body:"Final terms must be reviewed for the actual VALART entity, operating model and applicable Australian law before publication."}
 ]}/>} 