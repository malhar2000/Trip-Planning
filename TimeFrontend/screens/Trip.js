import { View, Text, Image, Button, ScrollView, Modal, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import axios from 'axios'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';


const Trip = ({navigation}) => {

    const [trip, setTrip] = React.useState([])
    const [modelView, setModalView] = useState(false)
    const [tripLocation, setTripLocation] = useState('')
    const [tripStart, setTripStart] = useState('')
    const [tripTitle, setTripTitle] = useState('')
    

    React.useEffect(() => {
        axios.get('http://localhost:8000/trip/listcreate/')
        .then(res => {
            setTrip(res.data)
        })
        .catch(err => { console.log(err) })
    }, [modelView])

    const onClickHanlder = (item) => {
         navigation.navigate('TripDetails', {item: item})
    }

    const onPressHandler = () => {
        setModalView(prevState => !prevState);
        return ;
    }

    const createTrip = () => {
        let formData = new FormData();
        formData.append('trip_title', tripTitle);
        formData.append('trip_start_station_name', tripStart);
        formData.append('trip_end_station_name', tripLocation);
        axios.post(`http://localhost:8000/trip/listcreate/`, 
           formData
      )
      .then(res => {console.log(res)});
    
      setTripLocation('');
      setTripStart('');
      setTripTitle('');
    }



    const tripView = trip.map((item) => {
        return (
           
            <View className="flex flex-row p-3">
                <Image 
                    source={{uri: "https://picsum.photos/200"}}  
                    style = {{ width: 100, height: 100 }} 
                />
                <View> 
                <Text className="p-2">{item["trip_title"]}</Text>
                <Text className="p-2">{item["trip_end_station_name"]}</Text>
                <Button title="View trip details" onPress={() => onClickHanlder(item)}/>
                </View>
            </View>
            
  
        )
    })

  return (
    <SafeAreaView className="flex flex-1 justify-between">
        <ScrollView> 
        {tripView}
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
          <TextInput placeholder="Enter destination" className="p-3"  onChangeText={text=>setTripLocation(text)} value={tripLocation}/>
           
         
          <TextInput placeholder="Enter start location" className="p-3"  onChangeText={text=> setTripStart(text)} value={tripStart}/>
          <TextInput placeholder="Enter trip title" className="p-3"  onChangeText={text=>setTripTitle(text)} value={tripTitle}/>
          <Button title="Create Trip Detail" onPress={createTrip}/>
          </View>
          </SafeAreaView>
          </Modal>
    </SafeAreaView>
  )
}

export default Trip