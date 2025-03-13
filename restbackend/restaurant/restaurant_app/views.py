from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .serializers import CategorySerializer, ItemSerializer, CartSerializer
from .models import Category, Item, Cart
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView

class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ItemViewSet(ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemsByCategoryAPIView(APIView):
    def get(self, request, category_name):
        category = get_object_or_404(Category, name=category_name)
        items = Item.objects.filter(category=category)
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)
    

class BestsellerItemsAPIView(APIView):
    def get(self, request):
        bestsellers = Item.objects.filter(bestseller=True)
        serializer = ItemSerializer(bestsellers, many=True)
        return Response(serializer.data)

class CartViewSet(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def create(self, request):
        item_id = request.data.get('item')
        quantity = int(request.data.get('quantity', 1))

        cart_item, created = Cart.objects.get_or_create(item_id=item_id)

        if created:
            status_code = 201
        else:
            cart_item.quantity += quantity  
            cart_item.save()
            status_code = 200 

        serializer = CartSerializer(cart_item)
        return Response(serializer.data, status=status_code)


