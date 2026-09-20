import os
from PIL import Image, ImageChops

input_files = [
    "stone_bricks.png"
]

colors = [
    ("red",     "#ff0000"),
    ("orange",  "#ff6a00"),
    ("yellow",  "#ffd800"),
    ("lime",    "#b6ff00"),
    ("green",   "#4cff00"),
    ("teal",    "#01ff90"),
    ("cyan",    "#01ffff"),
    ("blue",    "#0094ff"),
    ("indigo",  "#4454ff"),
    ("violet",  "#4800ff"),
    ("purple",  "#b200ff"),
    ("magenta", "#ff00dc"),
    ("pink",    "#ff006e"),
    ("white",   "#ffffff"),
    ("gray",    "#808080"),
    ("black",   "#000000")

]

opacity_255 = 170  
opacity = opacity_255 / 255.0  

working_dir = os.path.dirname(os.path.realpath(__file__))

for file_name in input_files:
    input_path = os.path.join(working_dir, file_name)
    if not os.path.exists(input_path):
        print(f"ERR: File not found: {file_name}")
        continue

    base_img = Image.open(input_path).convert("RGBA")
    base_rgb = base_img.convert("RGB")
    base_alpha = base_img.getchannel("A")
    base_name = os.path.splitext(file_name)[0]

    for color_name, hex_color in colors:
        overlay_rgb = Image.new("RGB", base_img.size, hex_color)

        multiplied_rgb = ImageChops.multiply(base_rgb, overlay_rgb)

        blended_rgb = Image.blend(base_rgb, multiplied_rgb, opacity)

        result = blended_rgb.convert("RGBA")
        result.putalpha(base_alpha)

        output_filename = f"{color_name}_{base_name}.png"
        output_path = os.path.join(working_dir, output_filename)
        result.save(output_path)

        print(f"Saved: {output_filename}")

print("All images processed.")
