import { useState } from "react";
import {
	Text,
	SafeAreaView,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

export default function TripDetails({ route, navigation }) {
	const item = route.params;
	const [isEditing, setIsEditing] = useState(false);

	return (
		<SafeAreaView>
			<ImageBackground
				source={require("../assets/placeholder.jpeg")}
				className=" w-full h-60"
			>
				<TouchableOpacity className="absolute top-0 right-0 bg-blue-600 px-5 py-2 m-3 rounded-lg">
					<Text className="font-bold text-xl text-white">Edit</Text>
				</TouchableOpacity>
			</ImageBackground>
			<View className="flex self-center">
				<TextInput
					className="font-bold text-xl text-center"
					editable={isEditing}
				>
					{item.title}
				</TextInput>
				<TextInput className="text-xl text-center" editable={isEditing}>
					{item.location}
				</TextInput>
				<View className="flex-row">
					<TextInput className="text-xl text-center" editable={isEditing}>
						{item.startDate}
					</TextInput>
					<TextInput className="text-xl text-center" editable={isEditing}>
						-
					</TextInput>
					<TextInput className="text-xl text-center" editable={isEditing}>
						{item.endDate}
					</TextInput>
				</View>
			</View>
			<View className="mx-5 mt-3 p-3 border-2 rounded-xl border-gray-300 bg-white align-text-top">
				<TextInput
					numberOfLines={5}
					multiline={true}
					placeholder="Description:"
					editable={isEditing}
				/>
			</View>
			<TextInput
				className="mx-5 mt-3 p-3 border-2 rounded-xl border-gray-300 bg-white"
				multiline
				numberOfLines={5}
				placeholder="Agenda:"
				editable={isEditing}
			/>
		</SafeAreaView>
	);
}
