from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    message = "Bonjour, bienvenue sur mon site web !"
    liste_courses = ["Pommes", "Bananes", "Cerises"]
    etudiants = [
        {"nom": "Dupont", "prenom": "Jean", "age": 20},
        {"nom": "Durand", "prenom": "Claire", "age": 22}
    ]
    return render(request, 'home.html', {
        'message': message,
        'liste_courses': liste_courses,
        'etudiants': etudiants
    })

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def portfolio(request):
    projets = [
        {"titre": "Projet 1", "description": "Description rapide du projet 1.", "image_id": 1011},
        {"titre": "Projet 2", "description": "Description rapide du projet 2.", "image_id": 1015},
        {"titre": "Projet 3", "description": "Description rapide du projet 3.", "image_id": 1021},
        {"titre": "Projet 4", "description": "Description rapide du projet 4.", "image_id": 1035},
        {"titre": "Projet 5", "description": "Description rapide du projet 5.", "image_id": 1042},
        {"titre": "Projet 6", "description": "Description rapide du projet 6.", "image_id": 1050},
    ]
    return render(request, 'portfolio.html', {'projets': projets})

def contact(request):
    return render(request, 'contact.html')