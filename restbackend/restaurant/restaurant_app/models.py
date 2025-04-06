from django.db import models

# Category Model
class Category(models.Model):
    name = models.CharField(max_length=150, unique=True)
    image_url = models.CharField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.name

# Item Model
class Item(models.Model):
    name = models.CharField(max_length=250, unique=True)
    image_url = models.CharField(max_length=500, blank=True, null=True)    
    category = models.ManyToManyField(Category)
    price = models.IntegerField()
    bestseller = models.BooleanField(default=False)

    def __str__(self):
        return self.name

# Cart Model
class Cart(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.item.name} - {self.quantity}"

