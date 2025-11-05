# Das Bild muss ein PNG sein mit einem transparenten Hintergrund, damit dies funktioniert.
from PIL import Image
import sys, os

OUTPUT_FOLDER = "output"
IMAGE_SRC = sys.argv[1]

os.makedirs(OUTPUT_FOLDER, exist_ok=True)

png = Image.open(IMAGE_SRC)
png = png.crop(png.getbbox())

png.save(os.path.join(OUTPUT_FOLDER, IMAGE_SRC))