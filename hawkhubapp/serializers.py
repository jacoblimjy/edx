from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta: #this is a class that is built into django rest framework which allows us to define some options for our serializer
        model = Product
        fields = '__all__' #this will serialize all the fields in the model (Product)