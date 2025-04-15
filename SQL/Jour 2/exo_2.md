# Exercice 9 : Gestion des Clients et Commandes

Dans cet exercice, vous allez créer deux tables, `clients` et `commandes`, pour gérer les informations sur les clients et leurs commandes. Vous allez ensuite utiliser une jointure pour obtenir un tableau contenant des informations spécifiques.

## Création des Tables

### Table "clients"

Créez une table nommée `clients` avec les colonnes suivantes :

- `id` : Identifiant unique du client.
- `nom` : Nom du client.
- `ville` : Ville où réside le client.
- `metiers` : Métier du client.

```sql
CREATE TABLE clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    ville VARCHAR(50),
    metiers VARCHAR(50)
);

```

### Table "commandes"

Créez une table nommée `commandes` avec les colonnes suivantes :

- `id` : Identifiant unique de la commande.
- `id_client` : Clé étrangère, faisant référence à l'ID du client qui a passé la commande.
- `produit_commande` : Nom du produit commandé.
- `nbe_de_commande` : Numéro de la commande.
- `date` : Date à laquelle la commande a été passée.

```sql
CREATE TABLE commandes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_client INT,
    produit_commande VARCHAR(50),
    nbe_de_commande INT,
    date DATE,
    FOREIGN KEY (id_client) REFERENCES clients(id)
);

```

## Insertion des Données

### Insérer des Clients

Insérez des entrées dans la table `clients`.

```sql
INSERT INTO clients (id, nom, ville, metiers) VALUES
(1, 'Alice Dupont', 'Lyon', 'Graphiste'),
(2, 'Bruno Martin', 'Paris', 'Développeur'),
(3, 'Claire Moreau', 'Marseille', 'Comptable'),
(4, 'David Bernard', 'Lille', 'Ingénieur'),
(5, 'Emma Leroy', 'Bordeaux', 'Designer');

```

### Insérer des Commandes

Insérez des entrées dans la table `commandes`.

```sql
INSERT INTO commandes (id_client, produit_commande, nbe_de_commande, date) VALUES
(1, 'Ordinateur portable', 1, '2025-04-01'),
(2, 'Tablette graphique', 1, '2025-04-03'),
(1, 'Clavier mécanique', 2, '2025-04-05'),
(4, 'Casque audio', 1, '2025-04-08'),
(5, 'Chaise ergonomique', 1, '2025-04-10');

```

## Requête de Sélection avec `LEFT JOIN`

Écrivez une requête qui utilise `LEFT JOIN` pour sélectionner l'ID du client, le nom du client, le numéro de commande, et la date de la commande.

```sql
SELECT c.id, c.nom AS nom_client, cmd.nbe_de_commande, cmd.date
FROM clients c
LEFT JOIN commandes cmd
ON c.id = cmd.id_client;

```

## Résultat

Cette requête retournera un tableau contenant l'ID du client, le nom du client, le numéro de commande, et la date pour chaque commande associée à un client. Si un client n'a pas de commande, les colonnes `nbe_de_commande` et `date` seront `NULL`.

---