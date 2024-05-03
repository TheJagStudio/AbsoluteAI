from django.contrib import admin
from .models import UseCases, DocumentTypes
from import_export.admin import ExportActionMixin


class UseCasesAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('heading', 'paragraph')
    search_fields = ('heading', 'paragraph')


class DocumentTypesAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('name', 'subtitle', 'url')
    search_fields = ('name', 'subtitle', 'url')


admin.site.register(UseCases, UseCasesAdmin)
admin.site.register(DocumentTypes, DocumentTypesAdmin)
