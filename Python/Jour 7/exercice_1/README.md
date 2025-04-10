# Calcul de Factorielle avec Logging

Ce script Python calcule la factorielle d'un nombre en utilisant une fonction récursive et inclut des logs pour suivre l'exécution du programme.

## Description

Le script utilise le module `logging` pour enregistrer des messages de débogage, d'avertissement et d'erreur. Voici ce que fait chaque partie du code :

1. **Configuration du Logging :**
   - Le niveau de log est défini sur `DEBUG`, mais les logs de niveau `WARNING` et supérieur sont désactivés.
   - Le format des logs inclut l'horodatage, le niveau de log et le message.

2. **Messages de Log :**
   - Des messages de log sont enregistrés au début du programme et à chaque appel de la fonction `factorielle`.

3. **Fonction `factorielle` :**
   - Calcule la factorielle d'un nombre donné `n`.
   - Gère les cas où `n` est négatif en levant une exception.
   - Utilise la récursivité pour calculer la factorielle.

4. **Exécution :**
   - Calcule la factorielle de 3 et affiche le résultat.
   - Affiche également le calcul direct de 5! pour vérification.

## Utilisation

Pour exécuter ce script, assurez-vous d'avoir Python installé sur votre machine. Ensuite, exécutez simplement le script avec un interpréteur Python.

```bash
python script.py
```

## Exemple de Sortie

Le script affichera les logs de débogage (si activés) et le résultat de la factorielle calculée.
