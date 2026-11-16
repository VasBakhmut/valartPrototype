import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root=process.cwd();
const modules=path.join(root,"public/images/doors/modules");
const previews=path.join(root,"public/images/doors/preview-uniform");
const target={width:634,height:1459};

const current={
  5:"lineal-approved-v6-05.png",21:"signal-approved-v6-21.png",22:"lumen-approved-v6-22.png",
  23:"obsidian-approved-v6-23.png",24:"reed-approved-v6-24.png",25:"arc-approved-v6-25.png",
  27:"plane-approved-v6-27.png",28:"column-approved-v6-28.png",29:"contour-approved-v6-29.png",
  30:"vein-approved-v6-30.png",31:"calm-approved-v6-31.png",32:"strata-approved-v6-32.png",
  34:"bridge-approved-v6-34.png",35:"ember-approved-v6-35.png",36:"natural-approved-v6-36.png",
  37:"edge-approved-v6-37.png",38:"lustre-approved-v6-38.png",39:"graphite-approved-v6-39.png",
  40:"ribbon-approved-v6-40.png",41:"marble-approved-v6-41.png",42:"halo-review-v6-42.png",
  43:"seam-review-v6-43.png",44:"noble-review-v6-44.png",45:"linear-review-v6-45.png",
  47:"cove-approved-v6-47.png",48:"atlas-approved-v6-48.png",49:"orbit-approved-v6-49.png",
  51:"terra-approved-v6-51.png",52:"relief-review-v6-52.png",53:"heritage-review-v6-53.png",
  54:"crest-review-v6-54.png",55:"bronze-review-v6-55.png",56:"pattern-review-v6-56.png",
  57:"classic-review-v6-57.png"
};
const pages=[4,5,6,7,9,11,12,13,15,16,17,18,20,21,22,23,24,25,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,43,44,45,47,48,49,51,52,53,54,55,56,57];

function sourceFor(page){
  const number=String(page).padStart(2,"0");
  if(current[page]) return path.join(modules,current[page]);
  if(page===18) return path.join(modules,"flute-v6-18.png");
  if(page===17) return path.join(modules,`preview-v5-${number}.svg`);
  if(page===16) return path.join(modules,`preview-v4-${number}.png`);
  if(page===20) return path.join(modules,`preview-v3-${number}.png`);
  if([4,6,9].includes(page)) return path.join(modules,`preview-v2-${number}.svg`);
  return path.join(previews,`catalog-${number}.png`);
}

for(const page of pages){
  const number=String(page).padStart(2,"0");
  await sharp(sourceFor(page),{density:240})
    .ensureAlpha()
    .trim({background:{r:0,g:0,b:0,alpha:0},threshold:20})
    .resize(target.width,target.height,{fit:"fill",kernel:sharp.kernel.lanczos3})
    .png({compressionLevel:9,adaptiveFiltering:true})
    .toFile(path.join(modules,`door-approved-v7-${number}.png`));
}

console.log(`Normalised ${pages.length} door assets to ${target.width}x${target.height}.`);
