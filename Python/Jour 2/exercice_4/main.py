# Définir les quantités initiales de billets disponibles
billets_100 = 5
billets_50 = 10
billets_20 = 20
billets_10 = 50
billets_5 = 100

# Boucle principale pour demander le montant à retirer
while True:
    commande = input('Entrez le montant à retirer : ')

    # Convertit la saisie en entier
    try:
        montant_demande = int(commande)
    except ValueError:
        print("Veuillez entrer un montant valide.")
        continue


    # Arrondir le montant au supérieur si nécessaire
    if montant_demande % 5 != 0:
        montant_demande += (5 - montant_demande % 5)

    # Initialiser les compteurs de billets distribués
    billets_distribues_100 = 0
    billets_distribues_50 = 0
    billets_distribues_20 = 0
    billets_distribues_10 = 0
    billets_distribues_5 = 0

    # Distribuer les billets en commençant par les plus grandes coupures
    while montant_demande > 0:
        if montant_demande >= 100 and billets_100 > 0:
            montant_demande -= 100
            billets_100 -= 1
            billets_distribues_100 += 1
        elif montant_demande >= 50 and billets_50 > 0:
            montant_demande -= 50
            billets_50 -= 1
            billets_distribues_50 += 1
        elif montant_demande >= 20 and billets_20 > 0:
            montant_demande -= 20
            billets_20 -= 1
            billets_distribues_20 += 1
        elif montant_demande >= 10 and billets_10 > 0:
            montant_demande -= 10
            billets_10 -= 1
            billets_distribues_10 += 1
        elif montant_demande >= 5 and billets_5 > 0:
            montant_demande -= 5
            billets_5 -= 1
            billets_distribues_5 += 1
        else:
            print("Erreur : Impossible de distribuer le montant demandé avec les billets disponibles.")
            break

    # Afficher le nombre de billets distribués
    print("Billets distribués :")
    if billets_distribues_100 > 0:
        print(f"Billets de 100€ : {billets_distribues_100}")
    if billets_distribues_50 > 0:
        print(f"Billets de 50€ : {billets_distribues_50}")
    if billets_distribues_20 > 0:
        print(f"Billets de 20€ : {billets_distribues_20}")
    if billets_distribues_10 > 0:
        print(f"Billets de 10€ : {billets_distribues_10}")
    if billets_distribues_5 > 0:
        print(f"Billets de 5€ : {billets_distribues_5}")

    # Arrêter la boucle une fois le montant distribué
    break
