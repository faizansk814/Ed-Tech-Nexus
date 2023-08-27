from django.shortcuts import render
from .models import Course
from django.http import JsonResponse
from django.contrib.auth import get_user_model
import json
User = get_user_model()


def CreateCourse(req, insid):
    if req.method == "POST":
        instructor = User.objects.get(id=insid)
        if instructor.role=="instructor":
            body = json.loads(req.body)
            title = body.get('title')
            description = body.get('description')
            course = Course.objects.create(
            instructor=instructor, title=title, description=description)
            return JsonResponse({"msg": "Course Created"})
        else:
            return JsonResponse({"msg":"You are not authorized"})
    else:
        return JsonResponse({"msg": "some error occured"})


def GetCourse(req):
    if req.method == "GET":
        allcourses = Course.objects.all()
        data = {"data": list(allcourses.values())}
        return JsonResponse(data)
    else:
        return JsonResponse({"msg":"some error occured"})
