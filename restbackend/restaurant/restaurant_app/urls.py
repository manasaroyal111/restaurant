from django.urls import path, include
from .views import CategoryViewSet, ItemViewSet, ItemsByCategoryAPIView, CartViewSet, BestsellerItemsAPIView,upload_image
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'items', ItemViewSet)
router.register(r'cart', CartViewSet, basename='cart')


urlpatterns = [
    path('', include(router.urls)),
    path('category/<str:category_name>/', ItemsByCategoryAPIView.as_view(), name='items_by_category_api'),
    path('bestsellers/', BestsellerItemsAPIView.as_view(), name='bestsellers_api'),
    path("api/upload-image/", upload_image, name="upload-image"),

]