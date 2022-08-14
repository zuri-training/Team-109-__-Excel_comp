from django.db import models
from datetime import datetime


# Create your models here.
class Operations(models.Model):
    file_name = models.FileField(upload_to='uploads/')
    operation_type = models.TextChoices('operation_type', 'conversion highlight_duplicates_single remove_duplicates_single highlight_duplicates_double remove_duplicates_double')
    operation = models.CharField(choices=operation_type.choices, max_length=30)
    date_performed = models.DateTimeField(default=datetime.now)