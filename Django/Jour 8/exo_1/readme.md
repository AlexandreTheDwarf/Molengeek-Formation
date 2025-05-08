# Projet Backend Django - Authentification et Gestion des Utilisateurs

Ce projet est un backend développé avec Django qui inclut une API d'authentification et de gestion des utilisateurs. Il permet de gérer la création de comptes, la connexion, l'affichage des informations de l'utilisateur connecté et la gestion des utilisateurs (pour un administrateur).

## Prérequis

Avant de démarrer, assurez-vous que vous avez installé les outils suivants :

* Python 3.x
* Django 5.x
* Django REST Framework
* SQlite3

## Installation

1. Clonez ce projet dans votre répertoire local :

   ```bash
   git clone https://votre-repository.git
   cd votre-repository
   ```

2. Créez un environnement virtuel :

   ```bash
   python -m venv venv
   ```

3. Activez l'environnement virtuel :

   * Sous Windows :

     ```bash
     venv\Scripts\activate
     ```
   * Sous Mac/Linux :

     ```bash
     source venv/bin/activate
     ```

4. Installez les dépendances du projet :

   ```bash
   pip install -r requirements.txt
   ```

5. Appliquez les migrations de la base de données :

   ```bash
   python manage.py migrate
   ```

6. Créez un superutilisateur (si vous souhaitez accéder à l'admin de Django) :

   ```bash
   python manage.py createsuperuser
   ```

7. Lancez le serveur de développement :

   ```bash
   python manage.py runserver
   ```

   Votre API sera accessible à l'adresse suivante : [http://localhost:8000](http://localhost:8000).

## Routes de l'API

### Authentification

* **POST** `/api/auth/login/` : Connexion d'un utilisateur et récupération du token d'authentification.

  * **Paramètres requis** : `username`, `password`
  * **Réponse** : `{ "token": "votre_token", "user_id": "id_utilisateur", "email": "email_utilisateur" }`

* **POST** `/api/auth/register/` : Inscription d'un nouvel utilisateur.

  * **Paramètres requis** : `username`, `email`, `password`
  * **Réponse** : `{ "message": "Utilisateur créé" }`

* **GET** `/api/auth/me/` : Récupérer les informations de l'utilisateur connecté (requiert un token d'authentification).

  * **Réponse** : `{ "id": "id_utilisateur", "username": "username_utilisateur", "email": "email_utilisateur" }`

### Gestion des Utilisateurs (Admin uniquement)

* **GET** `/api/users/` : Liste de tous les utilisateurs (exclut l'admin lui-même).

  * **Réponse** : Liste d'objets utilisateur avec `id`, `username`, `email`, `role`.

* **GET** `/api/users/{id}/` : Récupérer les détails d'un utilisateur.

  * **Réponse** : Détails de l'utilisateur avec `id`, `username`, `email`, `role`.

* **PATCH** `/api/users/{id}/` : Modifier le rôle d'un utilisateur (requiert un token d'admin).

  * **Paramètres** : `role` (ex. 'member', 'banni')
  * **Réponse** : Détails mis à jour de l'utilisateur.

* **DELETE** `/api/users/{id}/` : Supprimer un utilisateur (sauf l'admin et soi-même).

  * **Réponse** : `{ "message": "Utilisateur supprimé" }`

### Frontend

Le frontend peut interagir avec l'API via les routes mentionnées ci-dessus. Assurez-vous d'envoyer un **token d'authentification** valide dans les en-têtes des requêtes API.

### Backoffice

Une interface d'administration est accessible pour les utilisateurs ayant un rôle d'**admin** via la route `/backoffice/` dans le frontend. Cela permet de gérer les utilisateurs, de les supprimer ou de changer leurs rôles.

## Développement

### Installation des dépendances

Les dépendances sont gérées via le fichier `requirements.txt`. Pour installer les dépendances, exécutez la commande suivante :

```bash
pip install -r requirements.txt
```

### Lancer les tests

Le projet utilise **pytest** pour les tests. Pour lancer les tests, utilisez la commande suivante :

```bash
pytest
```

## Technologies utilisées

* **Django 5.x**
* **Django REST Framework** pour la création de l'API
* **Token Authentication** pour la gestion de la sécurité
* **SQLite** (par défaut) ou **PostgreSQL** (configurable dans `settings.py`)
* **React** pour le frontend (si utilisé)

