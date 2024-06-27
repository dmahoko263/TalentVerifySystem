from django.db import models

class Company(models.Model):
    name=models.CharField(max_length=255)
    registration_date=models.DateField()
    registration_number=models.CharField(max_length=50, unique=True)
    address=models.TextField()
    contact_person=models.CharField(max_length=255)
    number_of_employees=models.IntegerField()
    contact_phone=models.CharField(max_length=20)
    email_address=models.EmailField()

    def __str__(self):
        return self.name