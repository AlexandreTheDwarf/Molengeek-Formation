import random

# On choisit un nombre aléatoire entre 1 et 100
number = random.randint(1, 100)

# On commence une boucle infinie pour permettre plusieurs tentatives
while True:
    # On demande à l'utilisateur de deviner le nombre
    commande = input('Devinez le nombre (ou entrez exit/quit pour arrêter) : ')

    # Si l'utilisateur entre "exit" ou "quit", on arrête le jeu
    if commande.lower() == "exit" or commande.lower() == "quit":
        print("Arrêt du jeu.")
        break

    # Conversion de la saisie en entier
    commande = int(commande)

    # Si l'utilisateur entre -1, on arrête le jeu prématurément
    if commande == -1:
        print("Arrêt prématuré.")
        break

    # verification supplémentaire

    if not (commande <= 100 and commande > 1) :
        print("Nombre non compris entre 1 et 100")
        continue

    # Si l'utilisateur devine correctement, on le félicite et on arrête le jeu
    if commande == number:
        print("Bien joué ! Vous avez deviné le nombre.")
        break

    # Si la proposition est trop grande
    elif commande > number:
        print("Trop grand.")
        # On vérifie si l'utilisateur est proche du nombre
        if abs(commande - number) <= 10:
            print("Vous êtes proche !")

    # Si la proposition est trop petite
    else:
        print("Trop petit.")
        # On vérifie si l'utilisateur est proche du nombre
        if abs(commande - number) <= 10:
            print("Vous êtes proche !")
