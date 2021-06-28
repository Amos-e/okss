from django.db import models

class Subject(models.Model):
	category = models.CharField(max_length=255)
	title = models.CharField(max_length=255)
	file = models.FileField()
	upload_date = models.DateField(auto_now_add=True) 
	upload_time = models.TimeField(auto_now_add=True)

	def __str__(self):
		return self.category