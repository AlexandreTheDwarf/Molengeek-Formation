# Exercice 5 : **Manipulation de la Table "students"**

## Objectifs

1. Créer une table `students` avec les colonnes `id`, `nom`, `age`, et `note`.
2. Insérer 5 enregistrements dans la table `students`.
3. Trier la table par nom.
4. Trier la table par nom et note par ordre croissant.
5. Compter le nombre d'étudiants dans la table.
6. Calculer la somme des notes des étudiants.
7. Calculer la moyenne des notes des étudiants.
8. Retourner la note la plus petite.
9. Retourner la note la plus grande.

## Requêtes SQL

### 1. Création de la table `students`

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    age INT,
    note FLOAT
);

```

### 2. Insertion des enregistrements

```sql
INSERT INTO students (nom, age, note) VALUES
('Alice', 20, 14.5),
('Mohamed', 22, 12.0),
('Sophie', 19, 17.3),
('Lucas', 21, 9.8),
('Emma', 20, 15.6);

```

### 3. Trier la table par nom

```sql
SELECT * FROM students ORDER BY nom;

```

### 4. Trier la table par nom et note par ordre croissant

```sql
SELECT * FROM students ORDER BY nom, note ASC;

```

### 5. Compter le nombre d'étudiants

```sql
SELECT COUNT(*) FROM students;

```

### 6. Calculer la somme des notes

```sql
SELECT SUM(note) FROM students;

```

### 7. Calculer la moyenne des notes

```sql
SELECT AVG(note) FROM students;

```

### 8. Retourner la note la plus petite

```sql
SELECT MIN(note) FROM students;

```

### 9. Retourner la note la plus grande

```sql
SELECT MAX(note) FROM students;

```

## Explications

- **Création de la table** : La table `students` est créée avec une colonne `id` qui s'incrémente automatiquement.
- **Insertion des données** : Cinq enregistrements sont insérés avec des valeurs variées pour `nom`, `age`, et `note`.
- **Tri des données** : La clause `ORDER BY` est utilisée pour trier les résultats par `nom` et `note`.
- **Fonctions d'agrégation** : Les fonctions `COUNT`, `SUM`, `AVG`, `MIN`, et `MAX` sont utilisées pour effectuer des calculs sur la colonne `note`.

---