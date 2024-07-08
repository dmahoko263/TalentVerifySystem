from rest_framework import serializers
from .models import Company

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
        read_only_fields = ['registration_number', 'registration_date']

class CreateCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['name', 'address', 'contact_person', 'number_of_employees', 'contact_phone', 'email_address']
