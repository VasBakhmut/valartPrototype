import { ImageResponse } from "next/og";

export const alt = "VALART — Premium entrance doors and smart locks Melbourne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      width: "100%", height: "100%", display: "flex", position: "relative",
      overflow: "hidden", color: "#f5f1ea", background: "#0b0c0d",
      fontFamily: "Arial, Helvetica, sans-serif",
    }}>
      <div style={{
        position: "absolute", inset: 0, display: "flex",
        background: "radial-gradient(circle at 76% 46%, #4b4033 0%, #242220 24%, #0b0c0d 64%)",
      }}/>
      <div style={{
        position: "absolute", top: 58, right: 72, width: 360, height: 510,
        border: "2px solid #c9a46f", boxShadow: "0 0 90px rgba(201,164,111,.2)", display: "flex",
      }}>
        <div style={{position:"absolute", inset:24, border:"1px solid rgba(245,241,234,.28)", display:"flex"}}/>
        <div style={{position:"absolute", right:42, top:190, width:8, height:150, background:"linear-gradient(#eee6d9,#8c8173,#eee6d9)", display:"flex"}}/>
      </div>
      <div style={{position:"absolute", top:0, left:0, width:760, height:630, background:"linear-gradient(90deg,rgba(0,0,0,.45),transparent)", display:"flex"}}/>
      <div style={{position:"relative", width:740, padding:"62px 0 56px 70px", display:"flex", flexDirection:"column"}}>
        <div style={{display:"flex", flexDirection:"column", lineHeight:1, marginBottom:88}}>
          <div style={{fontSize:46, letterSpacing:"-5px", fontWeight:300}}>VA</div>
          <div style={{fontSize:18, letterSpacing:"8px", marginTop:8}}>VALART</div>
        </div>
        <div style={{fontSize:18, letterSpacing:"5px", color:"#d9b98b", textTransform:"uppercase", marginBottom:20}}>Premium entrance doors · Melbourne</div>
        <div style={{fontSize:74, letterSpacing:"-4px", lineHeight:.98, fontWeight:300, display:"flex", flexDirection:"column"}}>
          <span>Enter</span><span style={{color:"#d9b98b", fontStyle:"italic"}}>differently.</span>
        </div>
        <div style={{fontSize:23, color:"#c8c4bd", marginTop:28}}>Architectural doors. Intelligent security.</div>
      </div>
      <div style={{position:"absolute", left:70, right:70, bottom:28, height:1, background:"linear-gradient(90deg,#d9b98b,rgba(217,185,139,0))", display:"flex"}}/>
    </div>,
    size,
  );
}
