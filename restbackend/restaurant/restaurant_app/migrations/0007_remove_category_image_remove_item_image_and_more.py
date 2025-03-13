# Generated by Django 5.1.6 on 2025-03-10 05:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant_app', '0006_alter_cart_unique_together_remove_cart_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='image',
        ),
        migrations.RemoveField(
            model_name='item',
            name='image',
        ),
        migrations.AddField(
            model_name='category',
            name='image_url',
            field=models.URLField(blank=True, max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='image_url',
            field=models.URLField(blank=True, max_length=500, null=True),
        ),
    ]
