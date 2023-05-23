from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Product
from .products import products
from .serializers import ProductSerializer

# Create your views here.
@api_view(['POST'])
def register_user(request):
    username = request.data['username']
    password = request.data['password']
    email = request.data['email']

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'})

    user = User.objects.create_user(username=username, password=password, email=email)
    return Response({'message': 'User registered successfully'})

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/<id>/reviews/',
        '/api/products/top/',
        '/api/products/<id>/',
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk): #pk is passed in from the url from urls.py
    product = None 
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    # for product in products:
    #     if product['_id'] == pk:
    #         return Response(product)
    return Response(serializer.data)



