from django.shortcuts import render_to_response
from django.http import HttpResponse

from .models import Person, Course
# Create your views here.

def index(request):
	people = Person.objects.all()
	return render_to_response('sheiun/index.html', locals())