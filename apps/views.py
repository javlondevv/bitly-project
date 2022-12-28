from datetime import datetime

from django.contrib.sites.shortcuts import get_current_site
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.urls import reverse_lazy
from django.views import View
from django.views.generic import FormView

from apps.forms import UrlForm, MessageForm
from apps.models import Url, Clicks, Message


class MainFormView(FormView):
    form_class = UrlForm
    template_name = 'apps/index.html'

    def form_valid(self, form):
        url = Url.objects.filter(long_name=form.cleaned_data['long_name']).first()
        if not url:
            url = form.save()

        url = f'{get_current_site(self.request)}/{url.short_name}'
        context = {
            'short_name': url,
            'long_name': form.cleaned_data['long_name'].strip()
        }
        return render(self.request, 'apps/index.html', context)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['today_count'] = Clicks.objects.filter(viewed_at=datetime.today()).count()
        context['all_count'] = Clicks.objects.all().count()
        return context


class MessageView(FormView):
    model = Message()
    form_class = MessageForm
    success_url = reverse_lazy('form_view')

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)


class ShortView(View):
    def get(self, request, name, *args, **kwargs):
        url = get_object_or_404(Url.objects.all(), short_name=name)
        click = Clicks.objects.create(url_id=url.id, viewed_at=datetime.now())
        click.save()
        return HttpResponseRedirect(url.long_name)
