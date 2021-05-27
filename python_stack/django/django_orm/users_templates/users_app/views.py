from django.http.response import HttpResponse
from django.shortcuts import redirect, render, HttpResponse
from .models import User


def index(request):
    context = {
        "all_users": User.objects.all()
    }
    return render(request, 'index.html', context)


def new(request):
    if request.method == "POST":
        myAge = request.POST["age"]
        User.objects.create(
            first_name=request.POST["first"], last_name=request.POST['last'], email_address=request.POST["email"], age=myAge)
    return redirect("/")
