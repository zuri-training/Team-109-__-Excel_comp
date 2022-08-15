from django.urls import path
from . import views

urlpatterns = [
    path('', views.base, name="home"),
    path('upload', views.uploadFile)
]
