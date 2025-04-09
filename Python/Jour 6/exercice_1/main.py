import requests, bs4, os, re
import tempfile
from PyPDF2 import PdfMerger, PdfWriter
import img2pdf

# Constantes
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "output")
WEBSITE_PATH = "https://www.creativeuncut.com/"
IMAGE_HOST_PREFIXE = "https://sjc1.vultrobjects.com/cucdn/"

# Utilitaire pour éviter les caractères illégaux dans les noms de fichiers/dossiers Windows
def sanitize_filename(name: str) -> str:
    return re.sub(r'[<>:"/\\|?*]', '', name)

# Obtenir le titre de la galerie
def getGalleryTitle(galleryUrl):
    try:
        response = requests.get(galleryUrl)
        soup = bs4.BeautifulSoup(response.text, "html.parser")
        title = soup.select("#game_info h1")[0].contents[0]
        return title
    except Exception as e:
        print("<--Error during request in getGalleryTitle -->", e)

# Obtenir la première page d'une galerie
def getFirstUrl(galleryUrl):
    try:
        response = requests.get(galleryUrl)
        soup = bs4.BeautifulSoup(response.text, "html.parser")
        firstPath = soup.select(".glry a")[0]['href']
        fullUrl = f"https://www.creativeuncut.com/{firstPath}"
        print(f"[First Page] {fullUrl}")
        return fullUrl
    except Exception as e:
        print("<-- Error during getFirstUrl -->", e)
        return None

# Obtenir l'URL de l'image sur une page donnée
def getImgUrl(pageUrl, galleryName="") -> str:
    try:
        if galleryName == "":
            galleryName = pageUrl.split("/")[3]
        response = requests.get(pageUrl)
        soup = bs4.BeautifulSoup(response.text, "html.parser")
        imgPath = soup.select("#g_image img")[0]['src']
        return IMAGE_HOST_PREFIXE + galleryName + "/" + imgPath
    except Exception as e:
        print("<-- Error during getImgUrl -->", e)
        return None

# Obtenir l'URL de la page suivante
def getNextUrl(actualUrl: str, galleryName="") -> str | None:
    try:
        response = requests.get(actualUrl)
        soup = bs4.BeautifulSoup(response.text, "html.parser")
        ancre = soup.select("#g_nav_r a")
        if len(ancre) == 0:
            return None
        imgName = ancre[0]['href']
        if galleryName == "":
            galleryName = actualUrl.split("/")[3]
        return WEBSITE_PATH + galleryName + "/" + imgName
    except Exception as e:
        print("<-- Error during getNextUrl -->", e)
        return None

# Télécharger une image dans un dossier spécifique
def downloadImg(url, imgName="", folder="") -> bool:
    if imgName == "":
        imgName = url.split("/")[-1]
    if folder != "":
        imgPath = os.path.join(folder, imgName)
    else:
        imgPath = os.path.join(OUTPUT_PATH, imgName)

    try:
        response = requests.get(url).content
        with open(imgPath, "wb") as handler:
            handler.write(response)
        return True
    except Exception as e:
        print("<-- Error during downloadImg -->", e)
        return False

# Télécharger toutes les images d'une galerie
def downloadAllImgByGallery(url, imgName="") -> bool:
    currentUrl = getFirstUrl(url)
    galleryTitle = getGalleryTitle(url)
    if not galleryTitle:
        print("Impossible de récupérer le titre de la galerie.")
        return False

    safeTitle = sanitize_filename(galleryTitle)
    folderPath = os.path.join(OUTPUT_PATH, safeTitle)

    if not os.path.exists(folderPath):
        os.makedirs(folderPath)

    if not currentUrl:
        print("Impossible de récupérer la première URL.")
        return False

    while currentUrl:
        print(f"Téléchargement de : {currentUrl}")
        imgUrl = getImgUrl(currentUrl)
        if imgUrl:
            downloadImg(imgUrl, folder=folderPath)
        else:
            print(f"Image non trouvée pour {currentUrl}")
        currentUrl = getNextUrl(currentUrl)

    print("Toutes les images ont été téléchargées.")
    # Convertir les images téléchargées en un fichier PDF
    pdfOutputPath = os.path.join(folderPath, f"{safeTitle}.pdf")
    convertImgToPdf(folderPath, output=pdfOutputPath)
    print(f"PDF créé à l'emplacement : {pdfOutputPath}")

    # Supprimer toutes les images après la création du PDF
    deleteAllImagesInFolder(folderPath)
    print("Toutes les images ont été supprimées après la création du PDF.")

    return True

# Récupérer toutes les galeries disponibles (non utilisé ici mais utile pour la suite)
def getAllGameNames() -> dict:
    url = "https://www.creativeuncut.com/game-art-galleries.html"
    allGames = {}
    try:
        response = requests.get(url)
        soup = bs4.BeautifulSoup(response.text, "html.parser")
        gameLinks = soup.select(".ag a")
        for link in gameLinks:
            name = link.get_text().strip()
            href = link.get("href")
            if href and name:
                full_url = WEBSITE_PATH + href
                if name.lower().endswith("The"):
                    name = "The" + name[:-3]
                allGames[name] = full_url
        return allGames
    except Exception as e:
        print("<-- Error during getAllGameNames -->", e)
        return {}

# Proposer une galerie aléatoire à télécharger
def getRandomGallery():
    try:
        response = requests.get(WEBSITE_PATH)
        soup = bs4.BeautifulSoup(response.text, "html.parser")

        randomLinkTag = soup.select("#random a")
        if not randomLinkTag:
            print("Aucun lien aléatoire trouvé.")
            return

        rawHref = randomLinkTag[0]["href"]
        if rawHref.startswith("http"):
            randomHref = rawHref
        else:
            randomHref = WEBSITE_PATH + rawHref.lstrip("/")

        galleryTitle = getGalleryTitle(randomHref)

        askDownload = input(f"Voulez-vous télécharger la galerie \"{galleryTitle}\" ? (y/n) ").strip().lower()
        if askDownload in ["y", "yes"]:
            downloadAllImgByGallery(randomHref)
        else:
            print("Téléchargement annulé.")
    except Exception as e:
        print("<-- Error during getRandomGallery -->", e)

def convertImgToPdf (folder_path, output="output.pdf"):
    image_files = [os.path.join(folder_path, f) for f in os.listdir(folder_path) if f.lower().endswith(('.png', ".jpeg", ".jpg"))]
    merger = PdfMerger()
    for image in image_files:
        try:
            with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as temp_file:
                temp_file.write(img2pdf.convert([image]))
                temp_file.flush()
            merger.append(temp_file.name)
        except Exception as e:
            print(f"error during pdf creation : {e}")
    merger.write(output)
    merger.close()

def deleteAllImagesInFolder(folder_path):
    """
    Supprime toutes les images dans le dossier spécifié.

    :param folder_path: Chemin du dossier contenant les images à supprimer.
    """
    # Liste des extensions d'images à supprimer
    image_extensions = ('.png', '.jpeg', '.jpg')

    # Parcourir tous les fichiers dans le dossier
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)

        # Vérifier si le fichier est une image en fonction de son extension
        if file_path.lower().endswith(image_extensions):
            try:
                os.remove(file_path)
                print(f"Supprimé : {file_path}")
            except Exception as e:
                print(f"Erreur lors de la suppression de {file_path} : {e}")

# Recherche des jeux dont le nom contient le terme de recherche et retourne un dictionnaire des résultats.
def searchGame(game_name: str) -> dict:

    all_games = getAllGameNames()
    matching_games = {}

    # Rechercher les jeux dont le nom contient le terme de recherche (insensible à la casse)
    for name, url in all_games.items():
        if game_name.lower() in name.lower():
            matching_games[name] = url

    # Si aucun jeu n'est trouvé
    if not matching_games:
        print(f"Aucune galerie trouvée pour le terme de recherche : {game_name}")

    return matching_games


# Lancement principal
def main():
    while True:
        print("\nOptions disponibles :")
        print("1. Télécharger toutes les images d'une galerie (DL)")
        print("2. Obtenir le titre d'une galerie (getTitle)")
        print("3. Obtenir toutes les galeries disponibles (getAllGames)")
        print("4. Rechercher un jeu (searchGame)")
        print("5. Obtenir une galerie aléatoire (randomGallery)")
        print("6. Quitter (quit)")

        choice = input("Entrez votre choix : ").strip().lower()

        if choice == "dl":
            url = input("Entrez l'URL de la galerie : ").strip()
            downloadAllImgByGallery(url)

        elif choice == "gettitle":
            url = input("Entrez l'URL de la galerie : ").strip()
            title = getGalleryTitle(url)
            if title:
                print(f"Titre de la galerie : {title}")

        elif choice == "getallgames":
            games = getAllGameNames()
            for name, url in games.items():
                print(f"Jeu : {name}, URL : {url}")

        elif choice == "searchgame":
            game_name = input("Entrez le nom du jeu à rechercher : ").strip()
            matching_games = searchGame(game_name)
            if matching_games:
                for name, url in matching_games.items():
                    print(f"Jeu : {name}, URL : {url}")

        elif choice == "randomgallery":
            getRandomGallery()

        elif choice == "quit":
            print("Au revoir !")
            break

        else:
            print("Choix invalide. Veuillez réessayer.")

if __name__ == "__main__":
    main()
