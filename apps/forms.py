from django import forms
from django.forms import Form, ModelForm, CharField, EmailField

from apps.models import Url, Message


class UrlForm(ModelForm):
    class Meta:
        model = Url
        exclude = ('short_name',)

    def clean_long_name(self):
        return self.cleaned_data['long_name'].strip()


class MessageForm(ModelForm):

    class Meta:
        model = Message
        fields = ('subject', 'email', 'message')