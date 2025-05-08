from django.shortcuts import render, redirect
from .forms import TagForm, CategorieForm, ProductForm
from .models import Tag, Categorie, Product

def list_products(request):
    # Récupérer tous les produits avec leurs catégories et tags associés
    products = Product.objects.all()
    categories = Categorie.objects.all()
    tags = Tag.objects.all()

    # Supprimer une catégorie (mise à jour du champ category des produits)
    if 'delete_category' in request.POST:
        category_id = request.POST.get('delete_category')
        category = Categorie.objects.get(id=category_id)
        # Mettre à null les catégories des produits liés à cette catégorie
        category.product_set.update(category=None)  # Retirer cette catégorie des produits
        category.delete()  # Supprimer la catégorie

    return render(request, 'exo5/index5.html', {
        'products': products,
        'categories': categories,
        'tags': tags,
    })

# Vue pour ajouter un tag
def create_tag(request):
    if request.method == 'POST':
        form = TagForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('django_shop')  # Redirection vers la liste des produits après ajout du tag
    else:
        form = TagForm()
    return render(request, 'exo5/create_tag.html', {'form': form})

# Vue pour ajouter une catégorie
def create_categorie(request):
    if request.method == 'POST':
        form = CategorieForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('django_shop')  # Redirection vers la liste des produits après ajout de la catégorie
    else:
        form = CategorieForm()
    return render(request, 'exo5/create_categorie.html', {'form': form})

# Vue pour ajouter un produit
def create_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('django_shop')  # Redirection vers la liste des produits après ajout du produit
    else:
        form = ProductForm()
    return render(request, 'exo5/create_product.html', {'form': form})