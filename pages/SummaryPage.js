import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import HeadingBlock from "../components/HeadingBlock";
import OneCard from "../components/OneCard";
import dataJson from "../data.json";

export default function SummaryPage({ navigation }) {
	const data = dataJson.data;
	const total = dataJson.total;
	const incomeData = data.filter((el) => el.type === "income");
	const outcomeData = data.filter((el) => el.type === "outcome");
	const loanData = data.filter((el) => el.type === "loan");
	const investmentData = data.filter((el) => el.type === "investment");

	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<HeadingBlock transactionsCount={total} />
				<View style={styles.cardsContainer}>
					<OneCard
						navigation={navigation}
						title="income"
						count={incomeData.length}
					/>
					<OneCard
						navigation={navigation}
						title="outcome"
						count={outcomeData.length}
					/>
					<OneCard
						navigation={navigation}
						title="loan"
						count={loanData.length}
					/>
					<OneCard
						navigation={navigation}
						title="investment"
						count={investmentData.length}
					/>
				</View>
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
	cardsContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	scrollView: {
		width: "90%",
	},
});
