from django.db import models

class CustomUser(models.Model):
    name = models.CharField(max_length=32)
    first_name = models.CharField(max_length=32)
    age = models.PositiveSmallIntegerField()
    email = models.EmailField()

class Profile(models.Model):
    PUBLIC = 'public'
    PRIVATE = 'private'

    STATUS_CHOICES = [
        (PUBLIC, 'Public'),
        (PRIVATE, 'Privé'),
    ]

    bio = models.TextField(blank=True)
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    status = models.CharField(
        max_length=7,
        choices=STATUS_CHOICES,
        default=PUBLIC,
    )
