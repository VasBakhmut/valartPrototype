export type DoorSystem = { slug: string; name: string; eyebrow: string; description: string; image: string };
export type DoorDesign = { slug: string; code: string; name: string; image: string; layerImage?: string; assemblyImage?: string; assemblyFrame?: string; systems: string[]; page: number };
export type Lock = { slug: string; model: string; image: string; price: number; type: "Semi-automatic" | "Full-automatic"; access: string[]; app: string; material: string };

export const doorSystems: DoorSystem[] = [
  { slug: "off-axis", name: "Off-Axis", eyebrow: "System 01", description: "A concealed pivoting system for large, composed entrances and strong architectural proportions.", image: "/images/doors/clean/catalog-07.webp" },
  { slug: "all-aluminium-glass", name: "Aluminium & Glass", eyebrow: "System 02", description: "Slim aluminium framing with integrated glazed panels for light, clarity and modern facades.", image: "/images/doors/clean/catalog-18.webp" },
  { slug: "one-door-one-view", name: "One Door, One View", eyebrow: "System 03", description: "A precise single-leaf entrance system with clean lines and adaptable sidelight arrangements.", image: "/images/doors/clean/catalog-27.webp" },
  { slug: "pivot", name: "Pivot Portal", eyebrow: "System 04", description: "A substantial portal construction designed for wider leaves and an effortless pivot opening movement.", image: "/images/doors/clean/catalog-34.webp" },
];

const designPages = [4,5,6,7,9,11,12,13,15,16,17,18,20,21,22,23,24,25,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,43,44,45,47,48,49,51,52,53,54,55,56,57];
const designNames = ["Axis","Lineal","Vector","Hearth","Monolith","Slate","Timberline","Facet","Frame","Vela","Noir","Flute","Mirage","Signal","Lumen","Obsidian","Reed","Arc","Plane","Column","Contour","Vein","Calm","Strata","Bridge","Ember","Natural","Edge","Lustre","Graphite","Ribbon","Marble","Halo","Seam","Noble","Linear","Cove","Atlas","Orbit","Terra","Relief","Heritage","Crest","Bronze","Pattern","Classic"];

const assemblyFrames: Partial<Record<number, string>> = {
  5: "Pivot leaf + solid companion panel",
  6: "Right sidelight",
  7: "Leaf + solid panel + left sidelight + transom",
  9: "Pivot leaf + three sidelights + transom",
  11: "Leaf + timber companion + two sidelights",
  13: "Two sidelights",
  15: "Double pivot + two solid surrounds",
  16: "Double leaf + two sidelights + transom",
  17: "Two sidelights",
  18: "Leaf + two sidelights + two solid panels",
  20: "Double leaf + transom",
  21: "Left sidelight",
  22: "Left sidelight",
  23: "Two sidelights",
  24: "Asymmetric two sidelights",
  25: "Two sidelights",
  27: "Asymmetric double leaf + solid panels + transom",
  28: "Double leaf + four solid surrounds",
  29: "Double leaf + two solid surrounds",
  30: "Leaf + inactive companion panel",
  31: "Integrated facade panel system",
  32: "Double leaf + four solid surrounds",
  34: "Double leaf + two sidelights + transom",
  35: "Double leaf",
  36: "Leaf + decorative companion panel",
  37: "Double leaf",
  39: "Double leaf",
  40: "Double leaf",
  42: "Double leaf",
  43: "Double leaf",
  44: "Decorative double leaf",
  45: "Leaf + two inactive companion strips",
  47: "Double leaf + two solid panels",
  48: "Asymmetric double leaf",
  49: "Double leaf",
  51: "Double leaf + two solid panels",
  52: "Double leaf",
  53: "Double leaf",
  54: "Double leaf",
  55: "Asymmetric double leaf",
  56: "Double leaf + two solid panels + transom",
  57: "Double leaf + arched glazed transom",
};

export const frameArrangements = [
  "Single leaf", "Right sidelight", "Left sidelight", "Two sidelights", "Asymmetric two sidelights",
  "Double leaf", "Double leaf + transom", "Double leaf + two sidelights + transom",
  "Leaf + solid panel + left sidelight + transom", "Leaf + timber companion + two sidelights",
  "Pivot leaf + three sidelights + transom", "Leaf + two sidelights + two solid panels",
  "Double pivot + two solid surrounds", "Double leaf + two solid surrounds", "Double leaf + two solid panels",
  "Asymmetric double leaf + solid panels + transom", "Leaf + inactive companion panel",
  "Pivot leaf + solid companion panel", "Integrated facade panel system", "Double leaf + four solid surrounds", "Leaf + decorative companion panel",
  "Decorative double leaf", "Leaf + two inactive companion strips",
  "Asymmetric double leaf",
  "Double leaf + two solid panels + transom", "Double leaf + arched glazed transom",
];

export const doorDesigns: DoorDesign[] = designPages.map((page, index) => ({
  slug: `catalog-${String(page).padStart(2, "0")}`,
  code: `V13-${String(page).padStart(2, "0")}`,
  name: designNames[index] ?? `Design ${String(index + 1).padStart(2, "0")}`,
  image: `/images/doors/clean/catalog-${String(page).padStart(2, "0")}.webp`,
  layerImage: [4, 7, 12, 29, 38, 41].includes(page) ? `/images/doors/layers/catalog-${String(page).padStart(2, "0")}.png` : undefined,
  assemblyImage: assemblyFrames[page] ? `/images/doors/assemblies/catalog-${String(page).padStart(2, "0")}.png` : undefined,
  assemblyFrame: assemblyFrames[page],
  systems: index < 18 ? ["off-axis", "all-aluminium-glass"] : index < 29 ? ["one-door-one-view"] : ["pivot"],
  page,
}));

const lockRows: Array<[string, number, Lock["type"], string, string]> = [
  ["8801", 849, "Semi-automatic", "Tuya / TTLock", "Zinc alloy"], ["JX01S", 899, "Semi-automatic", "Tuya / TTLock", "Zinc alloy"],
  ["JX30", 799, "Semi-automatic", "Tuya", "Zinc alloy"], ["L101", 729, "Semi-automatic", "Tuya / TTLock", "Aluminium alloy"],
  ["L106", 749, "Semi-automatic", "Tuya / TTLock", "Aluminium alloy"], ["L108", 779, "Semi-automatic", "Tuya / TTLock", "Aluminium alloy"],
  ["L206", 789, "Semi-automatic", "Tuya / TTLock", "Aluminium alloy"], ["L208", 819, "Semi-automatic", "Tuya / TTLock", "Aluminium alloy"],
  ["L300", 699, "Semi-automatic", "Tuya", "Aluminium alloy"], ["LS401", 949, "Semi-automatic", "Tuya / TTLock", "Aluminium alloy"],
  ["Z1", 1199, "Full-automatic", "Tuya / TTLock", "Aluminium alloy"], ["Z5", 1299, "Full-automatic", "Tuya", "Aluminium alloy"],
  ["Z6", 1099, "Full-automatic", "Tuya / TTLock", "Aluminium alloy"], ["Z7", 1249, "Full-automatic", "Tuya / TTLock", "Aluminium alloy"],
  ["Z8", 1349, "Full-automatic", "Tuya / TTLock / Xhome", "Aluminium alloy"], ["Z9", 1399, "Full-automatic", "Tuya", "Aluminium alloy"],
];

export const locks: Lock[] = lockRows.map(([model, price, type, app, material]) => ({
  slug: model.toLowerCase(), model, price, type, app, material,
  image: `/images/locks/${model}.${["L108","L208","L300","LS401","Z7","Z8"].includes(model) ? "jpg" : "webp"}`,
  access: model.startsWith("Z") ? ["Fingerprint", "PIN code", "RFID card", "Key", "Face / palm options"] : ["Fingerprint", "PIN code", "RFID card", "Key"],
}));

export const money = (value: number) => new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(value);
