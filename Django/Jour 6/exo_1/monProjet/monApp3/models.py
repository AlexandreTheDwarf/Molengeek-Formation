from django.db import models

# Create your models here.

class Couleur(models.Model):

    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name


class Voiture(models.Model):
    marque = models.CharField(max_length=32)
    createDate = models.PositiveSmallIntegerField()
    couleur_id = models.ForeignKey(Couleur, related_name='comment', on_delete=models.CASCADE)

    def __str__(self):
        return self.marque



