from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.IntegerField()
    price = models.FloatField()
    color = models.CharField(max_length=20)

class Galerie(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='uploads/%Y/%m/%d/')