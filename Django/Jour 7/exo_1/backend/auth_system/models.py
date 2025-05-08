from django.db import models
from django.contrib.auth.models import AbstractUser  # une classe prédéfinie pour les utilisateurs

# Créez vos modèles ici.
class User(AbstractUser):  # Utilisez AbstractUser à la place de models.Model
    pass  # Votre classe a besoin de code, mais si vous n'avez pas d'informations à ajouter ou modifier dans le modèle, vous pouvez utiliser pass.