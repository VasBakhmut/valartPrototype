import Image from "next/image";
import { Stack, ThermometerSimple, Wind } from "@phosphor-icons/react/dist/ssr";

export function FrameEducation(){
 return <section className="frame-education frame-education-compact" id="frame-explained">
  <div className="frame-compact-visual"><figure className="frame-profile-visual"><Image src="/images/frame/frame-profile-light-v2.webp" alt="Cutaway view of the structural aluminium entrance frame" fill sizes="(max-width:900px) 100vw,35vw"/><figcaption><span>01</span> Structural frame</figcaption></figure><figure className="frame-hinge-visual"><Image src="/images/frame/frame-hinge-product-v2.webp" alt="Concealed hinge integrated into an aluminium entrance frame" fill sizes="(max-width:900px) 48vw,20vw"/><figcaption><span>02</span> Concealed hinge</figcaption></figure></div>
  <div className="frame-compact-copy"><span className="eyebrow">The frame, explained</span><h2>The part that carries<br/>the whole entrance.</h2><p>A precision-engineered aluminium system carries the leaf, houses the hinge or pivot hardware and seals the architectural opening.</p><div className="frame-benefits"><article><Stack/><b>Structural<br/>strength</b></article><article><ThermometerSimple/><b>Thermal<br/>insulation</b></article><article><Wind/><b>Weather<br/>sealing</b></article></div></div>
 </section>;
}
