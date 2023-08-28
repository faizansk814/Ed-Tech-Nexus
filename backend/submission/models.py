from django.db import models
from assignment.models import Assignment
from django.contrib.auth import get_user_model
User=get_user_model()
# Create your models here.
class Submission(models.Model):
    student=models.ForeignKey(User,on_delete=models.CASCADE)
    assignment=models.ForeignKey(Assignment,on_delete=models.CASCADE)
    submission_date=models.DateTimeField(auto_now_add=True)
    submission_link=models.TextField()
