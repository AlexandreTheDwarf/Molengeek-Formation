# 📁 Jour 6 – Projet Django Fullstack

Ce dossier contient les exercices et projets réalisés lors du **Jour 6** de la formation Django chez Molengeek. L'objectif principal est de créer une application web fullstack en utilisant Django pour le backend et React pour le frontend.

---

### 📂 Structure du dossier

- **FullstackCrud/** : Projet Django avec une API RESTful pour gérer des opérations CRUD (Create, Read, Update, Delete).
- **TemplateFullStack/** : Intégration d'un template HTML/CSS dans une application React, connectée à l'API Django.

---

### 🚀 Installation

#### Prérequis

- Python 3.x
- Node.js et npm
- pipenv ou virtualenv (optionnel mais recommandé)

#### Backend (Django)

1. **Installation des dépendances :**

   ```bash
   cd FullstackCrud
   pip install -r requirements.txt
   ```

2. **Migrations et démarrage du serveur :**

   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

#### Frontend (React)

1. **Installation des dépendances :**

   ```bash
   cd TemplateFullStack
   npm install
   ```

2. **Démarrage du serveur de développement :**

   ```bash
   npm start
   ```

---

### 🔗 Connexion Frontend ↔ Backend

Assurez-vous que l'URL de l'API Django est correctement configurée dans le frontend React. Par exemple, dans le fichier `src/api.js` :

```javascript
export const API_URL = 'http://localhost:8000/api/';
```

---

### 🧪 Fonctionnalités

- **Backend :**
  - API RESTful avec Django REST Framework
  - Modèles et vues pour gérer les données
- **Frontend :**
  - Interface utilisateur avec React
  - Intégration d'un template HTML/CSS
  - Appels API pour interagir avec le backend

---

### 📝 Notes

- Ce projet est destiné à des fins pédagogiques dans le cadre de la formation Molengeek.
- Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou à me contacter.

