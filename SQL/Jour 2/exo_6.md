# Exercice 13 : Gestion des Étudiants et de leurs Notes

Dans cet exercice, vous allez créer deux tables, `students` et `notes`, pour gérer les informations sur les étudiants et leurs notes. Vous allez ensuite effectuer une opération de sélection pour obtenir les étudiants ayant une moyenne supérieure à 60% dans tous leurs cours.

## Création des Tables

### Table "students"

Créez une table nommée `students` avec les colonnes suivantes :

- `id` : Identifiant unique de l'étudiant.
- `nom` : Nom de l'étudiant.

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL
);

```

### Table "notes"

Créez une table nommée `notes` avec les colonnes suivantes :

- `id` : Identifiant unique de la note.
- `student_id` : Clé étrangère, faisant référence à l'ID de l'étudiant.
- `cours` : Nom du cours.
- `note` : Note obtenue par l'étudiant (sur 20).

```sql
CREATE TABLE notes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    cours VARCHAR(50) NOT NULL,
    note FLOAT CHECK (note >= 0 AND note <= 20),
    FOREIGN KEY (student_id) REFERENCES students(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

```

## Insertion des Données

### Insérer des Étudiants

Insérez des entrées dans la table `students`.

```sql
INSERT INTO students (nom) VALUES
('Alice Dupont'),
('Bruno Martin'),
('Chloé Bernard'),
('David Lefèvre'),
('Emma Moreau'),
('Félix Laurent'),
('Gabrielle Petit'),
('Hugo Robert'),
('Isabelle Fabre'),
('Julien Garnier');

```

### Insérer des Notes

Insérez des entrées dans la table `notes`.

```sql
INSERT INTO notes (student_id, cours, note) VALUES
(1, 'Maths', 14.5),
(1, 'Français', 12.0),
(2, 'Histoire', 16.0),
(2, 'Maths', 10.5),
(3, 'Maths', 8.0),
(3, 'Sciences', 11.5),
(4, 'Français', 17.0),
(4, 'Géographie', 13.0),
(5, 'Maths', 9.5),
(5, 'Sciences', 10.0),
(6, 'Français', 14.0),
(6, 'Histoire', 15.0),
(7, 'Géographie', 18.0),
(7, 'Sciences', 13.5),
(8, 'Français', 12.5),
(8, 'Maths', 11.0),
(9, 'Histoire', 7.5),
(9, 'Maths', 9.0),
(10, 'Sciences', 14.0),
(10, 'Français', 16.5);

```

## Requête de Sélection

### Récupérer les Étudiants Ayant une Moyenne Supérieure à 60%

Utilisez une requête avec `HAVING` pour calculer la moyenne des notes de chaque étudiant et sélectionnez ceux dont la moyenne est supérieure à 12 (60%).

```sql
SELECT s.id, s.nom, AVG(n.note) AS moyenne
FROM students s
JOIN notes n ON s.id = n.student_id
GROUP BY s.id, s.nom
HAVING AVG(n.note) > 12;

```

## Résultats

Cette requête retournera les étudiants dont la moyenne des notes est supérieure à 60%.

---