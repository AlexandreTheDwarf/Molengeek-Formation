from django import forms
from .models import Pays, President

class PaysForm(forms.ModelForm):
    class Meta:
        model = Pays
        fields = ['name']

class PresidentForm(forms.ModelForm):
    class Meta:
        model = President
        fields = ['name', 'first_name', 'country']