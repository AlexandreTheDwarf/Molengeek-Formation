from django.shortcuts import render
from django.shortcuts import render, redirect
from django.shortcuts import  redirect
from .forms import PaysForm, PresidentForm
from .models import President, Pays

# Create your views here.
def index2(request):
    presidents = President.objects.select_related('country').all()
    return render(request, 'exo2/index2.html', {'presidents' : presidents})

def create2(request):
    pays_form = PaysForm()  # Initialisation du formulaire Pays
    president_form = PresidentForm()  # Initialisation du formulaire Président

    if request.method == 'POST':
        if 'president_form' in request.POST:
            # Quand le formulaire du président est soumis
            pays_form = PaysForm()  # Réinitialisation du formulaire pays pour être sûr qu'il ne soit pas affecté
            president_form = PresidentForm(request.POST)
            
            if president_form.is_valid():
                # Enregistrer le président
                president = president_form.save(commit=False)
                pays_id = request.POST.get('country')
                if pays_id:
                    pays = Pays.objects.get(id=pays_id)
                    president.country = pays
                president.save()
                return redirect('indexPresident')  # Rediriger après l'ajout

        elif 'pays_form' in request.POST:
            # Quand le formulaire du pays est soumis
            pays_form = PaysForm(request.POST)
            president_form = PresidentForm()  # Réinitialisation du formulaire président

            if pays_form.is_valid():
                # Enregistrer le pays
                pays = pays_form.save()
                return redirect('createPays')  # Rediriger pour créer un pays
    
    # Afficher les formulaires à la fin de la vue
    return render(request, 'exo2/create2.html', {
        'pays_form': pays_form,
        'president_form': president_form,
    })

