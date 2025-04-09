```markdown
# 🧪 Apprentissage des Tests Unitaires en Python

Ce projet est un exercice de **formation à l'écriture de tests unitaires** avec `pytest`. Il repose sur une mécanique de jeu de cartes pour rendre l'apprentissage plus concret et fun !

## 🃏 Contexte

On travaille avec une classe `Card` et un ensemble de fonctions qui détectent des combinaisons dans une main de cartes (suite, paires, couleurs identiques, etc.). L'objectif est de **tester ces fonctions** dans différents cas (valides, erreurs, cas limites…).

## 🎯 Objectif pédagogique

- ✅ Comprendre les **bases de `pytest`**
- ✅ Apprendre à écrire des **tests robustes**
- ✅ Gérer les **exceptions attendues**
- ✅ Tester des **retours de fonction selon différents scénarios**

## 🗂️ Structure du projet

```
exercice_3/
├── main.py               # Code métier : classe Card et fonctions de combinaison
├── test/
│   └── test_getMarch.py  # Fichiers de test utilisant pytest
```

## ▶️ Lancer les tests

Depuis le dossier `exercice_3`, exécute la commande suivante dans le terminal :

```bash
pytest
```

Assure-toi que `pytest` est bien installé :

```bash
pip install pytest
```

## 🧠 Exemple de fonction testée

```python
def isMarch(hand) -> int|None:
    if len(hand) != 5:
        return None
    if not isASuite(hand):
        return None
    return 100 + getSumCardValue(hand)
```

**Projet réalisé dans le cadre de la formation Molengeek.**

```