import { View, Text } from 'react-native'
import React from 'react'

const TripDetailView = (props) => {
  return (
    <View className="p-3"> 
    <View> 
        <Text className="p-3">{props["trip_id"]["trip_title"]}</Text>
        <Text className="p-3">{props["trip_id"]["trip_end_station_name"]}</Text>
        <Text className="p-3">{props["tripLocation"]}</Text>
    </View>
    <View>
        <Text className="p-3">{props["tripBudget"]}</Text>
        <Text className="p-3">{props["tripMembers"]}</Text>
   </View>
   </View>
  )
}

export default TripDetailView