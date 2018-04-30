from django.shortcuts import render_to_response
from django.http import HttpResponse

from .models import Question, Choice
# Create your views here.

def index(request):
	return HttpResponse('哈囉')

def detail(request, question_id):
	return HttpResponse("你正在看問題 %s" % question_id)

def results(request, question_id):
	response = "你正在看問題 %s 的結果" % question_id
	return HttpResponse("")

def search_form(request):
	return render_to_response('playapi/search_form.html')

def search(request):
	request.encoding = 'utf-8'
	message = '填入的內容為: ' + request.GET['q']
	return HttpResponse(message)