import requests, bs4, os, re
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

# Lancement principal
if __name__ == "__main__":
    getRandomGallery()
