from pathlib import Path
import json
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "images" / "doors"
OUT = ROOT / ".door-variation-audit"
OUT.mkdir(exist_ok=True)
PAGES = [4,5,6,7,9,11,12,13,15,16,17,18,20,21,22,23,24,25,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,43,44,45,47,48,49,51,52,53,54,55,56,57]
NAMES = ["Axis","Lineal","Vector","Hearth","Monolith","Slate","Timberline","Facet","Frame","Vela","Noir","Flute","Mirage","Signal","Lumen","Obsidian","Reed","Arc","Plane","Column","Contour","Vein","Calm","Strata","Bridge","Ember","Natural","Edge","Lustre","Graphite","Ribbon","Marble","Halo","Seam","Noble","Linear","Cove","Atlas","Orbit","Terra","Relief","Heritage","Crest","Bronze","Pattern","Classic"]

records = []
for page, name in zip(PAGES, NAMES):
    assembly = PUBLIC / "assemblies" / f"catalog-{page:02}.png"
    layer = PUBLIC / "layers" / f"catalog-{page:02}.png"
    source = assembly if assembly.exists() else layer
    with Image.open(source).convert("RGBA") as image:
        alpha = image.getchannel("A")
        bbox = alpha.getbbox() or (0, 0, image.width, image.height)
        visible_w, visible_h = bbox[2] - bbox[0], bbox[3] - bbox[1]
        records.append({"page": page, "code": f"V13-{page:02}", "name": name, "source": source.relative_to(ROOT).as_posix(), "canvas": [image.width, image.height], "bbox": list(bbox), "visible_ratio": round(visible_w / visible_h, 3)})

font = ImageFont.load_default()
for sheet_index in range(4):
    sheet = Image.new("RGB", (1800, 1260), "#d7d2c9")
    draw = ImageDraw.Draw(sheet)
    for slot, record in enumerate(records[sheet_index * 12:(sheet_index + 1) * 12]):
        col, row = slot % 4, slot // 4
        x, y = col * 450, row * 420
        draw.rectangle((x + 8, y + 8, x + 442, y + 412), fill="#f2efe9", outline="#aaa197")
        source = ROOT / record["source"]
        with Image.open(source).convert("RGBA") as image:
            image = image.crop(tuple(record["bbox"]))
            image.thumbnail((400, 330), Image.Resampling.LANCZOS)
            px = x + (450 - image.width) // 2
            py = y + 48 + (330 - image.height) // 2
            sheet.paste(image, (px, py), image)
        draw.text((x + 22, y + 18), f'{record["code"]}  {record["name"]}', fill="#171614", font=font)
        draw.text((x + 22, y + 389), f'{Path(record["source"]).parent.name} · ratio {record["visible_ratio"]}', fill="#615b52", font=font)
    sheet.save(OUT / f"variations-{sheet_index + 1}.jpg", quality=92)

(OUT / "measurements.json").write_text(json.dumps(records, indent=2), encoding="utf-8")
print(json.dumps({"count": len(records), "sheets": 4, "output": str(OUT)}, indent=2))
