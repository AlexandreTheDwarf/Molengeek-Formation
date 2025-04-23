# 🛠️ Apprentissage CRUD Django

Petit projet d'entraînement pour apprendre à créer une application CRUD (Create, Read, Update, Delete) avec le framework Django.  
Il s'agit d'une gestion simple de produits, avec des formulaires, des vues, des modèles et des templates.

## ⚙️ Fonctionnalités

- ✅ Affichage de la liste des produits
- 🔍 Détail d’un produit
- ➕ Ajout de nouveaux produits via un formulaire
- ✏️ Modification de produits existants
- 🗑️ Suppression de produits avec confirmation
- 🔐 Protection CSRF
- 📢 Messages de confirmation (ex: suppression réussie)

## 📁 Structure du projet

```bash
monProjet/
├── monProjet/
│   └── urls.py
├── monApp/
│   ├── models.py
│   ├── views.py
│   ├── forms.py
│   ├── templates/
│   │   ├── base.html
│   │   ├── allProduct.html
│   │   ├── detailProduct.html
│   │   ├── createProduct.html
│   │   └── updateProduct.html
├── db.sqlite3
└── manage.py
```

## 🚀 Lancer le projet

### 1. Cloner le dépôt

```bash
git clone https://github.com/ton-user/nom-du-repo.git
cd nom-du-repo
```

### 2. Créer et activer un environnement virtuel (optionnel mais recommandé)

```bash
python -m venv env
source env/bin/activate  # sous Windows : env\Scripts\activate
```

### 3. Installer Django

```bash
pip install django
```

### 4. Lancer le serveur

```bash
python manage.py runserver
```

### 5. Accéder à l'application

> Ouvre ton navigateur à l'adresse :  
> [http://127.0.0.1:8000](http://127.0.0.1:8000)

## 📌 Notes

- Le projet utilise le système de messages de Django pour les notifications.
- Les suppressions se font uniquement via des requêtes POST pour éviter les suppressions accidentelles.
- Les formulaires sont gérés via `ModelForm`.

