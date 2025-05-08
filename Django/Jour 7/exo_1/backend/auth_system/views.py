from django.http import JsonResponse
# Permet de renvoyer une réponse HTTP avec des données JSON.

from django.contrib.auth import authenticate, login, logout
# authenticate : Vérifie les informations d'identification (nom d'utilisateur et mot de passe) et retourne un objet utilisateur si elles sont correctes.
# login : Connecte un utilisateur en créant une session.
# logout : Déconnecte l'utilisateur en terminant la session actuelle.

from django.contrib.auth.hashers import make_password
# Convertit un mot de passe en un format haché pour le stocker de manière sécurisée dans la base de données.

from rest_framework.decorators import api_view
# Un décorateur pour les vues basées sur les fonctions dans Django REST Framework, spécifiant quelles méthodes HTTP (GET, POST, etc.) sont autorisées.

from rest_framework.response import Response
# Similaire à JsonResponse mais spécifique à Django REST Framework, permet de renvoyer des réponses personnalisées pour les API.

from rest_framework_simplejwt.authentication import JWTAuthentication
# Gère l'authentification des utilisateurs en utilisant des tokens JWT (JSON Web Tokens), ce qui est souvent utilisé pour sécuriser les API.

from rest_framework_simplejwt.tokens import RefreshToken
# Permet de gérer la génération et la manipulation des tokens de rafraîchissement JWT, qui sont utilisés pour obtenir de nouveaux tokens d'accès.

from .models import User
# Importe le modèle User

import json
# Un module standard de Python pour travailler avec les données JSON, permet de convertir des données Python en JSON et vice versa.

@api_view(['POST'])
def inscription(request):
    data = json.loads(request.body)
    # Lit le corps de la requête (qui est en JSON) et le convertit en un dictionnaire Python. Cela permet d'accéder facilement aux données envoyées dans la requête POST.
    username = data.get('username') # on récupère le username
    password = data.get('password') # on récupère le password
    if User.objects.filter(username=username).exists():
    # Vérifie si un utilisateur avec ce nom d'utilisateur existe déjà dans la base de données. 
        return JsonResponse({'status': 'error', 'message': 'Un utilisateur de se nom eiste déjà'})
    new_user = User(username=username, password=make_password(password))
    # Crée un nouvel objet utilisateur avec le nom d'utilisateur fourni et un mot de passe haché. 
    # make_password(password) : transforme le mot de passe en un format sécurisé avant de le stocker.
    new_user.save()
    return JsonResponse({'status': 'success', 'message': 'user créer'})

@api_view(['POST'])
def connexion(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')
    user = authenticate(request, username=username, password=password)
    # Utilise la fonction authenticate pour vérifier si les informations d'identification (nom d'utilisateur et mot de passe) sont correctes. Si elles le sont, elle retourne un objet utilisateur; sinon, elle retourne None.
    if user is not None:
    # Vérifie si l'authentification a réussi
        login(request, user)
        # Connecte l'utilisateur en créant une session pour lui.
        refresh = RefreshToken.for_user(user)
        # Génère un token de rafraîchissement JWT pour l'utilisateur. Ce token permet de générer de nouveaux tokens d'accès sans avoir à se reconnecter.
        access_token = str(refresh.access_token)
        # Extrait le token d'accès à partir du token de rafraîchissement et le convertit en chaîne de caractères.
        return JsonResponse({'status': 'success', 'message': 'user bien login', 'access_token': access_token, 'refresh_token': str(refresh)})
        # Retourne une réponse JSON indiquant que la connexion a réussi, avec les tokens d'accès et de rafraîchissement transformer en string.
    else:
        return JsonResponse({'status': 'error', 'message': 'user non login'})
    
@api_view(['POST'])
def deconnexion(request):
    logout(request)
    # Appelle la fonction logout de Django, qui met fin à la session de l'utilisateur actuel.
    return JsonResponse({'status': 'success', 'message': 'user bien deconnecte'})

def get_user(request):
    try:
        auth = JWTAuthentication()
        # Crée une instance de la classe JWTAuthentication, qui est utilisée pour gérer l'authentification basée sur des tokens JWT.
        user, _ = auth.authenticate(request)
        # Tente d'authentifier l'utilisateur en utilisant le token JWT inclus dans la requête. La méthode authenticate retourne un tuple contenant l'utilisateur et les informations du token si l'authentification réussit. Sinon, elle lève une exception.
    except:
        return JsonResponse({'error': 'il y a une erreur'})
    mon_user = {
        'username': user.username,
        'id': user.id,
    }
    # Si l'authentification réussit, on crée un dictionnaire contenant des informations sur l'utilisateur authentifié
    return JsonResponse({'user': mon_user})