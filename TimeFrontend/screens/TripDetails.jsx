import { Text, SafeAreaView, View, Image, TextInput } from "react-native";

export default function TripDetails({ route, navigation }) {
	const item = route.params;

	return (
		<SafeAreaView>
			<Image
				source={require("../assets/placeholder.jpeg")}
				className=" w-full h-60"
			/>
			<View className="flex self-center">
				<TextInput className="font-bold text-xl text-center">
					{item.title}
				</TextInput>
				<TextInput className="text-xl text-center">{item.location}</TextInput>
				<View className="flex-row">
					<TextInput className="text-xl text-center">
						{item.startDate}
					</TextInput>
					<TextInput className="text-xl text-center">-</TextInput>
					<TextInput className="text-xl text-center">{item.endDate}</TextInput>
				</View>
			</View>
			<View className="mx-5 mt-3 p-3 border-2 rounded-xl border-gray-300 bg-white align-text-top">
				<TextInput
					editable={true}
					numberOfLines={5}
					multiline={true}
					placeholder="Description:"
				/>
			</View>
			<TextInput
				className="mx-5 mt-3 p-3 border-2 rounded-xl border-gray-300 bg-white"
				editable
				multiline
				numberOfLines={5}
				placeholder="Agenda:"
			/>
		</SafeAreaView>
	);
}
