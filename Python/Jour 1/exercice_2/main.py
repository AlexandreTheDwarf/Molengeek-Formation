# Demandez à l'utilisateur une température en degrés Celsius.
temp_celsius = input("Peux-tu me donner une température en C° ? ")

# Convertissez l'entrée en un nombre à virgule flottante.
temp_celsius = float(temp_celsius)

# Convertissez la température en degrés Fahrenheit
temp_fahrenheit = 9/5 * temp_celsius + 32

# Affichez le résultat.
print("La température convertie est " + str(temp_fahrenheit) + " °F")
