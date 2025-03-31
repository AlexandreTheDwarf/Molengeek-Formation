# Demandez à l'utilisateur son poids en kilogrammes.
poids = float(input("Entrez votre poids en kilogrammes : "))

# Demandez à l'utilisateur sa taille en mètres.
taille = float(input("Entrez votre taille en mètres : "))

# Calculez l'IMC (poids / taille²).
imc = poids / (taille * taille)

# Affichez le résultat de l'IMC.
print(f"Votre IMC est de {imc:.2f}.")

# Affichez une interprétation du résultat IMC.
if imc < 18.5:
    print("Interprétation : Maigreur.")
elif 18.5 <= imc < 25:
    print("Interprétation : Poids normal.")
elif 25 <= imc < 30:
    print("Interprétation : Surpoids.")
else:
    print("Interprétation : Obésité.")
