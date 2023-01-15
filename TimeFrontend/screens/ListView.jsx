import React from "react";

import {
	Text,
	SafeAreaView,
	View,
	Button,
	Image,
	TouchableOpacity,
	FlatList,
} from "react-native";

const DATA = [
	{
		id: "0",
		title: "Ski Trip",
		location: "Canmore, AB",
		startDate: "Feb 21st",
		endDate: "Feb 24th",
		budget: "$400-$450",
		description: "Skiing at Sunshine, Louise, and Mt. Norquay.",
		image: "",
	},
	{
		id: "1",
		title: "Ski Trip",
		location: "Canmore, AB",
		startDate: "Feb 21st",
		endDate: "Feb 24th",
		budget: "$400-$450",
		description: "Skiing at Sunshine, Louise, and Mt. Norquay.",
		image: "",
	},
];

const Item = ({ navigation, item }) => (
	<TouchableOpacity
		className="bg-white flex-row my-0.5"
		onPress={() => navigation.navigate("Trip Details", item)}
	>
		<Image
			source={require("../assets/placeholder.jpeg")}
			className=" w-28 h-28 mr-3"
		/>
		<View className="flex-col">
			<Text className="font-bold text-xl">{item.title}</Text>
			<Text className="text-xl">{item.location}</Text>
			<View className="flex-row text-xl pt-5">
				<Text className="text-xl">{item.startDate}</Text>
				<Text className="px-2 text-xl">-</Text>
				<Text className="text-xl">{item.endDate}</Text>
			</View>
		</View>
	</TouchableOpacity>
);

export default function ListView({ navigation }) {
	return (
		<SafeAreaView className="">
			<FlatList
				data={DATA}
				renderItem={({ item }) => <Item navigation={navigation} item={item} />}
				keyExtractor={(item) => item.id}
			/>
			<TouchableOpacity
				className="bg-blue-600 p-3 m-3 rounded-xl"
				onPress={() => navigation.navigate("Add Trip")}
			>
				<Text className=" text-white font-bold text-xl">Add Trip!</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
