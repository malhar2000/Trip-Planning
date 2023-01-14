import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaView className="flex-1 items-center justify-center bg-blue-600">
				<Text>Open up App.js to start working on your app!</Text>
				<StatusBar style="auto" />
			</SafeAreaView>
		</NavigationContainer>
	);
}
