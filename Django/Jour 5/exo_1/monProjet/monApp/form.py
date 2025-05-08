from .models import Product, Galerie
from django import forms

class ProductForm(forms.ModelForm):
    class Meta:
       model = Product
       fields = ("__all__")
       
class GalerieForm(forms.ModelForm):
    class Meta:
       model = Galerie
       fields = ("__all__")