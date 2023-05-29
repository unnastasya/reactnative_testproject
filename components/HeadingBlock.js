import * as React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function HeadingBlock(props) {
	return (
		<View style={styles.container}>
			<View style={styles.card}></View>
			<Text style={styles.title}>Welcome</Text>
			<Text style={styles.text}>
				With supporting text below as a natural lead-in to additional
				content
			</Text>
			<Pressable style={styles.button}>
				<Text style={styles.buttonText}>See transactions</Text>
			</Pressable>

			<View style={styles.card}>
				<Text style={styles.cardText}>
					You have {props.transactionsCount} transactions
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		borderWidth: 1,
		borderColor: "black",
		marginBottom: 10,
	},
	title: {
		margin: 24,
		marginBottom: 0,
		fontSize: 14,
		fontWeight: "bold",
		textAlign: "center",
	},
  text: {
		margin: 24,
		fontSize: 14,
		textAlign: "center",
	},
	button: {
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
	card: {
		backgroundColor: "#DCDCDC",
		width: "100%",
		borderWidth: 1,
		borderColor: "black",
		height: 60,
		alignItems: "center",
		justifyContent: "center",
	},
  cardText: {
		fontSize: 14,
		textAlign: "center",
	},
});
