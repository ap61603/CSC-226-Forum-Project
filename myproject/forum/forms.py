from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.forms.widgets import PasswordInput, TextInput

from .models import ClassSubject

class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email']

class LoginForm(AuthenticationForm):
    username = forms.CharField(widget=TextInput(attrs={'placeholder': 'Username'}))
    password = forms.CharField(widget=PasswordInput(attrs={'placeholder': 'Password'}))

class ClassCreationForm(forms.ModelForm):
    class Meta:
        model = ClassSubject
        fields = ['name', 'description']
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'e.g. CSC 226', 'class': 'form-control'}),
            'description': forms.Textarea(attrs={'placeholder': 'Brief description of the class...', 'rows': 3}),
        }