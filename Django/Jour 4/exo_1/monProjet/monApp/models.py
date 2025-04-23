from django.db import models

# Create your models here.

class Member(models.Model):
    name = models.CharField(max_length=64)
    age = models.IntegerField()
    email = models.EmailField()

class Blog(models.Model):
    titre = models.CharField(max_length=128)
    contenu = models.CharField(max_length=255)
    publicationDate = models.DateField()
    auteur = models.CharField(max_length=64)

class Genre(models.Model):
    name = models.CharField(max_length=100, unique=True)

class Student(models.Model):
    nom = models.CharField(max_length=64)
    prenom = models.CharField(max_length=64)
    age = models.IntegerField()
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)  # Référence à Genre
    classe = models.CharField(max_length=64)

