# Exercices React - useState et useEffect

Ce projet contient plusieurs exercices pour pratiquer les Hooks `useState` et `useEffect` en React.

## Prérequis

Avant de commencer, assurez-vous d'avoir Node.js et npm installés sur votre machine. Si ce n'est pas le cas, téléchargez-les depuis [Node.js](https://nodejs.org/).

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/react-exercices.git
   ```
2. Accédez au dossier du projet :
   ```bash
   cd react-exercices
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```
4. Lancez l'application :
   ```bash
   npm run dev
   ```

## Exercices

### Exercice 1 - Compteur
Créer un composant `Compteur` qui possède un état représentant un compteur. Le compteur doit :
- Pouvoir être incrémenté en cliquant sur un bouton.
- Afficher un message dans la console "Le component a été mis à jour" à chaque mise à jour du composant grâce à `useEffect`.

### Exercice 2 - Chronomètre
Créer un composant `Chronometre` qui affiche un chronomètre qui s'incrémente automatiquement toutes les secondes. Le chronomètre doit :
- Être géré avec `useState` pour stocker le temps écoulé.
- Utiliser `useEffect` pour démarrer l'incrémentation du temps.
- Afficher le temps dans un format `minutes:secondes` (ex: `1:01` pour 61 secondes).

### Exercice 3 - Barre de Progression
Créer un composant `ProgressBar` qui affiche une barre de progression se remplissant progressivement jusqu'à 100% en 10 secondes. 
- Utiliser `useState` pour stocker la progression.
- Utiliser `useEffect` pour mettre à jour la progression toutes les secondes.

### Exercice 4 - Timer
Créer un composant `Timer` qui affiche un compte à rebours.
- Utiliser `useState` pour gérer l'affichage du compte à rebours.
- Utiliser `useEffect` pour retirer une seconde chaque seconde jusqu'à atteindre zéro.

## Objectifs pédagogiques
- Comprendre et utiliser `useState` pour gérer l'état d'un composant.
- Utiliser `useEffect` pour exécuter du code en réponse aux changements d'état.
- Gérer des effets secondaires comme les timers et les mises à jour du DOM.

Bon courage et amusez-vous bien en codant ! 🚀