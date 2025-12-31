import sys, os
import xml.etree.ElementTree as ElementTree # https://www.geeksforgeeks.org/python/modify-xml-files-with-python
import json

NAMESPACE = {"svg": "http://www.w3.org/2000/svg"}
ElementTree.register_namespace("", NAMESPACE["svg"])
OUTPUT_FOLDER = "output"
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

inputSvg =  sys.argv[1]

tree = ElementTree.parse(inputSvg)
svg = tree.getroot()

paths = svg.findall(".//svg:path", NAMESPACE)

pathsJSON = []

for i, path in enumerate(paths):
    pathsJSON.append(path.get("d"))
    print(path.get("d"))


with open(os.path.join(OUTPUT_FOLDER, "paths.json"),"w") as f:
    json.dump(pathsJSON, f, indent=4)