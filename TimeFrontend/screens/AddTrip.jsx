import { Text, SafeAreaView, View, TextInput } from "react-native";

export default function AddTrip() {
	return (
		<SafeAreaView>
			<TextInput
				className="bg-white border border-gray-300 mx-4 my-2 p-3 rounded-xl"
				placeholder="Title"
			/>
			<TextInput
				className="bg-white border border-gray-300 mx-4 my-2 p-3 rounded-xl"
				placeholder="Location"
			/>
			<TextInput
				className="bg-white border border-gray-300 mx-4 my-2 p-3 rounded-xl"
				placeholder="Start Date"
			/>
			<TextInput
				className="bg-white border border-gray-300 mx-4 my-2 p-3 rounded-xl"
				placeholder="End Date"
			/>
			<TextInput
				className="bg-white border border-gray-300 mx-4 my-2 p-3 rounded-xl"
				placeholder="Budget"
			/>
			<TextInput
				className="bg-white border border-gray-300 mx-4 my-2 p-3 rounded-xl"
				placeholder="Description"
			/>
		</SafeAreaView>
	);
}
