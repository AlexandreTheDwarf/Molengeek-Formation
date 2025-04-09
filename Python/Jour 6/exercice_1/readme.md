
# 🎨 CreativeUncut Gallery Downloader

Un script Python permettant de **télécharger automatiquement toutes les images** d'une galerie depuis le site [CreativeUncut.com](https://www.creativeuncut.com), avec option de galerie aléatoire et création d’un dossier local pour chaque galerie.

## 📦 Fonctionnalités

- Téléchargement automatique de toutes les images d'une galerie spécifique.
- Téléchargement d'une galerie aléatoire proposée par le site.
- Création automatique d’un dossier avec un nom de galerie propre (sans caractères spéciaux).
- Gestion robuste des erreurs réseau ou de parsing HTML.
- Base de code modulaire et réutilisable pour de futurs développements (PDF, fusion, etc.).

## 🛠️ Prérequis

- Python 3.7+
- Bibliothèques Python :
  - `requests`
  - `beautifulsoup4`
  - `PyPDF2`
  - `img2pdf`

> 💡 Installe les dépendances avec :

```bash
pip install requests beautifulsoup4 PyPDF2 img2pdf
```

## 🚀 Utilisation

### 1. Télécharger une galerie précise

Décommente l’appel à `downloadAllImgByGallery()` en fin de fichier et indique l’URL de la galerie :

```python
downloadAllImgByGallery("https://www.creativeuncut.com/art_elden-ring_a.html")
```

### 2. Télécharger une galerie aléatoire

Lance simplement le script tel quel :

```bash
python script.py
```

Il récupérera une galerie aléatoire et te demandera si tu souhaites la télécharger.

### 3. Exemple de structure de dossier généré

```
output/
├── Elden Ring/
│   ├── image1.jpg
│   ├── image2.jpg
│   └── ...
```

## 🧼 Gestion des noms de fichiers

Les titres de galeries sont nettoyés via une fonction `sanitize_filename` pour éviter les caractères interdits sous Windows.

## 📁 Options futures (en cours ou à venir)

- 🔜 Fusion des images en PDF
- 🔜 Interface utilisateur simple
- 🔜 Sélection manuelle parmi toutes les galeries

## 🐞 Débogage

Le script affiche les étapes clés dans le terminal :
- Première URL détectée
- Chaque image téléchargée
- Problèmes éventuels (HTML manquant, erreur réseau…)
