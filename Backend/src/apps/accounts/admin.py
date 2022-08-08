from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model
from .models import CustomUser
from .forms import CustomUserChangeForm, CustomUserCreatonForm


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreatonForm
    form = CustomUserChangeForm

    ordering=["email"]
    list_display=["email", "name", "is_superuser", "is_active"]
    search_fields=["email", "name"]
    fieldsets = (
        (None, {
            "fields":(
                "email", "name","password"
            )
        }),
        ('permissions', {
            "fields":(
                "is_staff", "is_active"
            )
        })
    )