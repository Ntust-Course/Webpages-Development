from django.contrib import admin

# Register your models here.
from .models import Person, Course

admin.site.register(Person)
admin.site.register(Course)