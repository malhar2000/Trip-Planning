 
from django.urls import path
from . import views

urlpatterns = [
    path('listcreate/', views.TripList.as_view()),
    path('<uuid:trip_id>/details/', views.TripDetailsList.as_view()),
]
