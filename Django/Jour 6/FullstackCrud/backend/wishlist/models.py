from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

class Wishlist(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    price = models.FloatField(validators=[MinValueValidator(0.0), MaxValueValidator(1000000.0)])
    note = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])


