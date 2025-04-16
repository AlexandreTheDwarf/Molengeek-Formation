# Exercice : Gestion des Étudiants et des Professeurs

Dans cet exercice, vous allez créer plusieurs vues pour gérer les informations des étudiants et des professeurs. Vous allez ensuite effectuer des opérations de sélection à partir de ces vues.

## Création des Tables

### Table "Classe"

Créez une table nommée `Classe` avec les colonnes suivantes :
- `ClasseID` : Identifiant unique de la classe.
- `NomClasse` : Nom de la classe.

```sql
CREATE TABLE Classe (
    ClasseID INT PRIMARY KEY AUTO_INCREMENT,
    NomClasse VARCHAR(50) NOT NULL UNIQUE
);
```

### Table "Etudiant"

Créez une table nommée `Etudiant` avec les colonnes suivantes :
- `EtudiantID` : Identifiant unique de l'étudiant.
- `Nom` : Nom de famille de l'étudiant.
- `Prenom` : Prénom de l'étudiant.
- `DateNaissance` : Date de naissance de l'étudiant.
- `ClasseID` : Clé étrangère, faisant référence à l'ID de la classe.

```sql
CREATE TABLE Etudiant (
    EtudiantID INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(50) NOT NULL,
    Prenom VARCHAR(50) NOT NULL,
    DateNaissance DATE,
    ClasseID INT NOT NULL,
    FOREIGN KEY (ClasseID) REFERENCES Classe(ClasseID)
);
```

### Table "Professeur"

Créez une table nommée `Professeur` avec les colonnes suivantes :
- `ProfesseurID` : Identifiant unique du professeur.
- `Nom` : Nom de famille du professeur.
- `Prenom` : Prénom du professeur.
- `Specialisation` : Spécialisation du professeur.

```sql
CREATE TABLE Professeur (
    ProfesseurID INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(50) NOT NULL,
    Prenom VARCHAR(50) NOT NULL,
    Specialisation VARCHAR(100)
);
```

### Table "ProfesseurClasse"

Créez une table nommée `ProfesseurClasse` pour gérer la relation Many-to-Many entre `Professeur` et `Classe` :
- `ProfesseurID` : Identifiant du professeur.
- `ClasseID` : Identifiant de la classe.

```sql
CREATE TABLE ProfesseurClasse (
    ProfesseurID INT NOT NULL,
    ClasseID INT NOT NULL,
    PRIMARY KEY (ProfesseurID, ClasseID),
    FOREIGN KEY (ProfesseurID) REFERENCES Professeur(ProfesseurID),
    FOREIGN KEY (ClasseID) REFERENCES Classe(ClasseID)
);
```

## Insertion des Données

### Insérer des Classes

```sql
INSERT INTO Classe (NomClasse) VALUES
('6ème A'),
('5ème B'),
('4ème C');
```

### Insérer des Étudiants

```sql
INSERT INTO Etudiant (Nom, Prenom, DateNaissance, ClasseID) VALUES
('Dupont', 'Jean', '2010-05-15', 1),
('Durand', 'Sophie', '2011-02-20', 1),
('Lefevre', 'Pierre', '2009-11-01', 2),
('Martin', 'Julie', '2010-08-25', 2),
('Garcia', 'Lucas', '2008-07-10', 3),
('Robert', 'Emma', '2009-04-05', 3),
('Thomas', 'Hugo', '2010-12-01', 1),
('Petit', 'Léa', '2011-06-30', 2);
```

### Insérer des Professeurs

```sql
INSERT INTO Professeur (Nom, Prenom, Specialisation) VALUES
('Moreau', 'Marie', 'Mathématiques'),
('Leroy', 'Paul', 'Français'),
('Bernard', 'Claire', 'Histoire-Géographie'),
('Fournier', 'Antoine', 'Sciences');
```

### Insérer des Relations Professeur-Classe

```sql
INSERT INTO ProfesseurClasse (ProfesseurID, ClasseID) VALUES
(1, 1), -- Marie Moreau enseigne en 6ème A
(1, 2), -- Marie Moreau enseigne en 5ème B
(2, 1), -- Paul Leroy enseigne en 6ème A
(2, 3), -- Paul Leroy enseigne en 4ème C
(3, 2), -- Claire Bernard enseigne en 5ème B
(3, 3), -- Claire Bernard enseigne en 4ème C
(4, 1), -- Antoine Fournier enseigne en 6ème A
(4, 2), -- Antoine Fournier enseigne en 5ème B
(4, 3); -- Antoine Fournier enseigne en 4ème C
```

## Création des Vues

### Vue "VueEtudiantsParClasse"

```sql
CREATE VIEW VueEtudiantsParClasse AS
SELECT
    e.Nom AS NomEtudiant,
    e.Prenom AS PrenomEtudiant,
    c.NomClasse
FROM Etudiant e
JOIN Classe c ON e.ClasseID = c.ClasseID;
```

### Vue "VueProfesseursEtLeursClasses"

```sql
CREATE VIEW VueProfesseursEtLeursClasses AS
SELECT
    p.Nom AS NomProfesseur,
    p.Prenom AS PrenomProfesseur,
    c.NomClasse
FROM Professeur p
JOIN ProfesseurClasse pc ON p.ProfesseurID = pc.ProfesseurID
JOIN Classe c ON pc.ClasseID = c.ClasseID;
```

### Vue "VueNombreEtudiantsParClasse"

```sql
CREATE VIEW VueNombreEtudiantsParClasse AS
SELECT
    c.NomClasse,
    COUNT(e.EtudiantID) AS NombreEtudiants
FROM Classe c
LEFT JOIN Etudiant e ON c.ClasseID = e.ClasseID
GROUP BY c.NomClasse;
```

### Vue "VueProfesseursMaths"

```sql
CREATE VIEW VueProfesseursMaths AS
SELECT
    p.Nom AS NomProfesseur,
    p.Prenom AS PrenomProfesseur
FROM Professeur p
WHERE p.Specialisation = 'Mathématiques';
```

### Vue "VueInfosEtudiants"

```sql
CREATE VIEW VueInfosEtudiants AS
SELECT
    e.EtudiantID AS IdEtudiant,
    e.Nom AS NomEtudiant,
    e.Prenom AS PrenomEtudiant,
    e.DateNaissance AS DateEtudiant,
    c.NomClasse
FROM Etudiant e
JOIN Classe c ON e.ClasseID = c.ClasseID;
```

## Requêtes de Sélection

### Sélectionner Tous les Enregistrements de la Vue "VueEtudiantsParClasse"

```sql
SELECT * FROM VueEtudiantsParClasse;
```

### Afficher les Étudiants de la Classe '5ème B'

```sql
SELECT * FROM VueEtudiantsParClasse
WHERE NomClasse = '5ème B';
```

### Sélectionner Tous les Enregistrements de la Vue "VueProfesseursEtLeursClasses"

```sql
SELECT * FROM VueProfesseursEtLeursClasses;
```

### Afficher les Professeurs Enseignant en '6ème A'

```sql
SELECT * FROM VueProfesseursEtLeursClasses
WHERE NomClasse = '6ème A';
```

### Sélectionner Tous les Enregistrements de la Vue "VueNombreEtudiantsParClasse", Triés par Ordre Décroissant

```sql
SELECT * FROM VueNombreEtudiantsParClasse
ORDER BY NombreEtudiants DESC;
```

### Afficher les Professeurs de Mathématiques

```sql
SELECT NomProfesseur, PrenomProfesseur FROM VueProfesseursMaths;
```

### Sélectionner les Étudiants Dont le Prénom Commence par 'J'

```sql
SELECT NomEtudiant, PrenomEtudiant, NomClasse
FROM VueInfosEtudiants
WHERE PrenomEtudiant LIKE 'J%';
```