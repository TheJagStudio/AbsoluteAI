from django.urls import path

from . import views

urlpatterns = [
    path("dataExtract/<str:link>", views.dataExtract, name="dataExtract"),
    path("imageToText/", views.imageToText, name="imageToText"),
    path("documentAIData/", views.documentAIData, name="documentAIData"),
    path("docPages/<str:link>", views.docPages, name="docPages"),
    path("edditor", views.edditor, name="edditor"),
]
