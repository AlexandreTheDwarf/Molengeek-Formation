# Exercice : Manipulation des Données de Présentation

Dans cet exercice, vous allez créer une table `presentation` pour gérer les informations de présentation des personnes. Vous allez ensuite créer une vue, puis utiliser des fonctions de chaîne de caractères pour manipuler les données.

## Création de la Table

### Table "presentation"

Créez une table nommée `presentation` avec les colonnes suivantes :
- `id` : Identifiant unique de la personne.
- `nom` : Nom de famille de la personne.
- `prenom` : Prénom de la personne.
- `age` : Âge de la personne.
- `metier` : Métier de la personne.
- `adresse` : Adresse de la personne.

```sql
CREATE TABLE presentation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    age INT,
    metier VARCHAR(50),
    adresse VARCHAR(100)
);
```

## Insertion des Données

Insérez trois entrées dans la table `presentation`.

```sql
INSERT INTO presentation (nom, prenom, age, metier, adresse) VALUES
('Durand', 'Alice', 28, 'Développeuse web', '12 rue des Lilas, Paris'),
('Martin', 'Lucas', 35, 'Chef de projet', '47 avenue Victor Hugo, Lyon'),
('Lemoine', 'Sophie', 31, 'Graphiste', '89 boulevard Haussmann, Marseille');
```

## Création de la Vue

Créez une vue nommée `eleve_info` qui contient uniquement l'ID, le nom, le prénom, et l'âge.

```sql
CREATE VIEW eleve_info AS
SELECT id, nom, prenom, age
FROM presentation;
```

## Requêtes de Sélection

### Retourner la Longueur de Chaque Nom

Utilisez la fonction `LENGTH` pour obtenir la longueur de chaque nom.

```sql
SELECT LENGTH(nom) AS longueur_nom
FROM presentation;
```

### Retourner une Phrase Formatée à Partir de la Vue

Utilisez la fonction `CONCAT` pour formater une phrase à partir des données de la vue `eleve_info`.

```sql
SELECT CONCAT("Je m'appelle ", nom, " ", prenom, " et j'ai ", age, " ans") AS presentation
FROM eleve_info;
```

## Résultats

- La première requête retournera la longueur de chaque nom dans la table `presentation`.
- La deuxième requête retournera une phrase formatée pour chaque personne, par exemple : "Je m'appelle Durand Alice et j'ai 28 ans".

---

