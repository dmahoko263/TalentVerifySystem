# Generated by Django 5.0.6 on 2024-07-01 08:56

import employees.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='employee_id',
            field=models.CharField(default=employees.models.generate_employee_id, max_length=20, unique=True),
        ),
    ]
