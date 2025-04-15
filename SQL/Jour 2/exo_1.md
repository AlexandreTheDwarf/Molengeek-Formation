# Exercice 8 : Gestion des Plats et Desserts

Dans cet exercice, vous allez créer deux tables, `plats` et `desserts`, pour gérer les informations sur les plats principaux et les desserts. Vous allez ensuite utiliser une jointure pour trouver les éléments ayant le même temps de préparation.

## Création des Tables

### Table "plats"

Créez une table nommée `plats` avec les colonnes suivantes :

- `id` : Identifiant unique du plat.
- `nom` : Nom du plat.
- `cooking_time` : Temps de préparation du plat (en format TIME).
- `nbre_pers` : Nombre de personnes pour lesquelles le plat est préparé.

```sql
CREATE TABLE plats (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    cooking_time TIME,
    nbre_pers INT
);

```

### Table "desserts"

Créez une table nommée `desserts` avec les colonnes suivantes :

- `id` : Identifiant unique du dessert.
- `nom` : Nom du dessert.
- `cooking_time` : Temps de préparation du dessert (en format TIME).
- `nbre_pers` : Nombre de personnes pour lesquelles le dessert est préparé.

```sql
CREATE TABLE desserts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    cooking_time TIME,
    nbre_pers INT
);

```

## Insertion des Données

### Insérer des Plats

Insérez trois entrées dans la table `plats`.

```sql
INSERT INTO plats (nom, cooking_time, nbre_pers) VALUES
('Lasagnes', '01:15:00', 4),
('Curry de légumes', '00:45:00', 3),
('Poulet rôti', '01:30:00', 5);

```

### Insérer des Desserts

Insérez trois entrées dans la table `desserts`.

```sql
INSERT INTO desserts (nom, cooking_time, nbre_pers) VALUES
('Tiramisu', '00:30:00', 6),
('Fondant au chocolat', '00:20:00', 4),
('Tarte aux pommes', '00:50:00', 5);

```

## Requête de Sélection avec `INNER JOIN`

Écrivez une requête qui utilise `INNER JOIN` pour sélectionner les noms des plats et des desserts ayant le même temps de préparation.

```sql
SELECT p.nom AS plat, d.nom AS dessert, p.cooking_time
FROM plats p
INNER JOIN desserts d
ON p.cooking_time = d.cooking_time;

```

## Résultat

Cette requête retournera les noms des plats et des desserts qui ont exactement le même temps de préparation. Si aucun plat et dessert n'ont le même temps de préparation, la requête ne retournera aucun résultat.

---