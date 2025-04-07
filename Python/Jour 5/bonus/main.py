import yt_dlp
import os

# Définir les chemins
OUTPUT_PATH = os.path.expanduser("~/Documents/Molengeek-Formation/Python/Jour 5/bonus/output/")
URLS_FILE = os.path.expanduser("~/Documents/Molengeek-Formation/Python/Jour 5/bonus/urls.txt")

# Créer le dossier output si nécessaire
if not os.path.exists(OUTPUT_PATH):
    try:
        os.makedirs(OUTPUT_PATH)
        print(f"Répertoire {OUTPUT_PATH} créé.")
    except Exception as e:
        print(f"Erreur lors de la création du répertoire : {e}")
        exit()

# Créer le fichier urls.txt s’il n’existe pas
if not os.path.exists(URLS_FILE):
    newFile = open(URLS_FILE, "a")
    newFile.close()
    print(f"Fichier {URLS_FILE} créé. Ajoute des URLs dedans.")
    exit()

# Lire les URLs
f = open(URLS_FILE, "r")
urls = [line.strip() for line in f if line.strip()]
f.close()

if not urls:
    print("Aucune URL trouvée dans le fichier.")
    exit()

# Paramètres yt_dlp
opts = {
    'outtmpl': os.path.join(OUTPUT_PATH, '%(title)s.%(ext)s'),
    'format': 'best'
}

# Télécharger les vidéos
try:
    ydl = yt_dlp.YoutubeDL(opts)
    for url in urls:
        print(f"Téléchargement de : {url}")
        ydl.download([url])
except Exception as e:
    print(f"Erreur lors du téléchargement : {e}")
