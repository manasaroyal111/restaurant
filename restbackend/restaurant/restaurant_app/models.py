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




class Order(models.Model):
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.id}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='order_items', on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity} x {self.item.name} in Order #{self.order.id}"

