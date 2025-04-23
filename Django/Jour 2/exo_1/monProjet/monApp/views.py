from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request,"home.html")

def about(request):
    return HttpResponse("À propos de nous et de votre fils RyadTheGoat ..... !")

def contact(request):
    return HttpResponse("Contactez-nous!")

def test(request):
    myName = "Alexandre"
    return HttpResponse(f"C'est moi {myName}")

def user(request, name):
    return HttpResponse(f"Je suis {name}")