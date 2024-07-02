from django.db import models
from companies.models import Company
import string
import random

def generate_employee_id():
    length = 20
    while True:
        emp_id = ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))
        if Employee.objects.filter(employee_id=emp_id).count() == 0:
            break
    return emp_id

class Employee(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    employee_id = models.CharField(max_length=20, unique=True, default=generate_employee_id)
    department = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    date_started = models.DateField()
    date_left = models.DateField(null=True, blank=True)
    duties = models.TextField()

    def __str__(self):
        return self.name
