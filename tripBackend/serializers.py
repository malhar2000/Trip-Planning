from rest_framework import serializers
from .models import Trip
from .models import TripDetails

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ('trip_id', 'trip_start_time', 'trip_end_time', 'trip_start_station_name', 'trip_end_station_name', 'trip_title')
       
class TripDetailsSerializer(serializers.ModelSerializer):
    trip_id =  TripSerializer(read_only=True)
    class Meta:
        model = TripDetails
        fields = ('trip_id', 'trip_details_id', 'trip_details_time', 'trip_details_location_to_visit', 'trip_location_budget', 'trip_members')
    

    def create(self, validated_data):
        validated_data['trip_id'] = self.context['trip_id'] 
        return super().create(validated_data)