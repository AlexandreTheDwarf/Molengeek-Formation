# Exercice 11 : Gestion des Commandes

Dans cet exercice, vous allez créer une table `commandes` pour gérer les informations sur les commandes passées par des clients. Vous allez ensuite effectuer des opérations de mise à jour et de sélection avec la clause `HAVING`.

## Création de la Table

### Table "commandes"

Créez une table nommée `commandes` avec les colonnes suivantes :

- `id` : Identifiant unique de la commande.
- `client` : Nom du client.
- `tarif` : Montant de la commande.
- `date_achat` : Date à laquelle la commande a été passée.

```sql
CREATE TABLE commandes (
    id INT PRIMARY KEY UNIQUE NOT NULL,
    client VARCHAR(50),
    tarif FLOAT CHECK (tarif > 0),
    date_achat DATE
);

```

## Insertion des Données

Insérez six entrées dans la table `commandes`, avec certains clients ayant passé plusieurs commandes.

```sql
INSERT INTO commandes (id, client, tarif, date_achat) VALUES
(1, 'Alice', 35.00, '2025-04-01'),
(2, 'Bruno', 60.00, '2025-04-02'),
(3, 'Alice', 45.00, '2025-04-03'),
(4, 'Claire', 55.00, '2025-04-04'),
(5, 'David', 25.00, '2025-04-05'),
(6, 'Bruno', 10.00, '2025-04-06');

```

## Mise à Jour des Données

Modifiez le nom du client pour une commande spécifique en utilisant son ID.

```sql
UPDATE commandes
SET client = 'Brandon'
WHERE id = 4;

```

## Requêtes de Sélection avec `HAVING`

### Récupérer les Clients Ayant Commandé Plus de 50€

Utilisez la clause `HAVING` pour filtrer les clients dont la somme des commandes est supérieure à 50€.

```sql
SELECT client, SUM(tarif) AS total_commandes
FROM commandes
GROUP BY client
HAVING SUM(tarif) > 50;

```

### Récupérer les Clients Dont la Moyenne des Commandes est Inférieure à 40€

Utilisez la clause `HAVING` pour filtrer les clients dont la moyenne des commandes est inférieure à 40€.

```sql
SELECT client
FROM commandes
GROUP BY client
HAVING AVG(tarif) < 40;

```

## Résultats

- La première requête retournera les clients dont le total des commandes dépasse 50€.
- La deuxième requête retournera les clients dont la moyenne des commandes est inférieure à 40€.

---