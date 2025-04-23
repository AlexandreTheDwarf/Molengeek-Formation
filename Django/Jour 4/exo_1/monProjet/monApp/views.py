from django.shortcuts import render
from monApp.models import Blog
from monApp.models import Student
from monApp.models import Genre

# Create your views here.

def liste_articles(request):
    articles = Blog.objects.all()  # récupère tous les articles du blog
    return render(request, 'liste_articles.html', {'articles': articles})

def liste_students(request):
    # Récupérer tous les étudiants
    students = Student.objects.all()

    # Trier par classe
    students_by_class = {}
    for student in students:
        if student.classe not in students_by_class:
            students_by_class[student.classe] = []
        students_by_class[student.classe].append(student)

    # Trier par genre
    students_by_gender = {}
    for genre in Genre.objects.all():
        students_by_gender[genre.name] = students.filter(genre=genre)

    # Trier par âge
    students_by_age = students.order_by('age')

    return render(request, "liste_students.html", {
        'students_by_class': students_by_class,
        'students_by_gender': students_by_gender,
        'students_by_age': students_by_age,
        'all_students': students,
    })