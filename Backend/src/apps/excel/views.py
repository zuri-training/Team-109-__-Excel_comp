from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings as django_settings
from datetime import datetime
import os
import aiofiles
import asyncio
from asgiref.sync import async_to_sync

def get_unique_dir():
    unique_dirname = abs(hash(datetime.now()))
    unique_dirname = f"{unique_dirname}"

    return unique_dirname

def get_unique_filepath(filename, dirname):
    unique_prefix = abs(hash(datetime.now()))
    file_path = f"{dirname}\\{unique_prefix}_{filename}"

    return file_path

@async_to_sync
async def upload_file(filepath, file):
    print(f'Inside Function :  {filepath}')
    async with aiofiles.open(filepath, mode='w') as outfile:
        await outfile.write(file)
        return Response('That was okay')


@api_view(['POST'])
def uploadFile(request):
    file1 = request.data['file1']
    directory = get_unique_dir()
    path = get_unique_filepath(file1['path'], directory)
    file_path = os.path.join(django_settings.MEDIA_ROOT, path)
    print(file_path)
    upload_file(file_path, file1)

    return Response('Okay')

@api_view(['POST'])
def singleFileDuplicates(request):
    return Response('File Duplicated')

@api_view(['GET'])
def base(request):
    return Response('The API works!')