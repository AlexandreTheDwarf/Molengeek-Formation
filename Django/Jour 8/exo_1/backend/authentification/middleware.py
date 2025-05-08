from django.shortcuts import redirect
from django.urls import reverse
from django.http import HttpResponseForbidden

class AdminRequiredMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        
        # Si l'utilisateur est connecté et essaie d'accéder à /backoffice
        if request.path.startswith(reverse('backoffice')):  # Remplace 'backoffice' par ton url name
            if not request.user.is_authenticated:
                return redirect('login')  # Redirige vers la page de login si pas connecté
            if request.user.role != 'admin':
                return redirect('home')  # Redirige vers la page d'accueil si pas admin
        
        return response
