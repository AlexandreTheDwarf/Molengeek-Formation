from django.urls import path
from .views import CustomAuthToken, RegisterView, me_view, UserListView, UserDetailView, backoffice

urlpatterns = [
    path('login/', CustomAuthToken.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('me/', me_view, name='me'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('backoffice/', backoffice, name='backoffice'),
]
