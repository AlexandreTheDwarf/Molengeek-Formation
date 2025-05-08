from django.shortcuts import render, redirect
from .forms import AuthorForm, BookForm
from .models import Author, Book

def list_Books(request):
    # Récupérer toutes les Books avec leur author associée
    books = Book.objects.select_related('author_id').all()
    return render(request, 'exo4/index4.html', {'books': books})

# Vue pour ajouter une author
def create_author(request):
    if request.method == 'POST':
        author_form = AuthorForm(request.POST)  # Assure-toi que tu utilises author_form
        if author_form.is_valid():
            author_form.save()
            return redirect('list_books')  # Redirection après ajout d'une author
    else:
        author_form = AuthorForm()
    return render(request, 'exo4/create_author.html', {'author_form': author_form})  # Passe author_form

# Vue pour ajouter une book
def create_book(request):
    if request.method == 'POST':
        book_form = BookForm(request.POST)  # Assure-toi que tu utilises book_form
        if book_form.is_valid():
            book_form.save()
            return redirect('list_books')  # Redirection après ajout d'une book
    else:
        book_form = BookForm()
    authors = Author.objects.all()  # Liste des authors pour le champ 'author_id'
    return render(request, 'exo4/create_book.html', {'book_form': book_form, 'authors': authors})  # Passe book_form