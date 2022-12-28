from django.urls import path

from apps.views import MainFormView, ShortView, MessageView

urlpatterns = [
    path('', MainFormView.as_view(), name='form_view'),
    path('message', MessageView.as_view(), name='message_view'),
    path('<str:name>', ShortView.as_view(), name='short_view'),
]
