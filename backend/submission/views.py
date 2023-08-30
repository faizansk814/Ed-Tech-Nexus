from django.shortcuts import render
from django.http import JsonResponse
from assignment.models import Assignment
from .models import Submission
from django.contrib.auth import get_user_model
import json
User=get_user_model()

# Create your views here.
def SubmitAssignment(req,assid):
    if req.method=="POST":
        body=json.loads(req.body)
        submission_link=body.get('submission_link')
        userid=req.userid
        user=User.objects.get(id=userid)
        assignment=Assignment.objects.get(id=assid)
        submission=Submission.objects.create(student=user,assignment=assignment,submission_link=submission_link)
        return JsonResponse({"msg":"Submitted"})
    else:
        return JsonResponse({"msg":"some error occured"})
    
def SeeSubmission(req,assid):
    if req.method=="GET":
        assignment=Assignment.objects.get(id=assid)
        allsubmission=Submission.objects.filter(assignment=assignment)
        data=[]
        for sub in allsubmission:
            obj={
                "id":sub.id,
                "studentname":sub.student.username,
                "instructorname":assignment.course.instructor.username,
                "coursename":assignment.course.title,
                "submission_date":sub.submission_date,
                "submission_link":sub.submission_link
            }
            data.append(obj)
        return JsonResponse({"data":data})
    else:
        return JsonResponse({"msg":"Invalid"},status=405)




