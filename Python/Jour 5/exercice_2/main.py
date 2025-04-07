import os

OUTPUT_PATH = os.path.expanduser("~/Documents/Molengeek-Formation/Python/Jour 5/exercice_2/output")

# Creation de fichier

newFile = open(f"{OUTPUT_PATH}/note.txt", "a")
newFile.write("Voici un nouveau fichier!")
print("note.txt a été créer dans le dossier output")
newFile.close()