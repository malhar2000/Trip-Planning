
from rest_framework.response import Response
from rest_framework import generics 
from .models import Trip, TripDetails
from .serializers import TripSerializer, TripDetailsSerializer

class TripList(generics.ListCreateAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = TripSerializer(queryset, many=True)
        return Response(serializer.data, 200)
    
    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, 201)
        return Response(serializer.errors, 400)

class TripDetailsList(generics.ListCreateAPIView,  generics.UpdateAPIView):
    queryset = TripDetails.objects.all()
    serializer_class = TripDetailsSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['trip_id'] = Trip.objects.filter(trip_id=self.kwargs['trip_id']).first()

        return context

    def get(self, request, *args, **kwargs):
        queryset =  TripDetails.objects.filter(trip_id=self.kwargs['trip_id'])
        serializer = TripDetailsSerializer(queryset, many=True)
        return Response(serializer.data, 200)

    def post(self, request, *args, **kwargs):
        print(request.data)
        return self.create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)