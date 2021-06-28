from django.contrib import admin
from django.urls import path, include
from . import views

app_name="home"

urlpatterns = [
    path('', views.homepage, name="homepage"),
    path('subjects', include('subjects.urls'))
]