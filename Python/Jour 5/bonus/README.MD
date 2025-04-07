# Téléchargeur de vidéos YouTube (Bonus Formation Molengeek)

Ce script Python est un petit projet **bonus** réalisé dans le cadre de ma formation Molengeek (Jour 5).  
Il permet de **télécharger automatiquement des vidéos YouTube** listées dans un fichier `urls.txt`.

## 📂 Structure du projet

```
bonus/ 
    ├── output/ # Dossier contenant les vidéos téléchargées 
    ├── urls.txt # Liste des URLs YouTube à télécharger 
    └── youtube_downloader.py # Script principal
```

## ▶️ Utilisation

1. Ajoute des URLs YouTube **une par ligne** dans le fichier `urls.txt`.

2. Lance le script :

```
python3 youtube_downloader.py
Les vidéos seront téléchargées dans le dossier output/.

Le script crée automatiquement les fichiers et dossiers s'ils n'existent pas.
```

## ⚙️ Dépendances

```
yt-dlp
```

Tu peux l’installer via pip :

```
pip install yt-dlp
```

## 📝 Remarques

Ce projet est un exercice personnel dans le cadre de la formation développeur chez Molengeek.

Il n’est pas destiné à un usage commercial ou à grande échelle.