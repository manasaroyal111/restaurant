from rest_framework import serializers
from .models import Category, Item, Cart


class CategorySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    def get_image_url(self, obj):
        request = self.context.get("request")  # Get request context
        if obj.image:
            return request.build_absolute_uri(obj.image.url)  # Full URL
        return None  # If no image

    class Meta:
        model = Category
        fields = ['id', 'name','image', 'image_url']  

        extra_kwargs = {
            'image': {'write_only': True}  # Hide `image` from API response
        }


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    item = ItemSerializer(read_only=True)

    class Meta:
        model = Cart
        fields = ['id', 'item', 'quantity']