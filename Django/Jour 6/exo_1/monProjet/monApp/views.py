from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404, redirect
from .forms import CustomUserForm, ProfileForm
from .models import Profile, CustomUser

def create(request):
    if request.method == 'POST':
        user_form = CustomUserForm(request.POST)
        profile_form = ProfileForm(request.POST)
        if user_form.is_valid() and profile_form.is_valid():
            # Enregistrer l'utilisateur d'abord
            user = user_form.save()
            # Associer l'utilisateur au profil
            profile = profile_form.save(commit=False)
            profile.user = user
            profile.save()
            return redirect('index')  # Ou ailleurs
    else:
        user_form = CustomUserForm()
        profile_form = ProfileForm()
    
    return render(request, 'exo1/create.html', {
        'user_form': user_form,
        'profile_form': profile_form,
    })

def index(request):
    profiles = Profile.objects.select_related('user').all()
    return render(request, 'exo1/index.html', {'profiles': profiles})

def delete_user(request, user_id):
    user = get_object_or_404(CustomUser, id=user_id)
    # Supprimer d'abord le profil associé
    profile = user.profile  # Cela récupère le profil lié
    profile.delete()
    # Puis supprimer l'utilisateur
    user.delete()
    
    return redirect('index')  # Rediriger vers la liste après suppression

def home(request):
    return render(request, 'home.html')