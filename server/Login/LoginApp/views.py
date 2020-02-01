from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
# Create your views here.
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.views.decorators.csrf import csrf_exempt
import json
def home(request):

    return HttpResponse('Welcome')

@csrf_exempt
def logIn(request):

    if request.method=="POST":
        print("HI")
        # print(request.data)
        a=json.loads(request.body)
        
        username=a['username']
        password=a['password']

        print(username,password)
        user=authenticate(username=username,password=password)

        if user:

            login(request,user)
            return JsonResponse({'done':'Yes','message':'Successfully Logged In'})
        
        else:
            return JsonResponse({'done':'No','message':'Wrong Credentials'})



    else:
        return HttpResponse('Welcome')

@csrf_exempt
def signUp(request):

    if request.method=="POST":

        print("Server Hit!")
        a=json.loads(request.body)
        username=a['username']
        password=a['password']
        email=a['email']

        try:
            user=User.objects.get(username=username)

        except:
            user=User()
            user.username=username
            user.set_password(password)
            user.email=email
            user.save()

            return JsonResponse({'done':'Yes'})
    
    else:
        return HttpResponse('Welcome to SignUp')