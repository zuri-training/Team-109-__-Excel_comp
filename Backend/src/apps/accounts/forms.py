from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import CustomUser

class CustomUserCreatonForm (UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ["email", "name"]

class CustomUserChangeForm (UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ["email", "name"]