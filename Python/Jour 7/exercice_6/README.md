# 📦 WinRyad – Outil de sélection et d'archivage de fichiers

## Description

Ce petit programme en Python avec Tkinter permet de :

- Sélectionner plusieurs fichiers via une interface graphique.
- Afficher la liste des fichiers sélectionnés.
- Spécifier un dossier de destination via un champ texte.
- Déplacer les fichiers vers ce dossier OU
- Créer une archive `.zip` contenant ces fichiers dans ce même dossier.

> 💡 Ce projet s'appuie sur les bases vues dans le **chapitre 10 du premier livre** pour apprendre à utiliser le module `zipfile`.

---

## 📷 Aperçu

L'interface se compose de :

- Un bouton `Browse` pour sélectionner les fichiers.
- Une zone affichant les fichiers sélectionnés.
- Un champ texte (Entry) pour entrer le chemin du dossier de destination.
- Un bouton `Export` pour déplacer les fichiers vers ce dossier.
- Un bouton `Zip Files` pour créer une archive ZIP contenant les fichiers sélectionnés.

---

## 💻 Technologies utilisées

- Python 3.x
- Tkinter (interface graphique)
- `os`, `shutil`, `zipfile` (modules standards de Python)

---

## 🚀 Lancer le programme

1. Assurez-vous d'avoir Python 3 installé.
2. Lancez le script Python :

```bash
python nom_du_fichier.py
```

3. Suivez les étapes dans l’interface :
   - Cliquez sur **Browse** pour choisir vos fichiers.
   - Entrez un chemin valide dans le champ texte.
   - Cliquez sur **Export** pour déplacer les fichiers, ou **Zip Files** pour créer l’archive.

---

## 📚 Références

- 📖 *Chapitre 10 - Premiers pas avec le module zipfile*
- Documentation officielle : [https://docs.python.org/3/library/zipfile.html](https://docs.python.org/3/library/zipfile.html)

