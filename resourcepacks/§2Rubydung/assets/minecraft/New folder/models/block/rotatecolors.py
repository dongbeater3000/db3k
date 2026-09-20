import os
import sys

# Color cycle list in order
color_cycle = [
    "red", "orange", "yellow", "lime", "green", "teal", "cyan",
    "blue", "indigo", "violet", "purple", "magenta", "pink"
]

def rotate_color_json(file_path):
    # Validate input
    if not file_path.endswith(".json") or not os.path.isfile(file_path):
        print(f"[ERROR] File not found or invalid: {file_path}")
        return

    base_dir = os.path.dirname(file_path)
    file_name = os.path.basename(file_path)
    base_name = os.path.splitext(file_name)[0]

    # Detect original color in name
    matched_color = next((c for c in color_cycle if f"_{c}" in base_name), None)
    if not matched_color:
        print("[ERROR] Could not determine original color from filename.")
        return

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    current_index = color_cycle.index(matched_color)

    # Rotate and write 12 new variants
    for i in range(1, len(color_cycle)):
        next_index = (current_index + i) % len(color_cycle)
        next_color = color_cycle[next_index]

        # Replace in content
        new_content = content.replace(matched_color, next_color)

        # Replace in filename
        new_file_name = base_name.replace(matched_color, next_color) + ".json"
        new_file_path = os.path.join(base_dir, new_file_name)

        with open(new_file_path, "w", encoding="utf-8") as out_file:
            out_file.write(new_content)

        print(f"[OK] Created: {new_file_name}")

    print("[DONE] Color rotation complete.")

# Example usage:
# python rotate_colors.py path/to/block_red.json

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python rotate_colors.py <input_json_file>")
    else:
        rotate_color_json(sys.argv[1])