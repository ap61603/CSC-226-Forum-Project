from django.shortcuts import render, redirect, get_object_or_404
from .models import Post, ClassSubject
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from .forms import ClassCreationForm, CreateUserForm, LoginForm

# Create your views here.

# def index(request):
#     if request.method == "POST":
#         name = request.POST.get('username')
#         text = request.POST.get('content')
#         if name and text:
#             Post.objects.create(username=name, content=text)
#         return redirect('index')
    
#     all_posts = Post.objects.all().order_by('-created_at')
#     return render(request, 'index.html', {'posts': all_posts})

def games(request):
    return render(request, 'games.html')

def team(request):
    return render(request, 'team.html')

def tic_tac_toe(request):
    return render(request, 'tic_tac_toe.html')

def trivia(request):
    return render(request, 'trivia.html')

def register(request):
    form = CreateUserForm()
    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('my_login') # Redirect to login after sign up
    return render(request, 'register.html', {'registerForm': form})

def my_login(request):
    form = LoginForm()
    if request.method == "POST":
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('index') # Redirect to forum home
    return render(request, 'my-login.html', {'loginForm': form})

def user_logout(request):
    logout(request)
    return redirect('index')

def index(request):
    if request.method == "POST":
        if request.user.is_authenticated:
            text = request.POST.get('content')
            Post.objects.create(author=request.user, content=text)
        else:
            return redirect('my_login')

    all_posts = Post.objects.filter(subject=None).order_by('-created_at')
    return render(request, 'index.html', {'posts': all_posts})

def class_list(request):
    subjects = ClassSubject.objects.all()
    return render(request, 'class_list.html', {'subjects': subjects})

def class_detail(request, subject_id):
    subject = get_object_or_404(ClassSubject, id=subject_id)
    
    posts = Post.objects.filter(subject=subject).order_by('-created_at')

    if request.method == "POST":
        if request.user.is_authenticated:
            content = request.POST.get('content')
            Post.objects.create(author=request.user, subject=subject, content=content)
            return redirect('class_detail', subject_id=subject.id)
        else:
            return redirect('my_login')

    return render(request, 'class_detail.html', {'subject': subject, 'posts': posts})

@login_required(login_url='my_login')
def create_class(request):
    if request.method == 'POST':
        form = ClassCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('class_list') # Redirect to the list of all classes
    else:
        form = ClassCreationForm()
    
    return render(request, 'create_class.html', {'form': form})