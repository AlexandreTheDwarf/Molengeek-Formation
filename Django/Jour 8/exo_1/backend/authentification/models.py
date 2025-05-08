from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # Ajoute un choix pour le rôle
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('member', 'Member'),
        ('banni', 'Banni'),
    )
    
    role = models.CharField(
        max_length=10,
        choices=ROLE_CHOICES,
        default='member',  # Par défaut, tous les utilisateurs sont des membres
    )

    def __str__(self):
        return self.username
