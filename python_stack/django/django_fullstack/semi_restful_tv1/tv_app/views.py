
from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages
# Create your views here.


def index(request):
    context = {
        'shoows': Show.objects.all()
    }
    return render(request, "shows.html", context)


def show_new(request):

    return render(request, "shows_new.html")


def tv_shows(request, id):
    context = {
        'row': Show.objects.get(id=id)
    }
    return render(request, "tv_shows.html", context)


def tv_shows_edit(request, id):
    context = {
        'row': Show.objects.get(id=id)
    }
    return render(request, "tv_shows_edit.html", context)


def create_show(request):

    errors = Show.objects.basic_validator(request.POST)
    # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/shows/new')

    Show.objects.create(
        title=request.POST['title'], network=request.POST['network'], released_date=request.POST['released_date'], description=request.POST['desc'])
    x = Show.objects.last()
    return redirect("/shows/"+str(x.id))


def update_show(request, id):
    if "update" in request.POST:
        errors = Show.objects.basic_validator(request.POST)
        # check if the errors dictionary has anything in it
        if len(errors) > 0:
            # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
            for key, value in errors.items():
                messages.error(request, value)
            # redirect the user back to the form to fix the errors
            return redirect('/shows/'+str(id)+"/edit")
        else:
            c = Show.objects.get(id=id)
            c.title = request.POST['title']
            c.released_date = request.POST['released_date']
            c.network = request.POST['network']
            c.description = request.POST['desc']
            c.save()

            return redirect("/shows/"+str(id))


def delete(request, id):
    x = Show.objects.get(id=id)
    x.delete()
    return redirect("/shows")
