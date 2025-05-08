from django.db import models

# Create your models here.

class Pays(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name

class President(models.Model):
    name = models.CharField(max_length=32)
    first_name = models.CharField(max_length=32)
    country = models.OneToOneField(Pays, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.first_name} {self.name} ({self.country.name})"