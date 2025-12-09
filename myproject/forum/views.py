from django.shortcuts import render, redirect
from .models import Post

# Create your views here.

def index(request):
    if request.method == "POST":
        # This part saves the data when you click 'Post'
        name = request.POST.get('username')
        text = request.POST.get('content')
        if name and text:
            Post.objects.create(username=name, content=text)
        return redirect('index')

    # This part gets all posts to show them
    all_posts = Post.objects.all().order_by('-created_at')
    return render(request, 'index.html', {'posts': all_posts})

def games(request):
    return render(request, 'games.html')

def team(request):
    return render(request, 'team.html')

def tic_tac_toe(request):
    return render(request, 'tic_tac_toe.html')

def trivia(request):
    return render(request, 'trivia.html')