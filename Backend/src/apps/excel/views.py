from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def singleFileDuplicates(request):
    return Response('File Duplicated')

@api_view(['GET'])
def base(request):
    return Response('The API works!')