from django import forms
from .models import Tag, Categorie, Product

# Formulaire pour le modèle Tag
class TagForm(forms.ModelForm):
    class Meta:
        model = Tag
        fields = ['name']  # Champ à remplir pour créer un tag

# Formulaire pour le modèle Categorie
class CategorieForm(forms.ModelForm):
    class Meta:
        model = Categorie
        fields = ['name']  # Champ à remplir pour créer une catégorie

# Formulaire pour le modèle Product
class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'description', 'prix', 'stock', 'image', 'category', 'tag']
        widgets = {
            'category': forms.CheckboxSelectMultiple(),  # Utiliser des cases à cocher pour les catégories
            'tag': forms.CheckboxSelectMultiple(),  # Utiliser des cases à cocher pour les tags
        }
