from rest_framework import serializers
from .models import Category, Item, Cart


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['name', 'price', 'category']


class CartSerializer(serializers.ModelSerializer):
    item = ItemSerializer()
    class Meta:
        model = Cart
        fields = ['item', 'quantity']
