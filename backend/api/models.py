from django.db import models


class UseCases(models.Model):
    heading = models.CharField(max_length=1000)
    paragraph = models.CharField(max_length=1000)

    def __str__(self):
        return self.heading


class DocumentTypes(models.Model):
    img = models.CharField(max_length=1000)
    name = models.CharField(max_length=1000, default="")
    title = models.CharField(max_length=1000)
    subtitle = models.CharField(max_length=1000)
    fields = models.JSONField()
    usecases = models.ManyToManyField(UseCases)
    url = models.CharField(max_length=1000)

    def __str__(self):
        return self.title
