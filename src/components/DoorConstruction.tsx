import Image from "next/image";

export function DoorConstruction(){
 return <section className="door-construction" aria-labelledby="door-construction-title">
  <header className="door-construction-heading">
   <span className="eyebrow">Inside the entrance</span>
   <h2 id="door-construction-title">What sits behind<br/>the finished door.</h2>
   <p>The visible design is only the outer layer. The aluminium frame, opening hardware and sealing interfaces work together behind it. Final profiles and hardware are confirmed for the selected entrance system during quotation.</p>
  </header>
  <div className="door-construction-grid">
   <figure>
    <div><Image src="/images/frame/frame-hinge-clean.webp" alt="Cutaway view of an aluminium entrance frame and concealed hinge interface" fill sizes="(max-width: 800px) 100vw, 58vw"/></div>
    <figcaption><span>01</span><div><b>Frame and opening hardware</b><p>The structural frame supports the moving leaf and provides the interface for the hinge or pivot mechanism.</p></div></figcaption>
   </figure>
   <figure>
    <div><Image src="/images/frame/frame-profile-clean.webp" alt="Cutaway view of multi-chamber aluminium entrance profiles and seals" fill sizes="(max-width: 800px) 100vw, 42vw"/></div>
    <figcaption><span>02</span><div><b>Profile and seals</b><p>Internal chambers, gaskets and frame depth are coordinated to the opening—not selected from the door appearance alone.</p></div></figcaption>
   </figure>
  </div>
 </section>;
}
