# 📦 Tkinter Playground – Exemples d'interfaces graphiques en Python

Ce projet contient **4 scripts Tkinter** simples et indépendants, destinés à illustrer différentes fonctionnalités de base des interfaces graphiques avec Python. Chaque fichier est un petit exercice pratique, idéal pour l'apprentissage ou les démonstrations.

---

## 🗂️ Contenu des fichiers

### `01_hello_world.py`

> 🎯 Affiche une fenêtre avec un label "mon titre" sur fond jaune.

- Crée une fenêtre de dimensions 1280x720.
- Montre un simple `Label` centré.
- Sert de base pour comprendre la création d'une fenêtre Tkinter.

---

### `02_compteur.py`

> 🎯 Un compteur avec boutons d'incrémentation (+1 et +5), qui ferme la fenêtre automatiquement à 20.

- Utilise `logging` pour afficher l’évolution du compteur dans la console.
- Affiche un compteur graphique mis à jour dynamiquement.
- Démonstration de fonctions `command` et de logique conditionnelle.

---

### `03_entry_messagebox.py`

> 🎯 Utilise une zone de saisie (`Entry`) et des boutons pour valider, effacer ou afficher une alerte.

- Affiche le texte entré dans la console (`validate`).
- Supprime le texte avec le bouton `clear`.
- Affiche une boîte de dialogue avec le bouton `show`.

---

### `04_file_dialog.py`

> 🎯 Ouvre une fenêtre de sélection de fichiers multiples.

- Utilise `filedialog.askopenfilenames()` pour sélectionner plusieurs fichiers.
- Affiche leurs chemins dans la console.
- Possibilité (commentée) de supprimer les fichiers sélectionnés via `os.remove()`.

---

## ✅ Prérequis

- Python 3.x
- Aucun package externe nécessaire (uniquement `tkinter`, inclus avec Python)

---

## 🚀 Lancer un script

```bash
python 01_hello_world.py
```

Remplace le nom du fichier selon celui que tu veux tester.

---

## 💡 Remarques

- Chaque script utilise une instance propre de `Tk()`.
- Ces scripts sont pédagogiques : tu peux les modifier pour expérimenter avec Tkinter.
- Attention avec `os.remove()` dans `04_file_dialog.py` : **il supprime les fichiers sélectionnés** si activé !

---

## 👨‍💻 Auteur

Exercices réalisés par Alexandre VDW dans le cadre de l'apprentissage de Python avec Tkinter.

