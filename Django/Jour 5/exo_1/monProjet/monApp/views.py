from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import Product, Galerie
from .form import ProductForm, GalerieForm
# Create your views here.

def get_all_product(request):
    all_product = Product.objects.all()
    return render(request, "allProduct.html", {'all_product' : all_product})

def get_product(request, id):
    product = Product.objects.get(id=id)
    return render(request, "detailProduct.html", {'product' : product})

def create_product(request):
    if request.method == "POST":
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("/")
    else:
        form = ProductForm()
        return render(request, 'createProduct.html', {'form':form})
    
def update_product(request, id):
    product = Product.objects.get(id=id)
    form = ProductForm(request.POST or None, instance=product)
    if form.is_valid():
        form.save()
        return redirect("/")
    return render(request, 'updateProduct.html', {'form':form})

def delete_product(request, id):
    product = get_object_or_404(Product, id=id)
    if request.method == "POST":
        product.delete()
        messages.success(request, f"Produit supprimé avec succès.")
        return redirect("allProducts")
    return redirect("detailProduct", id=id)

def all_galeries(request):
    galeries = Galerie.objects.all()
    return render(request, 'all_galeries.html', {'galeries': galeries})

def create_galerie(request):
    if request.method == 'POST':
        form = GalerieForm(request.POST, request.FILES)  # important !
        if form.is_valid():
            form.save()
            return redirect('allGaleries')  # ou une autre page
    else:
        form = GalerieForm()
    return render(request, 'create_galerie.html', {'form': form})