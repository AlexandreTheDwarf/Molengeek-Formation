import colorama
from colorama import Fore, Style
import time
import os

def creer_tableau(lignes, colonnes, valeur_defaut=0):
    tableau = []
    for _ in range(lignes):
        ligne = [valeur_defaut for _ in range(colonnes)]
        tableau.append(ligne)
    return tableau

def afficher_tableau(grille):
    os.system('cls' if os.name == 'nt' else 'clear')  # Clear the console
    for ligne in grille:
        print('[' + ', '.join(str(Fore.RED + '1' + Style.RESET_ALL) if cell == 1 else '0' for cell in ligne) + ']')
    print("\n")

def propager_encre(grille, x, y, niveau):
    if niveau == 0:
        return

    if grille[x][y] == 1:
        return

    grille[x][y] = 1

    afficher_tableau(grille)
    time.sleep(0.5)

    # Liste des déplacements possibles (haut, bas, gauche, droite)
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    # Parcourir les voisins
    for dx, dy in directions:
        nx, ny = x + dx, y + dy
        # Vérifier si les voisins sont dans les limites de la grille
        if 0 <= nx < len(grille) and 0 <= ny < len(grille[0]):
            propager_encre(grille, nx, ny, niveau - 1)

# Exemple d'utilisation
tableau = creer_tableau(9, 9, 0)
propager_encre(tableau, 4, 6, 2)  
