from django.shortcuts import render
from django.http import HttpResponse

def news_view(request):
    return render(request, "news/news-index.html")

