from django.shortcuts import render
from django.http import HttpResponse

def about_view(request):
    return render(request, "about/about-index.html")