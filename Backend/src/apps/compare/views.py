from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import 
import pandas as pd
import numpy as np

# Create your views here.
@login_required(login_url='')
def conversion(request):