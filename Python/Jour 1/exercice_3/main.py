import math

# Demandez à l'utilisateur le rayon du cercle.
rayon = float(input("Donne moi le rayon de ton cercle : "))

# Calculez la surface du cercle (πr²) au centième près.
surface = math.pi * rayon ** 2

# Affichez la surface arrondie au centième près.
surface_arrondie = round(surface, 2)
print(f"La surface du cercle est de {surface_arrondie} unités carrées.")
