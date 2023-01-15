import { Text, SafeAreaView, View } from "react-native";

export default function ListItem({ props }) {
	return (
		<View className="flex-col">
			<Image />
			<View className="flex-row">
				<Text className="font-bold">{props.title}</Text>
				<Text className="">{props.location}</Text>
				<View className="flex-col">
					<Text className="">{props.startDate}</Text>
					<Text className="">{props.endDate}</Text>
				</View>
			</View>
		</View>
	);
}
