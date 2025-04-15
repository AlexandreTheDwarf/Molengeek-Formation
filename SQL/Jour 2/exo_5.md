# Exercice 12 : Gestion des Ventes

Dans cet exercice, vous allez créer une table `ventes` pour gérer les informations sur les ventes effectuées par des vendeurs. Vous allez ensuite effectuer des opérations de suppression et de sélection.

## Création de la Table

### Table "ventes"

Créez une table nommée `ventes` avec les colonnes suivantes :

- `id` : Identifiant unique de la vente.
- `vendeur_id` : Identifiant du vendeur.
- `montant` : Montant de la vente (chiffre décimal).

```sql
CREATE TABLE ventes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    vendeur_id INT,
    montant DECIMAL(10, 2)
);

```

## Insertion des Données

Insérez six entrées dans la table `ventes`, dont deux montants inférieurs à 10€.

```sql
INSERT INTO ventes (vendeur_id, montant) VALUES
(1, 45.50),
(2, 8.90),    -- < 10€
(3, 99.99),
(1, 5.00),    -- < 10€
(2, 25.00),
(4, 60.00);

```

## Suppression des Ventes

Supprimez les ventes dont le montant est inférieur à 10€.

```sql
DELETE FROM ventes
WHERE montant < 10;

```

## Requête de Sélection

### Récupérer les Vendeurs Ayant Effectué des Ventes Supérieures à la Moyenne

Utilisez une sous-requête pour calculer la moyenne générale des montants de vente et sélectionnez les vendeurs dont les ventes sont supérieures à cette moyenne.

```sql
SELECT vendeur_id
FROM ventes
GROUP BY vendeur_id
HAVING AVG(montant) > (
    SELECT AVG(montant)
    FROM ventes
);

```

## Résultats

- La requête de suppression éliminera les ventes dont le montant est inférieur à 10€.
- La requête de sélection retournera les vendeurs dont la moyenne des ventes est supérieure à la moyenne générale des montants de vente.