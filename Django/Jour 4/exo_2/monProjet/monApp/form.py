from django import forms
from .models import Pokemon, PokemonType

class PokemonForm(forms.ModelForm):
    class Meta:
        model = Pokemon
        fields = ['name', 'type', 'level']

    def __init__(self, *args, **kwargs):
        super(PokemonForm, self).__init__(*args, **kwargs)
        self.fields['type'].queryset = PokemonType.objects.all()