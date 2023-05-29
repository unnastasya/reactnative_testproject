import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";

export default function ListPage() {
	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<Text>List Page</Text>
				<StatusBar style="auto" />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},
	scrollView: {
		flex: 1,
	},
});
