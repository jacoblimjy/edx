from . import views
from django.urls import path

urlpatterns = [
    # Other URL patterns
    path('', views.getRoutes, name='routes'),
    path('register/', views.register_user, name='register'),
    path('products/', views.getProducts, name='products'),
    path('products/<str:pk>/', views.getProduct, name='product'),
]
