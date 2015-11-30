from django.db import models
from django.contrib.auth.models import User


class Reader(models.Model):

    user = models.OneToOneField(User)
    rating = models.ManyToManyField(NewsSource)
    friends = models.ForeignKey('self')


class NewsSource(models.Model):

    rss_feed = models.URLField()
    category = models.ForeignKey(Tag)


class Tag(models.Model):

    tag = models.CharField(max_length=250)
    