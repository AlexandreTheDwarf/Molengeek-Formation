import requests, bs4, os

import tempfile

from PyPDF2 import PdfMerger, PdfWriter

import img2pdf

# Debut du code :

OUTPUT_PATH = os.path.expanduser("~/Documents/Molengeek-Formation/Python/Jour 6/exercice_1/output/")
WEBSITE_PATH = "https://www.creativeuncut.com/"
IMAGE_HOST_PREFIXE = "https://sjc1.vultrobjects.com/cucdn/"

url = "https://www.creativeuncut.com/art_mario-kart-world_a.html"

def getGalleryTitle(galleryUrl):
    try :
        response = requests.get(galleryUrl)
        noStratchSoupe = bs4.BeautifulSoup(response.text, "html.parser")
        title = noStratchSoupe.select("#game_info h1")[0].contents[0]
        print(title)
    except Exception as e:
        print("<--Error during request in getGalleryTitle -->", e)
    
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
    
def getNextUrl(actualUrl:str, galleryName="")->str|None:
    try:
        response = requests.get(actualUrl)
        soup = bs4.BeautifulSoup(response.text, "html.parser")
        ancre = soup.select("#g_nav_r a")
        if len(ancre) == 0:
            return None
        imgName = ancre[0]['href']
        
        if galleryName == "":
            galleryName = actualUrl.split("/")[3]
        return WEBSITE_PATH+galleryName+"/"+imgName

    except Exception as e:
        print("<-- Error during getFirstUrl -->", e)
        return None

def getImgUrl(pageUrl, galleryName="")->str:

    try:
        if galleryName == "":
            galleryName = pageUrl.split("/")[3]

        response = requests.get(pageUrl)
        soup = bs4.BeautifulSoup(response.text, "html.parser")
        imgPath = soup.select("#g_image img")[0]['src']
        return IMAGE_HOST_PREFIXE+galleryName+"/"+imgPath
    except Exception as e:
        print("<-- Error during getImgUrl -->", e)
        return None

def downloadImg(url, imgName="")->bool:
    if imgName == "":
            imgName = url.split("/")[-1]
    try:
        response = requests.get(url).content
        with open(OUTPUT_PATH+imgName, "wb") as handler:
            handler.write(response)
            return True
    except Exception as e:
        print("<-- Error during downloadImg -->", e)
        return False

def downloadAllImgByGallery(url, imgName="") -> bool:
    currentUrl = getFirstUrl(url)
    
    if not currentUrl:
        print("Impossible de récupérer la première URL.")
        return False

    while currentUrl:
        print(f"Téléchargement de : {currentUrl}")
        imgUrl = getImgUrl(currentUrl)
        if imgUrl:
            downloadImg(imgUrl)
        else:
            print(f"Image non trouvée pour {currentUrl}")

        currentUrl = getNextUrl(currentUrl)
    
    print("Toutes les images ont été téléchargées.")
    return True

# print(getImgUrl("https://www.creativeuncut.com/gallery-48/mkw-world-map.html", ""))
# print(downloadImg(getImgUrl("https://www.creativeuncut.com/gallery-48/mkw-world-map.html", "")))

downloadAllImgByGallery("https://www.creativeuncut.com/art_mario-kart-world_a.html", "")
