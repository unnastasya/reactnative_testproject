import * as React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

interface OneCardProps {
	navigation: any;
	count: number;
	title: string;
}

export default function OneCard({ navigation, count, title }: OneCardProps) {
	const linkToListPage = () => {
		navigation.navigate("ListPage");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{count}</Text>
			<Text style={styles.text}>{title}</Text>
			<Pressable style={styles.button} onPress={linkToListPage}>
				<Text style={styles.buttonText}>See all</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		width: "48%",
		padding: 0,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 10,
	},
	title: {
		alignSelf: "flex-start",
		margin: 24,
		marginBottom: 0,
		fontSize: 14,
		fontWeight: "bold",
		textAlign: "center",
	},
	text: {
		alignSelf: "flex-start",
		margin: 24,
		fontSize: 14,
		textAlign: "center",
	},
	button: {
		alignSelf: "flex-end",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "#0d6efd",
		margin: 10,
	},
	buttonText: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
});
