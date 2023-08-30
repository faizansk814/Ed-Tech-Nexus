from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.http import JsonResponse
from .models import Enroll
from course.models import Course
User=get_user_model()
# Create your views here.

def CreateEnrol(req,courseid):
    if req.user.is_authenticated:
        if req.method=="POST":
            if req.user.role=="instructor":
                return JsonResponse({"msg":"You cannot enroll"})
            course=Course.objects.get(id=courseid)
            alreadyenrol=Enroll.objects.filter(student=req.user,course=course)
            if alreadyenrol:
                return JsonResponse({"msg":"You have already enrolled"})
            enroll=Enroll.objects.create(student=req.user,course=course)
            return JsonResponse({"msg":"You have enrolled successfully"})
        else:
            return JsonResponse({"msg":"some error occurred"})
    else:
        return JsonResponse({"Login First"})
    
def GetStudentEnrolData(req):
    if req.method == "GET":
        student = req.user
        enroldata = Enroll.objects.filter(student=student)

        serialized_data = []

        for enrol in enroldata:
            course = enrol.course
            instructor = course.instructor
            data = {
                "name": student.username,
                "courseid":course.id,
                "coursename": course.title,
                "description": course.description,
                "instructor": instructor.username,
                "date": enrol.enrollmentdate
            }

            serialized_data.append(data)

        return JsonResponse({"data": serialized_data})
    else:
        return JsonResponse({"msg": "Some error occurred"})
    
def GetEnrol(req):
    Enroldata=Enroll.objects.all()
    data={"data":list(Enroldata.values())}

    return JsonResponse(data)


        

