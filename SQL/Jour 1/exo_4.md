# Exercice 4 : Manipulation de la Table "clothes"

### Objectifs

1. Créer une table `clothes` dans la base de données `exos`.
2. Ajouter des colonnes pour `ID`, `nom du produit`, `couleur`, `taille`, `prix`, et `disponible`.
3. Insérer 3 enregistrements dans la table `clothes` avec des prix compris entre 30€ et 100€.
4. Sélectionner tous les articles dont le prix est entre 40€ et 60€.
5. Sélectionner tous les articles disponibles de taille M.

### Requêtes SQL

### 1. Création de la table `clothes`

```sql
CREATE TABLE exos.clothes (
    id INT PRIMARY KEY UNIQUE NOT NULL,
    nom_produit VARCHAR(50),
    couleur VARCHAR(20),
    taille CHAR(1) CHECK (taille IN ('S', 'M', 'L')),
    prix DECIMAL(5, 2) CHECK (prix BETWEEN 30 AND 100),
    disponible BOOLEAN
);

```

### 2. Insertion des enregistrements

```sql
INSERT INTO exos.clothes (id, nom_produit, couleur, taille, prix, disponible) VALUES
(1, 'T-shirt', 'Rouge', 'M', 45.00, TRUE),
(2, 'Pantalon', 'Bleu', 'L', 55.00, FALSE),
(3, 'Chemise', 'Blanc', 'M', 70.00, TRUE);

```

### 3. Sélection des articles dont le prix est entre 40€ et 60€

```sql
SELECT *
FROM exos.clothes
WHERE prix BETWEEN 40 AND 60;

```

### 4. Sélection des articles disponibles de taille M

```sql
SELECT *
FROM exos.clothes
WHERE disponible = TRUE AND taille = 'M';

```

### Explications

- **Création de la table** : La table `clothes` est créée avec des contraintes pour s'assurer que la `taille` est soit 'S', 'M', ou 'L', et que le `prix` est compris entre 30€ et 100€.
- **Insertion des données** : Trois enregistrements sont insérés avec des valeurs variées pour la `taille` et le `prix`.
- **Sélection avec `BETWEEN`** : La clause `BETWEEN` est utilisée pour sélectionner les articles dans une plage de prix spécifique.
- **Sélection avec `AND`** : La clause `AND` est utilisée pour combiner les conditions sur la `disponibilité` et la `taille`.

---