from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from .serializers import CategorySerializer, ItemSerializer, CartSerializer
from .models import Category, Item, Cart
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView

# Create your views here.

class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ItemViewSet(ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemsByCategoryAPIView(APIView):
    def get(self, request, category_name):
        try:
            category = Category.objects.get(name=category_name)
            items = Item.objects.filter(category=category)
            serializer = ItemSerializer(items, many=True)
            return Response(serializer.data)
        except Category.DoesNotExist:
            return Response({"error": "Category not found"}, status=404)
        

class CartViewSet(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

   # When an item is already in the cart incraese its quantity otherwise add to cart
    def create(self, request):
        item_id = request.data.get('item')
        quantity = int(request.data.get('quantity', 1))

        cart_item, created = Cart.objects.get_or_create(item_id=item_id)
        
        if not created:
            cart_item.quantity += quantity  
            cart_item.save()

        serializer = CartSerializer(cart_item)
        return Response(serializer.data, status=201)