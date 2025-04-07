class Animal:
    def __init__(self, name):
        self._name = name

    def faire_son(self):
        return f"Cet animal {self._name} fait un son."

    def se_deplacer(self):
        return f"Cet animal {self._name} se déplace."

class Chien(Animal):
    def __init__(self, name):
        super().__init__(name)

    def faire_son(self):
        return "Wouf ! Wouf !"

    def japper(self):
        return "Le chien jappe joyeusement !"

class Oiseau(Animal):
    def __init__(self, name):
        super().__init__(name)

    def faire_son(self):
        return "Cui cui !"

    def se_deplacer(self):
        return "Cet oiseau vole dans le ciel."

# Création des instances
chien1 = Chien("Rex")
oiseau1 = Oiseau("Pico")

# Appels des méthodes
print(chien1.faire_son())  # Devrait afficher "Wouf ! Wouf !"
print(chien1.se_deplacer())  # Devrait afficher "Cet animal Rex se déplace."
print(chien1.japper())  # Devrait afficher "Le chien jappe joyeusement !"

print(oiseau1.faire_son())  # Devrait afficher "Cui cui !"
print(oiseau1.se_deplacer())  # Devrait afficher "Cet oiseau vole dans le ciel."
