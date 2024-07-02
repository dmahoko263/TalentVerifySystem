from django.db import models
import string
import random
def generate_registration_number():
    length=50

    while True:
        regNo=''.join(random.choices(string.ascii_uppercase,k=length) )
        if Company.objects.filter(registration_number=regNo).count()==0:
            break

    return regNo

class Company(models.Model):
    name=models.CharField(max_length=255)
    registration_date=models.DateTimeField(auto_now_add=True)
    registration_number=models.CharField(max_length=50, default=generate_registration_number, unique=True)
    address=models.TextField()
    contact_person=models.CharField(max_length=255)
    number_of_employees=models.IntegerField()
    contact_phone=models.CharField(max_length=20)
    email_address=models.EmailField()

    def __str__(self):
        return self.name