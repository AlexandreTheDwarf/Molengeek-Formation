# Demandez à l’utilisateur d’entrer un nombre positif supérieur à 2
while True:
    # Demander à l'utilisateur d'entrer un nombre
    userinput = input("Donnez-moi un chiffre supérieur à 2 : ")

    # Essayer de convertir la saisie en un entier
    try:
        userinput = int(userinput)
    except ValueError:
        # Si la conversion échoue, afficher un message d'erreur et recommencer
        print("Veuillez entrer un nombre valide.")
        continue

    # Vérifier si le nombre est supérieur à 2
    if userinput <= 2:
        print("Veuillez entrer un nombre supérieur à 2.")
        continue

    # Vérifier les nombres premiers entre 2 et le nombre donné
    print(f"Nombres premiers entre 2 et {userinput} :")
    for num in range(2, userinput + 1):
        # Supposons que le nombre est premier jusqu'à preuve du contraire
        is_prime = True

        # Vérifier la divisibilité par tous les nombres jusqu'à la racine carrée de num
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                # Si num est divisible par i, alors ce n'est pas un nombre premier
                is_prime = False
                break

        # Si le nombre est premier, l'afficher
        if is_prime:
            print(num)

    # Sortir de la boucle après avoir trouvé les nombres premiers
    break
