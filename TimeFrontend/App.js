import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListView from "./screens/ListView";
import AddTrip from "./screens/AddTrip";
import TripDetails from "./screens/TripDetails";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			{/* <SafeAreaView>
				<Text className=" font-bold">TEST!</Text>
			</SafeAreaView> */}
			<Stack.Navigator screenOptions={{ headerLargeTitle: true }}>
				<Stack.Screen name="Upcoming Trips" component={ListView} />
				<Stack.Screen name="Add Trip" component={AddTrip} />
				<Stack.Screen
					name="Trip Details"
					component={TripDetails}
					options={({ route }) => ({ title: route.params.title })}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
