from django.db import models

# Create your models here.
class Person(models.Model):
	name = models.CharField(max_length=5) # 徐孟辰
	sid = models.CharField(max_length=10) # B10509017
	gender = models.BooleanField(default=True) # True(男)
	es = models.CharField(max_length=1) # 四(四年制)
	depart = models.CharField(max_length=10) #資訊管理系
	grade = models.CharField(max_length=1) #二(二年級)

	def __str__(self):
		return self.name

class Course(models.Model):
	name = models.CharField(max_length=20) # 網頁製作
	cid = models.CharField(max_length=10) # MI2105701
	credit = models.DecimalField(max_digits=1, decimal_places=0) # 3
	teacher =  models.CharField(max_length=5) # 吳柏翰
	# time = models.CharField(_('Some choices...'), choices=SAMPLE_CHOICES, max_length=50) # 週一 - 09:10-10:00, 週一 - 10:20-11:10, 週一 - 11:20-12:10
	# place = models.CharField(max_length=50) # M2(MA-303) M3(MA-303) M4(MA-303)
	person = models.ForeignKey(Person)

	def __str__(self):
		return self.name