from django.conf.urls import url
from . import views

app_name = 'playapi'
urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'^(?P<question_id>[0-9]+)/$', views.detail, name='detail'),
	url(r'^(?P<question_id>[0-9]+)/results/$', views.results, name='results'),
	url(r'^(?P<question_id>[0-9]+)/vote/$', views.vote, name='vote'),
    #url(r'^search_form$', views.search_form, name='search_form'),
    #url(r'^playapi/search$', views.search, name='search'),
]