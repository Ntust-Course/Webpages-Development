# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-04-22 12:25
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('cid', models.CharField(max_length=10)),
                ('credit', models.DecimalField(decimal_places=0, max_digits=1)),
                ('teacher', models.CharField(max_length=5)),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=5)),
                ('sid', models.CharField(max_length=10)),
                ('gender', models.BooleanField(default=True)),
                ('es', models.CharField(max_length=1)),
                ('depart', models.CharField(max_length=10)),
                ('grade', models.CharField(max_length=1)),
            ],
        ),
        migrations.AddField(
            model_name='course',
            name='person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sheiun.Person'),
        ),
    ]
