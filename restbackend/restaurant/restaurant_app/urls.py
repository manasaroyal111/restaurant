from django.urls import path, include
from .views import CategoryViewSet, ItemViewSet, ItemsByCategoryAPIView, CartViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'items', ItemViewSet)
router.register(r'cart', CartViewSet, basename='cart')

router.register(r'', CategoryViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('category/<str:category_name>/', ItemsByCategoryAPIView.as_view(), name='items_by_category_api'),

]