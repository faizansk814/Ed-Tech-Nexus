from django.shortcuts import render
from .models import Course
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
import json
User = get_user_model()

@login_required
def CreateCourse(req):
    if req.method == "POST":
        if req.user.role=="instructor":
            body = json.loads(req.body)
            title = body.get('title')
            description = body.get('description')
            alredycourse=Course.objects.filter(title=title).exists()
            if alredycourse:
                return JsonResponse({"msg":"Course Already present"})
            course = Course.objects.create(
            instructor=req.user, title=title, description=description)
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
