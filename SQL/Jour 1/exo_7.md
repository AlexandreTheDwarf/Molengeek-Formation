# Exercice 7: Gestion d'une Entreprise de Commerce Électronique

Dans cet exercice, vous allez créer une base de données pour une entreprise de commerce électronique. Vous allez gérer plusieurs tables pour les produits, les commandes, les clients, etc.

## Création des Tables

### Table "Clients"

Créez une table nommée `Clients` avec les colonnes suivantes :

- `id` : Identifiant unique du client.
- `nom` : Nom du client.
- `email` : Adresse e-mail du client.

```sql
CREATE TABLE Clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    email VARCHAR(100)
);

```

### Table "Commandes"

Créez une table nommée `Commandes` avec les colonnes suivantes :

- `id` : Identifiant unique de la commande.
- `client_id` : Clé étrangère, faisant référence à l'ID du client qui a passé la commande.
- `date_commande` : Date à laquelle la commande a été passée.
- `montant` : Montant total de la commande.

```sql
CREATE TABLE Commandes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT,
    date_commande DATE,
    montant DECIMAL(10, 2),
    FOREIGN KEY (client_id) REFERENCES Clients(id) ON DELETE CASCADE
);

```

## Insertion des Données

### Insérer des Clients

Insérez au moins deux entrées dans la table `Clients`.

```sql
INSERT INTO Clients (nom, email) VALUES
('Alice Dupont', 'alice.dupond@example.com'),
('Bob Martin', 'bob.martin@example.com');

```

### Insérer des Commandes

Insérez au moins deux entrées dans la table `Commandes`, en associant chaque commande à un client existant.

```sql
INSERT INTO Commandes (client_id, date_commande, montant) VALUES
(1, '2023-10-01', 150.00),
(2, '2023-10-05', 200.50);

```

## Requête de Sélection

Écrivez une requête qui sélectionne toutes les commandes effectuées par un client spécifique en utilisant son ID.

```sql
SELECT * FROM Commandes
WHERE client_id = 1;

```

## Mise à Jour des Données

Modifiez le montant d'une commande spécifique dans la table `Commandes` en utilisant son ID.

```sql
UPDATE Commandes
SET montant = 175.00
WHERE id = 1;

```

## Suppression des Données

### Supprimer une Commande

Supprimez une commande spécifique de la table `Commandes` en utilisant son ID.

```sql
DELETE FROM Commandes
WHERE id = 2;

```

### Supprimer un Client et ses Commandes

Supprimez un client de la table `Clients` et faites en sorte que cela supprime aussi ses commandes. La clause `ON DELETE CASCADE` dans la définition de la clé étrangère permet de supprimer automatiquement les commandes associées lorsque le client est supprimé.

```sql
DELETE FROM Clients
WHERE id = 1;

```

## BONUS : Relation Many-to-Many

### Table "Produits"

Créez une table nommée `Produits` avec les colonnes suivantes :

- `id` : Identifiant unique du produit.
- `nom` : Nom du produit.
- `prix` : Prix du produit.

```sql
CREATE TABLE Produits (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    prix DECIMAL(10, 2)
);

```

### Table "Commandes_Client"

Créez une table nommée `Commandes_Client` qui représente l'achat d'un produit par un client. Cette table contiendra les colonnes suivantes :

- `id` : Identifiant unique de l'achat.
- `client_id` : Référence à l'ID du client.
- `produit_id` : Référence à l'ID du produit.
- `quantité` : Quantité du produit acheté.

```sql
CREATE TABLE Commandes_Client (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT,
    produit_id INT,
    quantité INT,
    FOREIGN KEY (client_id) REFERENCES Clients(id),
    FOREIGN KEY (produit_id) REFERENCES Produits(id)
);

```

### Insertion de Données dans "Produits" et "Commandes_Client"

Insérez des données dans les tables `Produits` et `Commandes_Client`.

```sql
-- Insérer des produits
INSERT INTO Produits (nom, prix) VALUES
('Produit A', 50.00),
('Produit B', 30.00);

-- Insérer des achats
INSERT INTO Commandes_Client (client_id, produit_id, quantité) VALUES
(1, 1, 2),
(2, 2, 1);

```