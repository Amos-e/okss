from django.contrib import admin
from django.urls import path, include
from . import views

app_name="subjects"

urlpatterns = [
    path('', views.subject_view, name="resources"),
    path('<slug>-detail', views.subject_detail, name="detail")
]