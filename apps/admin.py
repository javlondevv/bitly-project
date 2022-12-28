from django.contrib import admin
from django.contrib.admin import register, ModelAdmin

from apps.models import Message


# Register your models here.
@register(Message)
class MessageAdmin(ModelAdmin):
    list_display = ('subject', 'email', 'written_at', 'message_100')
    list_filter = ('subject', 'email', 'written_at')

    def message_100(self, obj):
        return obj.message[:100]