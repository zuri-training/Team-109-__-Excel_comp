from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import  CustomUserManager

class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=20)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    class Meta:
        ordering = ['email']
        verbose_name = "User"
    
    def __str__(self):
        return self.email, self.name
