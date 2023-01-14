from django.db import models
from uuid import uuid4

# Create your models here.
class Trip(models.Model):
    trip_id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    trip_start_time = models.DateTimeField()
    trip_end_time = models.DateTimeField()
    trip_start_station_name = models.CharField(max_length=100)
    trip_end_station_name = models.CharField(max_length=100)
    trip_title = models.CharField(max_length=100)

class TripDetails(models.Model):
    trip_id = models.ForeignKey(Trip, on_delete=models.CASCADE)
    trip_details_id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    trip_details_time = models.DateTimeField()
    trip_details_location_to_visit = models.CharField(max_length=100)
    trip_location_budget = models.IntegerField()
    trip_members = models.IntegerField()
    
     