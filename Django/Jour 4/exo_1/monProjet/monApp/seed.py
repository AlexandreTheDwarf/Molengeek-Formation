from django_seed import Seed
from .models import Student, Genre
from faker import Faker
import random

def seed_genres():
    genres = [
        "Agender", "Androgyne", "Bigender", "Cis", "Femme Cis", "Homme Cis", "Femme Cisgenre", 
        "Homme Cisgenre", "Femme à Homme", "FTM", "Genre Fluide", "Genre Non-conforme", 
        "Questionnement sur le genre", "Variante de genre", "Genderqueer", "Intersexe", "Homme à Femme", 
        "MTF", "Ni l'un ni l'autre", "Neutrois", "Non-binaire", "Autre", "Pangender", "Trans", 
        "Femme Trans", "Homme Trans", "Personne Trans", "Trans*", "Femme Trans*", "Homme Trans*", 
        "Personne Trans*", "Femme Trans*", "Transféminin", "Transgenre", "Femme Transgenre", 
        "Homme Transgenre", "Personne Transgenre", "Transmasculin", "Transsexuel", "Femme Transsexuelle", 
        "Homme Transsexuel", "Personne Transsexuelle", "Femme Transsexuelle", "Bispirituel", "Cisgenre Homme", 
        "Cisgenre Femme", "Cis Hétérosexuel", "Cis Gay", "Cis Lesbienne", "Cis Queer", "Cis Trans", 
        "Homme Transmasculin", "Femme Transféminine", "Transidentité", "Non-binaire Hétérosexuel", 
        "Non-binaire Gay", "Non-binaire Lesbienne", "Non-binaire Queer", "Androgyne Non-binaire", 
        "Bigender Fluide", "Pansexuel", "Asexuel", "Demisexuel", "Graysexual", "Polysexuel", 
        "Genderfluid", "Transgenre Fluide", "Homme Genderfluid", "Femme Genderfluid", "Non-binaire Genderfluid"
    ]
    for genre_name in genres:
        Genre.objects.get_or_create(name=genre_name)

def seed_students():
    seeder = Seed.seeder()
    faker = Faker('fr_FR')

    # Ajouter les genres avant de créer les étudiants
    seed_genres()

    all_genres = Genre.objects.all()

    seeder.add_entity(Student, 50, {
        'nom': lambda x: faker.last_name(),
        'prenom': lambda x: faker.first_name(),
        'age': lambda x: random.randint(18, 35),
        'genre': lambda x: random.choice(all_genres),  # Choix aléatoire parmi les genres existants
        'classe': lambda x: random.choice(['Mathématiques', 'Informatique', 'Physique', 'Biologie', 'Chimie']),
    })

    seeder.execute()
    print("50 étudiants générés avec succès!")