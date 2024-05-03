from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
# import from template view
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include("api.urls")),
    path('', TemplateView.as_view(template_name='index.html')),
    path("pdf2data/",TemplateView.as_view(template_name="index.html")),
]+ static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)
