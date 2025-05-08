from django.db import models

class Tag(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name
    
class Categorie(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    prix = models.FloatField()
    stock = models.IntegerField()
    image = models.CharField(max_length=50)
    category = models.ManyToManyField(Categorie, null=True, blank=True)
    tag = models.ManyToManyField(Tag)

    def __str__(self):
        return self.name
