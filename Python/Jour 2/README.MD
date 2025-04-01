# Exo Boucle du Jour 2 de python :

## While

### Trouver le nombre avec avec arrêt prématuré

- Générez un nombre aléatoire entre 1 et 100.
- Demandez à l'utilisateur de deviner le nombre.
- Si l'utilisateur devine correctement, affichez un message de félicitations et arrêtez la boucle.
- Si l'utilisateur entre -1, arrêtez la boucle prématurément.
- Sinon, indiquez si le nombre à deviner est plus grand ou plus petit que la proposition de l'utilisateur. si le nombre est séparer de moins de 10 point mettez un message différent

### Calcul de la somme d'une série de nombres

- Demandez à l'utilisateur d'entrer des nombres un par un.
- Utilisez une boucle while pour continuer à demander des nombres jusqu'à ce que l'utilisateur entre 0.
- Calculez la somme de tous les nombres entrés et affichez le résultat.
- n’utilisez pas de liste ni de manipulation de string

### Compte à rebours avec pause

- Créez un compte à rebours à partir d'un nombre donné par l'utilisateur.
- Utilisez une boucle while pour décrementer le nombre et l'afficher.
- Ajoutez une pause d'une seconde entre chaque affichage (utilisez le module time).

### Billet de banque

- L'utilisateur entre le montant qu'il souhaite retirer.
- Le distributeur dispose d'un nombre limité de billets de différentes coupures (par exemple, 100€, 50€, 20€, 10€, 5€). Définissez ces quantités initialement dans votre programme dans des variables séparées (pas de liste).
- Le programme doit essayer de distribuer le montant demandé en utilisant le moins de billets possible, en commençant par les coupures les plus élevées.
- Si le montant demandé ne peut pas être distribué avec les billets disponibles, le programme doit afficher un message d'erreur.
- Le programme doit afficher le nombre de billets de chaque coupure distribuée.
- Utilisez une boucle while pour itérer sur les différentes coupures de billets tant qu'il reste un montant à distribuer et des billets de cette coupure disponibles.
- Si le montant n’est pas divisible par 5 il est arrondie au supérieur.

## For :

exo boucle FOR:

### exo 5
Demandez à l’utilisateur d’entrez un nombre positif supérieur à 2
Pour chaque nombre entre 1 et ce nombre, vérifier que ce nombre est un nombre premier et si c’est le cas, affichez le

### exo 6
Écrivez un code qui utilise des boucles for imbriquées pour afficher le motif numérique suivant (ou un motif similaire plus complexe de votre conception) sans utiliser de listes pour stocker les nombres ou les lignes :

```
        1
      2 3 2
    3 4 5 4 3
5 6 7 8 9 8 7 6 5
```

Vous devrez déterminer la logique pour générer les nombres et les espaces en fonction du numéro de la ligne.
Utilisez des boucles for pour contrôler le nombre d'espaces au début de chaque ligne et les nombres à afficher.
