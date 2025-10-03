import cairosvg # https://cairosvg.org/documentation
import sys, os
import xml.etree.ElementTree as ElementTree # https://www.geeksforgeeks.org/python/modify-xml-files-with-python
from PIL import Image
from io import BytesIO
import re
import json

def createPuzzlePiece(svg):
    svgString = ElementTree.tostring(svg)
    svgPngBytes = BytesIO(cairosvg.svg2png(svgString))

    svgPngImage = Image.open(svgPngBytes)
    originalPngImage = Image.open(inputImage)


    mask = Image.new("RGBA",originalPngImage.size, (0,0,0,0))
    mask.paste(svgPngImage, svgPngImage)


    result = Image.new("RGBA",originalPngImage.size,(0,0,0,0))
    result.paste(originalPngImage, mask)
    bBox = result.getbbox()
    bBoxFixed = (bBox[0] + 1, bBox[1] + 1, bBox[2] - 1, bBox[3] - 1) # Ohne 1px automatisch hinzugefügten transparenten Rand
    result = result.crop(bBoxFixed)
    return result

# def createPath(description):
#     return ElementTree.Element("path", {
#         "fill": "black",
#         # "stroke": "black",
#         # "stroke-width": "1",
#         "d": description
#     })

# def createPaths(path):
#     pathDescriptions = re.split(r'(?=M)',path.get("d"))
#     pathDescriptions.pop(0)
#     paths = []
#     for description in pathDescriptions:
#         newPath = createPath(description)
#         paths.append(newPath)
#     return paths



NAMESPACE = {"svg": "http://www.w3.org/2000/svg"}
ElementTree.register_namespace("", NAMESPACE["svg"])
OUTPUT_FOLDER = "output"
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

inputSvg =  sys.argv[1]
inputImage =  sys.argv[2]



tree = ElementTree.parse(inputSvg)
svg = tree.getroot()
svg.attrib.pop("width")
svg.attrib.pop("height")

# FALLS ALLE PATHS IN EINEM PATH SIND GETRENNT. IN "d" GETRENNT MIT "M"
# path = svg.find(".//svg:path", NAMESPACE)
# paths = createPaths(path)
# svg.remove(path)

paths = svg.findall(".//svg:path", NAMESPACE)
for path in paths:
    path.set("fill", "black")
    svg.remove(path)

cutouts = {
    "viewBox": svg.attrib["viewBox"],
    "cutouts": []
}

for i, path in enumerate(paths):
    svg.append(path)

    result = createPuzzlePiece(svg)

    result.save(os.path.join(OUTPUT_FOLDER, f"Auswahl_{i}.png"))

    cutouts["cutouts"].append({
        "src": f"Auswahl_{i}.png",
        "d": path.get("d")
    })
    print(path.get("d"))

    svg.remove(path)

for path in paths:
    svg.append(path)


tree.write(os.path.join(OUTPUT_FOLDER, "Auswahl.svg"))
with open(os.path.join(OUTPUT_FOLDER, "cutouts.json"),"w") as f:
    json.dump(cutouts, f, indent=4)