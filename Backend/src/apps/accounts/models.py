from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from .managers import  CustomUserManager

class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(unique=True, max_length=30)
    name = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["name"]

    objects = CustomUserManager()

    class Meta:
        ordering = ['email']
        verbose_name = "User"
    
    def __str__(self):
        return self.email, self.name

# class file(models.Model):
    

# class operation(models.Model):
#     file = models.OneToOneField(file, )

# class profile(models.Model):
#     user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name="user_profile")

#     def __str__(self):
#         return self.name, self.email