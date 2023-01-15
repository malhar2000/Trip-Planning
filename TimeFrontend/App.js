import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TripDetails from './screens/TripDetails';
import Trip from './screens/Trip';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
     
      <Stack.Navigator>  
      <Stack.Screen 
        name="Trip"
        component={Trip}
        options={{title:"Trip"}}
      />
      <Stack.Screen 
        name="TripDetails"
        component={TripDetails}
        options={{title:"Trip Details"}}
      />
    </Stack.Navigator>
    
    </NavigationContainer>
  );
}
 
