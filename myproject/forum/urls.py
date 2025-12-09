from django.urls import path
from . import views

urlpatterns = [
    # Homepage (This handles viewing AND adding posts)
    path('', views.index, name='index'),

    # Other Pages
    path('games/', views.games, name='games'),
    path('team/', views.team, name='team'),
    path('games/tic-tac-toe/', views.tic_tac_toe, name='tic_tac_toe'),
    path('games/trivia/', views.trivia, name='trivia'),

    path('register/', views.register, name='register'),
    path('login/', views.my_login, name='my_login'),
    path('logout/', views.user_logout, name='user_logout'),
]
