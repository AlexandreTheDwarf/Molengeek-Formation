# Exercice 10 : Gestion des Employés

Dans cet exercice, vous allez gérer une base de données pour les employés d'une entreprise. La base de données contient deux tables : `Employees` et `Departments`.

## Création des Tables

### Table "Employees"

Créez une table nommée `Employees` avec les colonnes suivantes :

- `id` : Identifiant unique de l'employé.
- `name` : Nom de l'employé.
- `department_id` : Clé étrangère, faisant référence à l'ID du département auquel l'employé appartient.
- `salary` : Salaire de l'employé.

```sql
CREATE TABLE Employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    department_id INT,
    salary DECIMAL(10, 2),
    FOREIGN KEY (department_id) REFERENCES Departments(id)
    -- Si on veut que si on delete un department que ça delete tous les employés en relation faut aujouter ça :
    FOREIGN KEY (department_id) REFERENCES Departments(id) ON DELETE CASCADE
);

```

### Table "Departments"

Créez une table nommée `Departments` avec les colonnes suivantes :

- `id` : Identifiant unique du département.
- `name` : Nom du département.

```sql
CREATE TABLE Departments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);

```

## Insertion des Données

### Insérer des Départements

Insérez des entrées dans la table `Departments`.

```sql
INSERT INTO Departments (name) VALUES
('Informatique'),
('Ressources Humaines'),
('Marketing'),
('Finance'),
('Logistique');

```

### Insérer des Employés

Insérez des entrées dans la table `Employees`.

```sql
INSERT INTO Employees (name, department_id, salary) VALUES
('Alice Durand', 1, 3500.00),
('Bruno Lefèvre', 1, 4200.00),
('Claire Martin', 2, 3000.00),
('David Rousseau', 3, 3100.00),
('Emma Lemoine', 2, 2900.00),
('Félix Dubois', 4, 5000.00),
('Gabriel Petit', 5, 2800.00),
('Hélène Moreau', 3, 3200.00),
('Ismaël Girard', 4, 4600.00),
('Julie Chevalier', 1, 3900.00);

```

## Requêtes de Sélection

### Récupérer les Noms et Salaires de tous les Employés

```sql
SELECT id, name, salary
FROM Employees;

```

### Sélectionner le Nombre d'Employés par Département

```sql
SELECT d.name AS nom_departement, COUNT(e.id) AS nb_employes
FROM Departments d
LEFT JOIN Employees e ON d.id = e.department_id
GROUP BY d.name;

```

### Trouver les Employés du Département "Finance"

```sql
SELECT name, salary
FROM Employees
WHERE department_id = 4;

```

## Mise à Jour des Données

### Augmenter le Salaire des Employés du Département "Marketing"

```sql
UPDATE Employees
SET salary = salary * 1.10
WHERE department_id = 3;

```

## Suppression des Données

### Supprimer les Employés dont le Salaire est Inférieur à 2000

```sql
DELETE FROM Employees
WHERE salary < 2000;

```

## Bonus

### Ajouter un Nouvel Employé

```sql
INSERT INTO Employees (name, department_id, salary)
VALUES ('Nina Faure', 4, 3700.00);

```

### Supprimer un Département et ses Employés

Pour supprimer un département spécifique et tous les employés associés, vous devez d'abord supprimer les employés, puis le département. Utilisez la clause `ON DELETE CASCADE` lors de la création de la clé étrangère pour automatiser ce processus.

```sql
-- Supprimer un département et ses employés si CASCADE 
DELETE FROM Departments
WHERE id = 5;

-- Si pas :
DELETE FROM gestion_des_employes.employees
WHERE department_id = 1;

DELETE FROM gestion_des_employes.departments
WHERE id = 1;
```

---