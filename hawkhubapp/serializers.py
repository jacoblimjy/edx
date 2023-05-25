from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken #RefreshToken is a class that is built into django rest framework that allows us to generate a token for a user
from .models import Product

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True) #this is a field that is not in the model but we want to add it to the serializer
    _id = serializers.SerializerMethodField(read_only=True) 
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta: #this is a class that is built into django rest framework which allows us to define some options for our serializer
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin'] 
    
    def get__id(self, obj): #this is a method that is not in the model but we want to add it to the serializer
        return obj.id 
    
    def get_isAdmin(self, obj): #this is a method that is not in the model but we want to add it to the serializer
        return obj.is_staff
    
    def get_name(self, obj): #this is a method that is not in the model but we want to add it to the serializer
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']
    
    def get_token(self, obj):
        token = RefreshToken.for_user(obj) #what this do is it will generate a token for the user that is passed in
        return str(token.access_token) 
class ProductSerializer(serializers.ModelSerializer):
    class Meta: #this is a class that is built into django rest framework which allows us to define some options for our serializer
        model = Product
        fields = '__all__' #this will serialize all the fields in the model (Product)