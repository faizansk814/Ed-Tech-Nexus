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
            image=body.get('image')
            title = body.get('title')
            description = body.get('description')
            alredycourse=Course.objects.filter(title=title).exists()
            if alredycourse:
                return JsonResponse({"msg":"Course Already present"})
            course = Course.objects.create(image=image,instructor=req.user, title=title, description=description)
            return JsonResponse({"msg": "Course Created"})
        else:
            return JsonResponse({"msg":"You are not authorized"})
    else:
        return JsonResponse({"msg": "some error occured"})


def GetCourse(req):
    if (req.method == "GET"):
        course_data = []
        data = Course.objects.all().select_related("instructor")
        for item in data:
            instructors = {
                "id": item.instructor.id,
                "username": item.instructor.username
            }
            obj = {
                "id": item.id,
                "image":item.image,
                'title': item.title,
                "description": item.description,
                "instructor": instructors
            }
            course_data.append(obj)

        return JsonResponse({"data": course_data})
    else:
        return JsonResponse({"msg": "Invalid request"}, status=405)




# def getCourseByID(req, courseID):
#     if (req.method == "GET"):
#         courcedata = Course.objects.get(id=courseID)

#         obj = {
#             "id": courcedata.id,
#             "title": courcedata.title,
#             "description": courcedata.description
#         }
#         return JsonResponse(obj)
#     else:
#         return JsonResponse({"msg": "Invalid Request"}, status=405)
