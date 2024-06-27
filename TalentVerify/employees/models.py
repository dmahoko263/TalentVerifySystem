from django.db import models
from companies.models import Company

class Employee(models.Model):
    company=models.ForeignKey(Company,on_delete=models.CASCADE)
    name=models.CharField(max_length=255)
    employee_id=models.CharField(max_length=20,unique=True,null=True,blank=True)
    department=models.CharField(max_length=255)
    role=models.CharField(max_length=255)
    date_started=models.DateField()
    date_left=models.DateField(null=True,blank=True)
    duties=models.TextField()

    def __str__(self):
        return self.name
