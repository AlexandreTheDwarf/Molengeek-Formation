from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from wishlist.models import Wishlist
from wishlist.serializers import WishlistsSerializer
from django.shortcuts import get_object_or_404
import logging

logger = logging.getLogger(__name__)

@api_view(['GET'])
def index(request):
    wishlists = Wishlist.objects.all()
    serializer = WishlistsSerializer(wishlists, many=True)
    return JsonResponse({'wishlists': serializer.data})

@api_view(['POST'])
def create(request):
    serializer = WishlistsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': 'Wish created successfully'})
    return Response(serializer.errors)

@api_view(['GET'])
def show(request, id):
    wishlist = get_object_or_404(Wishlist, id=id)
    serializer = WishlistsSerializer(wishlist)
    return JsonResponse({'wishlist': serializer.data})

@api_view(['DELETE'])
def destroy(request, id):
    wishlist = get_object_or_404(Wishlist, id=id)
    wishlist.delete()
    logger.info(f"Wishlist with id {id} deleted successfully")  # Ajout d'un log
    return Response({'success': 'Wish deleted successfully'})

@api_view(['PUT'])
def update(request, id):
    wishlist = get_object_or_404(Wishlist, id=id)
    serializer = WishlistsSerializer(wishlist, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': 'Wish updated successfully'})
    return Response(serializer.errors)
