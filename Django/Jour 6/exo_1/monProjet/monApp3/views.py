from django.shortcuts import render, redirect
from .forms import CouleurForm, VoitureForm
from .models import Voiture, Couleur

def list_voitures(request):
    # Récupérer toutes les voitures avec leur couleur associée
    voitures = Voiture.objects.select_related('couleur_id').all()
    return render(request, 'exo3/index3.html', {'voitures': voitures})

# Vue pour ajouter une couleur
def create_couleur(request):
    if request.method == 'POST':
        couleur_form = CouleurForm(request.POST)  # Assure-toi que tu utilises couleur_form
        if couleur_form.is_valid():
            couleur_form.save()
            return redirect('list_voitures')  # Redirection après ajout d'une couleur
    else:
        couleur_form = CouleurForm()
    return render(request, 'exo3/create_couleur.html', {'couleur_form': couleur_form})  # Passe couleur_form

# Vue pour ajouter une voiture
def create_voiture(request):
    if request.method == 'POST':
        voiture_form = VoitureForm(request.POST)  # Assure-toi que tu utilises voiture_form
        if voiture_form.is_valid():
            voiture_form.save()
            return redirect('list_voitures')  # Redirection après ajout d'une voiture
    else:
        voiture_form = VoitureForm()
    couleurs = Couleur.objects.all()  # Liste des couleurs pour le champ 'couleur_id'
    return render(request, 'exo3/create_voiture.html', {'voiture_form': voiture_form, 'couleurs': couleurs})  # Passe voiture_form
