import { SafeAreaView, Text, View, Modal, TextInput, Button } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import TripDetailView from '../components/TripDetailView';
import { useState } from 'react';


const TripDetails = () => {

  const [modelView, setModalView] = useState(false)

  const createTripDetail = () => {
    
  }

  const onPressHandler = () => {
    setModalView(prevState => !prevState);
    return ;
  }

  return (
    <SafeAreaView className="flex flex-col justify-between flex-1" >
       <TripDetailView/>
       <View className="flex flex-row-reverse"> 
       <Ionicons name="add-circle" size={50} color="black" onPress={onPressHandler}/>
       </View>
        <Modal 
        visible={modelView} 
        animationType="slide" 
         >
          <SafeAreaView> 
          <View className="flex flex-row-reverse"> 
          <Ionicons name="close" size={50} color="black" onPress={() => setModalView(prevState => !prevState)}/>
          </View>
          <View className="flex p-3 h-screen bg-slate-400"> 
          <TextInput placeholder="Enter trip location" className="p-3"/>
          <TextInput placeholder="Enter start time" className="p-3"/>
          <TextInput placeholder="Enter trip budget" className="p-3"/>
          <TextInput placeholder="Enter # of trip members" className="p-3"/>
          <Button title="Create Trip Detail" onPress={createTripDetail}/>
          </View>
          </SafeAreaView>
          </Modal>
    </SafeAreaView>
     
  )
}

export default TripDetails