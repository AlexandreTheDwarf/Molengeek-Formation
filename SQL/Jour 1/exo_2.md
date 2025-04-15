# Exercice 2 : Création et Manipulation de la Base de Données "bookshop"

1. **Créer une base de données "bookshop"** :
    
    ```sql
    CREATE DATABASE bookshop;
    USE bookshop;
    
    ```
    
2. **Créer une table "book"** :
    
    ```sql
    CREATE TABLE book (
        id INT PRIMARY KEY,
        nom VARCHAR(100),
        auteur VARCHAR(50),
        annee_publication INT CHECK (annee_publication BETWEEN 1990 AND 2000),
        nombre_pages INT CHECK (annee_publication BETWEEN 150 AND 300)
    );
    
    ```
    
3. **Insérer des livres dans la table "book"** :
    
    ```sql
    INSERT INTO book (id, nom, auteur, annee_publication, nombre_pages)
    VALUES
    (1, 'Livre A', 'Auteur A', 1992, 200),
    (2, 'Livre B', 'Auteur B', 1994, 250),
    (3, 'Livre C', 'Auteur C', 1996, 180),
    (4, 'Livre D', 'Auteur D', 1998, 220),
    (5, 'Livre E', 'Auteur E', 2000, 280);
    
    ```
    
4. **Sélectionner les livres publiés avant 1995** :
    
    ```sql
    SELECT *
    FROM book
    WHERE annee_publication < 1995;
    
    ```
    
5. **Sélectionner les livres avec plus de 200 pages** :

```sql
SELECT *
FROM book
WHERE nombre_pages > 200;

```