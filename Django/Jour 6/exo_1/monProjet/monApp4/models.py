from django.db import models

# Create your models here.
class Author(models.Model):

    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=32)
    createDate = models.PositiveSmallIntegerField()
    author_id = models.ForeignKey(Author, related_name='comment', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

