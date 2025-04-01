import time

while True:
    commande = input('Donnez un nombre pour démarrer le compte à rebours : ')

    # Convertit la saisie en entier
    try:
        commande = int(commande)
    except ValueError:
        print("Veuillez entrer un nombre entier valide.")
        continue

    if commande <= 0:
            print("veuillez entre un nombre entier")
            continue

    # Compte à rebours
    while commande > 0:
        print(commande)
        commande -= 1
        time.sleep(1)

    print("Compte à rebours terminé !")
    break

