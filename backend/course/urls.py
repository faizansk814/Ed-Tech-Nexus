from django.urls import path
from . import views
urlpatterns = [
    path('create',views.CreateCourse,name="create"),
    path('get',views.GetCourse,name="get")
]