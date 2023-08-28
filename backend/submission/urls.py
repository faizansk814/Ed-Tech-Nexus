from django.urls import path
from . import views
urlpatterns = [
    path('submit/<int:assid>',views.SubmitAssignment,name="submit"),
    path('seeallsub/<int:assid>',views.SeeSubmission,name="see")
]