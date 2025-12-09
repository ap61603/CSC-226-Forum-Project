"""Models for the forum app."""
from django.db import models
from django.contrib.auth.models import User # Import User

# # Create your models here.

# class Post(models.Model):
#     username = models.CharField(max_length=100)
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.username
    
class Post(models.Model):
    # Change 'username' to 'author' and link it to the User model
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True) 
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)