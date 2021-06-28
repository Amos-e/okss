from django.shortcuts import render
from django.http import HttpResponse
from . import models

def subject_view(request):
	return render(request, "subjects/resources.html")

def subject_detail(request, slug):
	files = models.Subject.objects.filter(category=slug)
	return render(request, "subjects/subject-detail.html", {"files":files})