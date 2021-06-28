from django.shortcuts import render
from django.http import HttpResponse
from . import models
from subjects.models import Subject

def homepage(request):
	popular = models.Popular.objects.get(id=1)
	questionotd = models.QuestionOTD.objects.get(id=1)
	subject = Subject.objects.latest('id')
	return render(request, 'home/index.html', {"popular": popular, "question": questionotd, "subject": subject})