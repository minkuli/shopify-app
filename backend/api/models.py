from django.db import models

# Create your models here.
class Item(models.Model):
    id = models.CharField(max_length=100,primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField(default='')
    price = models.FloatField(default=0)
    image = models.URLField(default=None)
    stock = models.IntegerField(default=None)

    def __str__(self):
        return self.title

    

        