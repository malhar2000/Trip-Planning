import { View, Text } from 'react-native'
import React from 'react'

const TripDetailView = (props) => {
  return (
    <View> 
    <View> 
        <Text>{props["trip_id"]["trip_title"]}</Text>
        <Text>{props["trip_id"]["trip_end_station_name"]}</Text>
        <Text>{props["tripLocation"]}</Text>
    </View>
    <View>
        <Text>{props["tripBudget"]}</Text>
        <Text>{props["tripMembers"]}</Text>
   </View>
   </View>
  )
}

export default TripDetailView