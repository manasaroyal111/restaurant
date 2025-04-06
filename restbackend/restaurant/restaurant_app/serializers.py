from rest_framework import serializers
from .models import Category, Item, Cart

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'image_url'] 

class ItemSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(many=True, queryset=Category.objects.all())
    class Meta:
        model = Item
        fields = ['id', 'name', 'image_url', 'category', 'price', 'bestseller']

class CartSerializer(serializers.ModelSerializer):
    item = ItemSerializer(read_only=True)

    class Meta:
        model = Cart
        fields = ['id', 'item', 'quantity']







