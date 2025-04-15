# Exercice 1 : Création et Manipulation de la Base de Données "school"

1. **Créer une base de données "school"** :
    
    ```sql
    CREATE DATABASE school;
    USE school;
    
    ```
    
2. **Créer une table "students"** :
    
    ```sql
    CREATE TABLE students (
        id INT PRIMARY KEY UNIQUE NOT NULL,
        nom VARCHAR(50),
        age INT CHECK (age BETWEEN 12 AND 18),
        moyenne FLOAT
    );
    
    ```
    
3. **Insérer des étudiants dans la table "students"** :
    
    ```sql
    INSERT INTO students (id, nom, age, moyenne)
    VALUES
    (1, 'Alice', 14, 15.5),
    (2, 'Bob', 16, 16.0),
    (3, 'Charlie', 17, 14.5),
    (4, 'David', 15, 17.0),
    (5, 'Eve', 18, 18.5);
    
    ```
    
4. **Créer une table "teacher"** :
    
    ```sql
    CREATE TABLE teacher (
        id INT PRIMARY KEY,
        nom VARCHAR(50),
        age INT,
        poste VARCHAR(50)
    );
    
    ```
    
5. **Insérer des enseignants dans la table "teacher"** :
    
    ```sql
    INSERT INTO teacher (id, nom, age, poste)
    VALUES
    (1, 'Mme Dupont', 40, 'Français'),
    (2, 'M. Martin', 45, 'Mathématiques'),
    (3, 'Mme Durand', 38, 'Chimie'),
    (4, 'M. Bernard', 50, 'Biologie'),
    (5, 'Mme Leclerc', 35, 'Anglais');
    
    ```
    
6. **Sélectionner les étudiants de plus de 14 ans** :
    
    ```sql
    SELECT id, nom
    FROM students
    WHERE age > 14;
    
    ```
    
7. **Sélectionner les enseignants avec un ID supérieur à 2** :
    
    ```sql
    SELECT poste, nom
    FROM teacher
    WHERE id > 2;
    
    ```