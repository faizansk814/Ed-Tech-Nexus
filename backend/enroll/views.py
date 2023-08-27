from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.http import JsonResponse
from .models import Enroll
from course.models import Course
User=get_user_model()
# Create your views here.

def CreateEnrol(req,courseid):
    if req.method=="POST":
        studentid=req.user.id
        user=User.objects.get(id=studentid)
        print(req.user.username,req.user.role)
        if user.role=="instructor":
            return JsonResponse({"msg":"You cannot enroll"})
        course=Course.objects.get(id=courseid)
        enroll=Enroll.objects.create(student=user,course=course)
        return JsonResponse({"msg":"You have enrolled successfully"})
    else:
        return JsonResponse({"msg":"some error occurred"})
    
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


        

