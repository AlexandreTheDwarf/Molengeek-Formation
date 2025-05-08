from django import forms
from .models import CustomUser, Profile

class CustomUserForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = ['name', 'first_name', 'age', 'email']

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['bio', 'status']

