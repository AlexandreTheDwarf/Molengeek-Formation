from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Pokemon
from .form import PokemonForm

def index(request):
    query = """
    SELECT p.id, p.name AS pokemon_name, pt.name AS type_name, p.level
    FROM monApp_pokemon p
    JOIN monApp_pokemontype pt ON p.type_id = pt.id;
    """
    pokemons = Pokemon.objects.raw(query)
    return render(request, 'home.html', {'pokemons': pokemons})

def add_pokemon(request):
    if request.method == 'POST':
        form = PokemonForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')  # Redirige vers la page principale après l'ajout
    else:
        form = PokemonForm()
    return render(request, 'add_pokemon.html', {'form': form})