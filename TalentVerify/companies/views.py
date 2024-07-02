from rest_framework import generics, status
from .models import Company
from .serializers import CompanySerializer, CreateCompanySerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class CompanyView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CreateCompanySerializer

class CreateCompanyView(APIView):
    serializer_class = CreateCompanySerializer
    
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            company = serializer.save()
            return Response(CompanySerializer(company).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
