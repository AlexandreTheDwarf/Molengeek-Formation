# Exercice 6 : Manipulation de la Table "produits"

## Objectifs

1. Créer une table `produits` avec les colonnes `id`, `nom`, `catégorie`, `prix`, et `stock`.
2. Insérer 5 enregistrements dans la table `produits`.
3. Afficher le nombre de produits par catégorie.
4. Afficher le prix moyen par catégorie.
5. Afficher le stock total par catégorie.

## Requêtes SQL

### 1. Création de la table `produits`

```sql
CREATE TABLE produits (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom_produit VARCHAR(50),
    categorie VARCHAR(20),
    prix DECIMAL(5, 2),
    stock INT
);

```

### 2. Insertion des enregistrements

```sql
INSERT INTO produits (nom_produit, categorie, prix, stock) VALUES
('Produit A', 'Électronique', 150.00, 30),
('Produit B', 'Alimentaire', 5.50, 100),
('Produit C', 'Électronique', 250.00, 20),
('Produit D', 'Vêtements', 20.00, 50),
('Produit E', 'Alimentaire', 3.00, 150);

```

### 3. Afficher le nombre de produits par catégorie

```sql
SELECT categorie, COUNT(*) AS nb_produits
FROM produits
GROUP BY categorie;

```

### 4. Afficher le prix moyen par catégorie

```sql
SELECT categorie, AVG(prix) AS avg_price
FROM produits
GROUP BY categorie;

```

### 5. Afficher le stock total par catégorie

```sql
SELECT categorie, SUM(stock) AS stock_total
FROM produits
GROUP BY categorie;

```

## Explications

- **Création de la table** : La table `produits` est créée avec une colonne `id` qui s'incrémente automatiquement.
- **Insertion des données** : Cinq enregistrements sont insérés avec des valeurs variées pour `nom_produit`, `catégorie`, `prix`, et `stock`.
- **Utilisation de `GROUP BY`** : La clause `GROUP BY` est utilisée pour regrouper les données par `catégorie` et appliquer les fonctions d'agrégation `COUNT`, `AVG`, et `SUM` pour obtenir le nombre de produits, le prix moyen, et le stock total par catégorie.

---