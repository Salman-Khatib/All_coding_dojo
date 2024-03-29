from django.shortcuts import render, HttpResponse, redirect
from dojo_ninjas_app.models import *
# Create your views here.


def index(request):
    context = {
        "dojos": Dojo.objects.all(),
        "ninjas": Ninja.objects.all()
    }
    return render(request, "index.html", context)


def add(request):
    Dojo.objects.create(
        name=request.POST['name'], city=request.POST['city'], state=request.POST['state'])

    return redirect('/')


def add_ninja(request):
    Ninja.objects.create(
        first_name=request.POST['first_name'], last_name=request.POST['last_name'], dojo=Dojo.objects.get(name=request.POST['drop']))

    return redirect('/')
