# Projet d'exercice HTML & SCSS

## Description

Cet exercice a été réalisé dans le cadre de ma formation en développement web. Le but principal était :  
- De travailler avec **SCSS** et ses fonctionnalités (comme les variables, les mixins, etc.)  
- De mettre en place une **structure de fichiers SCSS** propre et organisée.  

Le projet est basé sur un **template fourni**, qui a été adapté pour répondre aux objectifs pédagogiques.

## Objectifs de l'exercice

- **Utiliser des variables SCSS** : simplifier les changements de styles en centralisant les couleurs, tailles de police, et autres propriétés réutilisables.  
- **Créer une structure de fichiers SCSS modulaire** : séparer les styles en plusieurs fichiers pour améliorer la lisibilité et la maintenance.  
- Comprendre comment les styles SCSS compilés sont intégrés dans le projet HTML.  

## Pourquoi les fichiers SCSS sont inclus dans le repository ?

Normalement, les fichiers SCSS sont compilés en CSS, et seuls les fichiers CSS finaux sont nécessaires pour exécuter le projet. Cependant, dans cet exercice :  
- **Les fichiers SCSS sont inclus pour évaluation pédagogique** : Ils permettent de voir comment la structure des fichiers et les variables ont été utilisées.  
- Cela montre également les **bases du travail en préprocesseur CSS** avant compilation.

**Note :** Les fichiers compilés (CSS générés) devraient idéalement être ignorés via `.gitignore`. Dans ce projet, ils sont inclus pour simplifier la visualisation.

## Structure du projet

Voici la structure principale du projet :  

```plaintext
root/
├── index.html       # Fichier HTML principal
├── public/
│   ├── scss/            # Dossier SCSS
│       ├── _abstracts.scss  # Variables globales
│       ├── _base.scss       # Reset css
│       ├── _components/     # SCSS pour chaque composant spécifique
│       ├── _layouts.scss/   # SCSS pour chaque layout spécifique
│       ├── _themes.scss/    # Pas encore utilisé mais présent
│       └── _Vendors.scss/   # Pas encore utilisé mais présent
│       └── _style.scss
│   ├── css/                 # Fichiers CSS générés (compilés depuis SCSS)
│       └── style.css        # Fichier CSS final
│   ├── img/                 # Dossiers images
│       └── ...
```

## Instructions pour tester le projet

1. Clonez le repository :  
   ```bash
   git clone <url-du-repository>
   cd <nom-du-repository>
   ```
2. Si vous souhaitez recompiler les fichiers SCSS :  
   - Assurez-vous d'avoir [Sass](https://sass-lang.com/install) installé.  
   - Exécutez la commande suivante dans le terminal :  
     ```bash
     sass scss/main.scss css/main.css
     ```
3. Ouvrez le fichier `index.html` dans votre navigateur pour visualiser le rendu.

---

