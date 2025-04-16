# Exercice : Manipulation des Jours de la Semaine

Dans cet exercice, vous allez créer une table `jour_semaine` pour gérer les jours de la semaine. Vous allez ensuite utiliser une fonction de chaîne de caractères pour extraire les trois premiers caractères de chaque jour.

## Création de la Table

### Table "jour_semaine"

Créez une table nommée `jour_semaine` avec les colonnes suivantes :
- `id` : Identifiant unique du jour.
- `jour` : Nom du jour de la semaine.

```sql
CREATE TABLE jour_semaine (
    id INT PRIMARY KEY AUTO_INCREMENT,
    jour VARCHAR(20) NOT NULL
);
```

## Insertion des Données

Insérez tous les jours de la semaine dans la table `jour_semaine`.

```sql
INSERT INTO jour_semaine (jour) VALUES
('Lundi'),
('Mardi'),
('Mercredi'),
('Jeudi'),
('Vendredi'),
('Samedi'),
('Dimanche');
```

## Requête de Sélection

Utilisez la fonction `SUBSTR` pour extraire les trois premiers caractères de chaque jour de la semaine.

```sql
SELECT SUBSTR(jour, 1, 3) AS jour_abbr
FROM jour_semaine;
```

## Résultat

Cette requête retournera les trois premiers caractères de chaque jour de la semaine, par exemple :
- `Lun` pour `Lundi`
- `Mar` pour `Mardi`
- `Mer` pour `Mercredi`
- etc.

---