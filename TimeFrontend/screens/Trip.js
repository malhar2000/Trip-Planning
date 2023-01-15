import { View, Text, Image, Button, ScrollView } from 'react-native'
import React from 'react'
import axios from 'axios'


const Trip = ({navigation}) => {

    const [trip, setTrip] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:8000/trip/listcreate/')
        .then(res => {
            setTrip(res.data)
        })
        .catch(err => { console.log(err) })
    }, [])

    const onClickHanlder = (item) => {
         navigation.navigate('TripDetails', {item: item})
    }


    const tripView = trip.map((item) => {
        return (
           <ScrollView> 
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
            </ScrollView>
  
        )
    })

  return (
    <View>
        {tripView}
        
    </View>
  )
}

export default Trip