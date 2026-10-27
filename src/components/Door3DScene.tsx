"use client";

import Image from "next/image";

type ModuleKind="glass"|"solid";
type Door3DSceneProps={
 system:string; designImage:string; designName:string; code:string; arrangement:string;
 width:number; secondLeafWidth:number; height:number; frameProfile:number; left:ModuleKind[]; right:ModuleKind[];
 leftWidth:number; rightWidth:number; double?:boolean; transom?:boolean; transomHeight:number;
 opening:string; showDimensions:boolean;
};

export function Door3DScene(props:Door3DSceneProps){
 const fixedWidth=props.left.length*props.leftWidth+props.right.length*props.rightWidth;
 const completeWidth=props.width+props.secondLeafWidth+fixedWidth+props.frameProfile*2;
 return <div className="door-elevation-shell">
  <div className="door-3d-title"><span>Live front elevation</span><b>{props.code} · {props.designName}</b></div>
  <div className="door-elevation-stage">
   <div className="door-elevation-art">
    <Image src={props.designImage} alt={`${props.designName} ${props.code} catalogue front elevation`} fill priority sizes="(max-width: 1100px) 90vw, 44vw"/>
   </div>
   <span className="elevation-ground"/>
   {props.showDimensions&&<>
    <span className="elevation-measure elevation-measure-width"><i/>{completeWidth} mm overall<i/></span>
    <span className="elevation-measure elevation-measure-height"><i/>{props.height} mm<i/></span>
   </>}
  </div>
  <div className="door-elevation-meta">
   <span><b>Door system</b>{props.system.replaceAll("-"," ")}</span>
   <span><b>Catalogue arrangement</b>{props.arrangement}</span>
   <span><b>Opening</b>{props.opening}</span>
  </div>
 </div>;
}
