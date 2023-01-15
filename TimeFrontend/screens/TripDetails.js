import { SafeAreaView, Text, View, Modal, TextInput, Button, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import TripDetailView from '../components/TripDetailView';
import { useState } from 'react';
import axios from 'axios';
 

const TripDetails = ({props, navigation, route}) => {

  const tripData = route.params.item;
 

  const [modelView, setModalView] = useState(false)
  const [tripLocation, setTripLocation] = useState('') 
  const [tripBudget, setTripBudget] = useState(0)
  const [tripMembers, setTripMembers] = useState(0)
  const [detailsData, setDetailsData] = useState([])

  const createTripDetail = () => {
    let formData = new FormData();
    formData.append('trip_details_location_to_visit', tripLocation);
    formData.append('trip_location_budget', tripBudget);
    formData.append('trip_members', tripMembers);
    axios.post(`http://localhost:8000/trip/${tripData["trip_id"]}/details/`, 
       formData
  )
  .then(res => {console.log(res)});

  setTripLocation('');
  setTripBudget(0);
  setTripMembers(0);
}
  useEffect(() => {
    axios.get(`http://localhost:8000/trip/${tripData["trip_id"]}/details/`)
    .then(res => {
      setDetailsData(res.data);
    })
  }, [])

  const onPressHandler = () => {
    setModalView(prevState => !prevState);
    return ;
  }

  const detailView = detailsData.map((item) => { 
    return (
      <TripDetailView 
      trip_id={item["trip_id"]} tripLocation={item["trip_details_location_to_visit"]} tripBudget={item["trip_location_budget"]}
      trip_members={item["trip_members"]} 
    />
    )
  })

  return (
    <SafeAreaView className="flex flex-col justify-between flex-1" >
      <ScrollView className="p-5"> 
       {detailView}
       </ScrollView>
       <View className="flex flex-row-reverse"> 
       <Ionicons name="add-circle" size={50} color="black" onPress={onPressHandler}/>
       </View>
        <Modal 
        visible={modelView} 
        animationType="slide" 
         >
          <SafeAreaView> 
          <View className="flex flex-row-reverse bg-slate-400"> 
          <Ionicons name="close" size={50} color="black" onPress={() => setModalView(prevState => !prevState)}/>
          </View>
          <View className="flex p-3 h-screen bg-slate-400"> 
          <TextInput placeholder="Enter trip location" className="p-3"  onChangeText={text=>setTripLocation(text)} value={tripLocation}/>
           
         
          <TextInput placeholder="Enter trip budget" className="p-3"  onChangeText={text=>setTripBudget(text)} value={tripBudget}/>
          <TextInput placeholder="Enter # of trip members" className="p-3"  onChangeText={text=>setTripMembers(text)} value={tripMembers}/>
          <Button title="Create Trip Detail" onPress={createTripDetail}/>
          </View>
          </SafeAreaView>
          </Modal>
    </SafeAreaView>
     
  )
}

export default TripDetails;