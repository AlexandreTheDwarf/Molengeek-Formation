# Nombre total de lignes dans le motif
nombre_de_lignes = 4

# Boucle sur chaque ligne
for i in range(1, nombre_de_lignes + 1):
    # Calculer le nombre d'espaces à afficher
    espaces = nombre_de_lignes - i

    # Afficher les espaces
    for _ in range(espaces):
        print("  ", end="")  # Deux espaces pour aligner les nombres

    # Afficher les nombres croissants
    for j in range(i, 2 * i):
        print(j, end=" ")

    # Afficher les nombres décroissants
    for j in range(2 * i - 2, i - 1, -1):
        print(j, end=" ")

    # Passer à la ligne suivante après avoir affiché tous les nombres de la ligne
    print()
