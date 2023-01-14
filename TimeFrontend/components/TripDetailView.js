import { View, Text } from 'react-native'
import React from 'react'

const TripDetailView = () => {
  return (
    <View> 
    <View> 
        <Text>Trip Title</Text>
        <Text>Trip destination</Text>
    </View>
    <View>
        <Text>Trip starttime</Text>
        <Text>Trip endtime</Text>
    </View>
    <View>
        <Text>Trip budget</Text>
        <Text>Trip members</Text>
   </View>
   </View>
  )
}

export default TripDetailView