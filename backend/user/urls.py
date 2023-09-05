from django.urls import path
from . import views
urlpatterns = [
    path('register',views.Register,name="register"),
    path('login',views.Login,name="login"),
    path('start',views.Welcome,name='start')
]