from django.db import models

# Create your models here.

class PokemonType(models.Model):
    name = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return self.name

class Pokemon(models.Model):
    name = models.CharField(max_length=64)
    type = models.ForeignKey(PokemonType, on_delete=models.CASCADE)
    level = models.IntegerField()