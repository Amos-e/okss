from django.db import models


class Popular(models.Model):
	name = models.CharField(max_length=255)
	title = models.CharField(max_length=255)
	message = models.TextField()

	def __str__(self):
		return self.name

	def snippet(self):
		return self.message[0:140] + '...'

class QuestionOTD(models.Model):
	subject = models.CharField(max_length=255)
	question = models.CharField(max_length=255)
	answer = models.TextField()

	def __str__(self):
		return self.question

	def snippet(self):
		return self.answer[0:140] + '...'
