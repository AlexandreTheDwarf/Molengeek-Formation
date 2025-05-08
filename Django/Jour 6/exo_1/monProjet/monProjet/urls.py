"""
URL configuration for monProjet project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from monApp.views import index, create, delete_user, home
from monApp2.views import index2, create2
from monApp3.views import list_voitures, create_couleur, create_voiture
from monApp4.views import create_author, create_book, list_Books
from monApp5.views import create_tag, create_categorie, create_product, list_products

urlpatterns = [
    path('', home, name='home'),  # Redirection vers la page d'accueil
    # Exo 1
    path('index/', index, name='index'),
    path('create/', create, name='create'),
    path('delete_user/<int:user_id>/', delete_user, name='delete_user'),
    # Exo 2
    path('indexPresident/', index2, name='indexPresident'),
    path('createPays/', create2, name='createPays'),
    # Exo 3
    path('create_couleur/', create_couleur, name='create_couleur'),
    path('create_voiture/', create_voiture, name='create_voiture'),
    path('list_voitures/', list_voitures, name='list_voitures'), 
    # Exo 4
    path('create_author/', create_author, name='create_author'),
    path('create_book/', create_book, name='create_book'),
    path('list_books/', list_Books, name='list_books'), 
    # Exo 5
    path('list_products/', list_products, name='django_shop'), 
    path('create_tag/', create_tag, name='create_tag'),
    path('create_categorie/', create_categorie, name='create_categorie'),
    path('create_product/', create_product, name='create_product'),
]