from django import forms
from .models import Couleur, Voiture

class CouleurForm(forms.ModelForm):
    class Meta:
        model = Couleur
        fields = ['name']

class VoitureForm(forms.ModelForm):
    class Meta:
        model = Voiture
        fields = ['marque', 'createDate', 'couleur_id']