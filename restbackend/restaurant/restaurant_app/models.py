from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=150, unique=True)
    
    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=250, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.IntegerField()

    def __str__(self):
        return self.name


class Cart(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.item.name} - {self.quantity}"