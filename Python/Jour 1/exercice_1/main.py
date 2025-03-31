# Demander à l'utilisateur son année de naissance
annee_naissance = input("Quelle est votre année de naissance ? ")

# Convertir l'entrée en un nombre entier
annee_naissance = int(annee_naissance)

# Calculer l'âge de l'utilisateur
age = 2025 - annee_naissance

# Afficher l'âge de l'utilisateur
print("Vous avez", age, "ans.")
