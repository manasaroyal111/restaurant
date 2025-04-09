from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .serializers import CategorySerializer, ItemSerializer, CartSerializer
from .models import Category, Item, Cart
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView

import os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
import os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q


@csrf_exempt
def upload_image(request):
    if request.method == "POST":
        if "image" not in request.FILES:
            return JsonResponse({"error": "No image provided"}, status=400)

        image = request.FILES["image"]

        # Correct path to React's public/images folder
        react_public_folder = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../restfrontend/public/images"))

        # Make sure the folder exists
        if not os.path.exists(react_public_folder):
            os.makedirs(react_public_folder, exist_ok=True)

        # Save the image
        image_path = os.path.join(react_public_folder, image.name)

        try:
            with open(image_path, "wb+") as destination:
                for chunk in image.chunks():
                    destination.write(chunk)
        except Exception as e:
            return JsonResponse({"error": f"Failed to save image: {e}"}, status=500)

        # Return the correct image URL
        image_url = f"/images/{image.name}"
        return JsonResponse({"image_url": image_url}, status=201)

    return JsonResponse({"error": "Invalid request"}, status=400)







def search_items(request):
    query = request.GET.get('q', '')
    if query:
        items = Item.objects.filter(name__icontains=query).distinct()
    else:
        items = Item.objects.none()

    data = [
        {
            "id": item.id,
            "name": item.name,
            "price": item.price,
            "image_url": item.image_url,
            "bestseller": item.bestseller,
            "category": [cat.name for cat in item.category.all()]
        }
        for item in items
    ]
    return JsonResponse(data, safe=False)





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


