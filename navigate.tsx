import React from "react";
import SummaryPage from "./pages/SummaryPage";
import ListPage from "./pages/ListPage";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="SummaryPage"
					component={SummaryPage}
					options={{ title: "Summary Page" }}
				/>
                <Stack.Screen
					name="ListPage"
					component={ListPage}
					options={{ title: "List Page" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
