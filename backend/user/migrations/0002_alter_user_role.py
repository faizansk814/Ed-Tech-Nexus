# Generated by Django 4.2.4 on 2023-08-26 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.CharField(choices=[('student', 'Student'), ('instructor', 'Instructor')], default='student', max_length=20),
        ),
    ]
