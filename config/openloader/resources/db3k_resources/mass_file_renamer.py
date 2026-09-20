import os

# Specify the directory where your files are located
directory = 'C:\Users\Slopp\curseforge\minecraft\Instances\__Reminiscent 1.19\config\openloader\resources\db3k_resources\assets\minecraft\models\item\New folder (2)'

# Loop through all files in the directory
for filename in os.listdir(directory):
    file_path = os.path.join(directory, filename)
    
    # Check if it is a file (not a directory)
    if os.path.isfile(file_path):
        new_filename = "lodestone_" + filename
        new_file_path = os.path.join(directory, new_filename)
        
        # Rename the file
        os.rename(file_path, new_file_path)
        print(f'Renamed: {filename} -> {new_filename}')