# Initialisation de la somme totale
total = 0

# Boucle pour demander des nombres à l'utilisateur
while True:
    commande = input('Entrez un chiffre (ou 0, exit, quit pour terminer) : ')

    # Si l'utilisateur entre "exit" ou "quit", on arrête la boucle
    if commande.lower() == "exit" or commande.lower() == "quit":
        break

    # Conversion de la saisie en entier
    nombre = int(commande)

    # Si l'utilisateur entre 0, on arrête la boucle
    if nombre == 0:
        break

    # Ajout du nombre à la somme totale
    total += nombre

# Affichage du résultat
print(f"Le total est {total}")
