from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import CustomUser
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from .serializers import UserSerializer
from rest_framework.permissions import IsAdminUser
from rest_framework.exceptions import PermissionDenied

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({'token': token.key, 'user_id': token.user_id, 'email': token.user.email})

class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        # Utilisez CustomUser au lieu de User
        if CustomUser.objects.filter(username=username).exists():
            return Response({'error': 'Username déjà pris'}, status=status.HTTP_400_BAD_REQUEST)

        # Créez un nouvel utilisateur avec le modèle personnalisé
        user = CustomUser.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        return Response({'message': 'Utilisateur créé'}, status=status.HTTP_201_CREATED)
    
@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def me_view(request):
    user = request.user
    return Response({
        'id': user.id,
        'username': user.username,
        'email': user.email
    })

@login_required
def home(request):
    # Affiche les informations de l'utilisateur connecté
    return render(request, 'home.html', {'user': request.user})

@login_required
def backoffice(request):
    # Assure-toi que l'utilisateur est admin via le middleware
    users = CustomUser.objects.all()
    return render(request, 'backoffice.html', {'users': users})

class UserListView(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsAdminUser]  # Assurez-vous que seul un admin peut accéder

    def get_queryset(self):
        return CustomUser.objects.exclude(id=self.request.user.id)

class UserDetailView(RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsAdminUser]  # Assurez-vous que seul un admin peut accéder

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.role == 'admin' or instance == request.user:
            raise PermissionDenied("Impossible de supprimer un admin ou soi-même")
        return super().delete(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return super().patch(request, *args, **kwargs)
