from django.urls import path
from . import views
urlpatterns = [
    path('create/<int:courseid>',views.CreateAssignment,name="create"),
    path('get',views.SeeAssignment,name='get'),
    path('see/<int:assid>',views.ParticularAssignment,name='see')
]