import xml.etree.ElementTree as ET
from PIL import Image
import json
import re
import sys, os

# Eingabedateien
SVG_FILE = sys.argv[1]
IMG_FILE = sys.argv[2]

# Ausgabe
OUTPUT_DIR = "output"

os.makedirs(OUTPUT_DIR, exist_ok=True)

# SVG parsen
tree = ET.parse(SVG_FILE)
root = tree.getroot()

# Bild öffnen
img = Image.open(IMG_FILE)

cutouts = []

for path in root.findall(".//{http://www.w3.org/2000/svg}path"):
    d = path.attrib.get("d", "")
    pid = path.attrib.get("id", "teil")
    subpaths = re.findall(r"M [^Z]+Z", d)

    for i, sub in enumerate(subpaths):
        coords = list(map(float, re.findall(r"[-+]?\d*\.\d+|\d+", sub)))
        points = list(zip(coords[0::2], coords[1::2]))
        xs, ys = [p[0] for p in points], [p[1] for p in points]
        x, y, w, h = min(xs), min(ys), max(xs)-min(xs), max(ys)-min(ys)
        fname = f"{pid}_{i}.png"
        cut = img.crop((x, y, x+w, y+h))
        cut.save(os.path.join(OUTPUT_DIR, fname))

        cutouts.append({
            # "file": fname,
            "x": int(x),
            "y": int(y),
            "width": int(w),
            "height": int(h)
        })

# JSON schreiben
with open(os.path.join(OUTPUT_DIR, "cutouts.json"), "w") as f:
    json.dump(cutouts, f, indent=2)
