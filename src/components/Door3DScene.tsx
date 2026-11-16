"use client";

import Image from "next/image";

export type EntranceSegment={id:string;label:string;width:number;kind:"door"|"fixed";mirrored?:boolean;sourceCrop?:"left"|"right"};

type Door3DSceneProps={designImage:string;designName:string;code:string;segments:EntranceSegment[];height:number;opening:string;showDimensions:boolean;showStructure?:boolean;focusLeaf?:boolean;editableDimensions?:boolean;onHeightChange?:(value:number)=>void;onSegmentWidthChange?:(id:string,value:number)=>void;designPosition:string;designScale:number;designCutout:boolean};

export function Door3DScene({designImage,designName,code,segments,height,opening,showDimensions,showStructure=false,focusLeaf=false,editableDimensions=false,onHeightChange,onSegmentWidthChange,designPosition,designScale,designCutout}:Door3DSceneProps){
 const overall=segments.reduce((sum,segment)=>sum+segment.width,0);
 const handing=opening.startsWith("Left")?"Left hinge":opening.startsWith("Right")?"Right hinge":"Offset pivot";
 return <div className={`door-elevation-shell simplified-elevation ${showDimensions?"dimension-mode":"selection-mode"} ${showStructure?"structure-mode":""}`}>
  <div className="door-3d-title"><span>Live front elevation</span><b>{code} · {designName}</b></div>
  <div className="door-elevation-stage">
   {showDimensions&&<><div className="opening-dimension" aria-label={`Overall opening width ${overall} millimetres`}><i/><strong>{overall} mm overall opening</strong><i/></div><div className="entrance-height-line"><i/>{editableDimensions?<label><span className="sr-only">Overall height in millimetres</span><input type="number" value={height} onChange={event=>onHeightChange?.(Number(event.target.value)||0)}/><em>mm</em></label>:<strong>{height} mm</strong>}<i/></div></>}
   <div className={`configured-entrance ${designCutout?"uses-cutout":""} ${focusLeaf?"leaf-focus":""} ${segments.length===1?"single-assembly":""}`} style={{"--entrance-ratio":`${Math.max(.58,Math.min(1.9,overall/height))}`,"--leaf-position":designPosition,"--leaf-scale":designScale} as React.CSSProperties}>
    <div className="segment-dimensions" aria-hidden={!showDimensions}>{segments.map(segment=><span key={segment.id} style={{flex:segment.width}}>{showDimensions&&<><i/>{editableDimensions?<label><span className="sr-only">{segment.label} width in millimetres</span><input type="number" value={segment.width} onChange={event=>onSegmentWidthChange?.(segment.id,Number(event.target.value)||0)}/><em>mm</em></label>:<b>{segment.width} mm</b>}<i/></>}</span>)}</div>
    <div className="entrance-frame">{segments.map((segment,index)=>{const doorCount=segments.filter(item=>item.kind==="door").length,doorIndex=segments.slice(0,index).filter(item=>item.kind==="door").length,segmentHanding=doorCount>1?(doorIndex===0?"Left hinge":"Right hinge"):handing;return <div key={segment.id} className={`entrance-segment ${segment.kind} ${segment.mirrored?"mirrored":""} ${segment.sourceCrop?`source-crop-${segment.sourceCrop}`:""}`} style={{flex:segment.width}}>{segment.kind==="door"?<><Image className="door-leaf-design" src={designImage} alt="" fill priority sizes="(max-width: 1100px) 70vw, 40vw"/>{showStructure&&<><span className="leaf-structure-label"><b>Active leaf</b>{segmentHanding}</span><span className="leaf-swing-mark" aria-hidden="true"/></>}</>:<><span className="fixed-panel-fill"/><span className="fixed-panel-mark"><b>Fixed</b>Non-opening panel</span></>}</div>})}</div>
   </div>
   <span className="elevation-ground"/>
  </div>
  <div className="door-elevation-meta"><span><b>Design</b>{designName}</span><span><b>Configuration</b>{segments.map(item=>item.kind==="fixed"?"fixed panel":"door").join(" + ")}</span><span><b>Opening</b>{opening}</span></div>
 </div>;
}
