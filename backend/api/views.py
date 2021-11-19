from django.shortcuts import render
from .models import Item
from .serializers import ItemSerializer
import requests
from django.http import JsonResponse
from django.conf import settings


url=f'https://{settings.API_KEY}:{settings.API_PASSWORD}@{settings.SHOPIFY_STORE}.myshopify.com/admin/api/2021-10/'

def get_products(request):
    all_products = {}
    endpoint = 'products.json'
    r = requests.get(url + endpoint)
    products = r.json()
    product_list = products['products']
    
    for i in product_list:
        product_data = Item(
            id=i['id'],
            title = i['title'],
            description = i['body_html'],
            price = i['variants'][0].get('price'),
            stock = i['variants'][0].get('inventory_quantity'),
            image = i['images'][0].get('src')
        )
        product_data.save()
        all_products = Item.objects.all()
        serializer = ItemSerializer(all_products, many=True)
        
    return JsonResponse(serializer.data, safe=False)

