import os
import json

def blank_json_file(filepath):
    try:
        with open(filepath, 'w', encoding='utf-8') as file:
            json.dump({}, file, indent=2)
        print(f"Blanked: {filepath}")
    except Exception as e:
        print(f"Failed to blank {filepath}: {e}")

def process_directory(directory):
    for root, _, files in os.walk(directory):
        for filename in files:
            if filename.endswith('.json'):
                filepath = os.path.join(root, filename)
                blank_json_file(filepath)

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    process_directory(script_dir)