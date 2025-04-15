# Exercice 3 : Manipulation de Données avec SQL

### Objectifs

1. Créer une base de données nommée `exos`.
2. Créer une table `kids` dans cette base de données.
3. Insérer 5 enregistrements dans la table `kids` avec les colonnes `Id`, `nom`, et `age` (les âges doivent être compris entre 5 et 10 ans).
4. Sélectionner les enfants qui ont entre 6 et 8 ans.
5. Sélectionner tous les enfants dont l'âge est de 5 ans.
6. Filtrer les enfants dont le nom commence par la lettre "A".
7. Filtrer les enfants dont le nom commence par "A" et dont l'âge est supérieur à 6.

### Requêtes SQL

### 1. Création de la base de données et de la table

```sql
CREATE DATABASE exos;

USE exos;

CREATE TABLE kids (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    age INT,
		    CONSTRAINT age_not_in_range CHECK (age BETWEEN 5 AND 10)
);

```

### 2. Insertion des enregistrements

```sql
INSERT INTO kids (nom, age) VALUES
('Léo', 5),
('Emma', 6),
('Noah', 7),
('Lina', 9),
('Kevin', 10);

```

### 3. Sélection des enfants entre 6 et 8 ans

```sql
SELECT *
FROM kids
WHERE age BETWEEN 6 AND 8;

```

### 4. Sélection des enfants dont l'âge est de 5 ans

```sql
SELECT *
FROM kids
WHERE age = 5;

```

### 5. Filtrer les enfants dont le nom commence par "A"

```sql
SELECT *
FROM kids
WHERE nom LIKE 'A%';

```

### 6. Filtrer les enfants dont le nom commence par "A" et dont l'âge est supérieur à 6

```sql
SELECT *
FROM kids
WHERE nom LIKE 'A%' AND age > 6;

```

### Explications

- **Création de la table** : La table `kids` est créée avec une contrainte `CHECK` pour s'assurer que l'âge est toujours compris entre 5 et 10.
- **Insertion des données** : Cinq enregistrements sont insérés avec des âges variés entre 5 et 10.
- **Sélection avec `BETWEEN`** : La clause `BETWEEN` est utilisée pour sélectionner les âges dans une plage spécifique.
- **Sélection avec `LIKE`** : La clause `LIKE` est utilisée pour filtrer les noms commençant par une lettre spécifique.

---