# Exemple de Threading en Python

Ce script Python démontre l'utilisation du module `threading` pour exécuter plusieurs tâches en parallèle. Chaque thread simule un processus qui "dort" pendant une durée spécifiée.

## Description

Le script utilise le module `threading` pour créer et gérer plusieurs threads. Voici ce que fait chaque partie du code :

1. **Fonction `dormir` :**
   - Simule un processus qui dort pendant un certain délai.
   - Affiche un message avant et après le sommeil.

2. **Fonction `main` :**
   - Crée une liste de délais pour chaque thread.
   - Pour chaque délai, un thread est créé et démarré pour exécuter la fonction `dormir`.
   - Utilise `thread.join()` pour attendre que tous les threads aient terminé leur exécution.

3. **Exécution :**
   - Le script est exécuté en appelant la fonction `main`.
   - Les messages sont affichés pour indiquer l'état des threads avant et après l'attente.

## Utilisation

Pour exécuter ce script, assurez-vous d'avoir Python installé sur votre machine. Ensuite, exécutez simplement le script avec un interpréteur Python.

```bash
python script.py
```

## Exemple de Sortie

Le script affichera des messages indiquant quand chaque thread commence et termine son "sommeil", ainsi que des messages avant et après l'attente de tous les threads.

