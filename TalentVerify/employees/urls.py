from django.urls import path
from .views import EmployeeView, CreateEmployeeView
from companies.views import CompanyView

urlpatterns = [
   path('list/', EmployeeView.as_view(), name='employee-list'),
   path('create/', CreateEmployeeView.as_view(), name='create-employee'),
   path('companies/', CompanyView.as_view(), name='company-list'),

]
