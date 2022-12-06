import { Platform } from "react-native";
import {
	createBottomTabNavigator,
	BottomTabNavigationProp
} from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { House, Tag, SignOut } from "phosphor-react-native";

import { Home } from "@screens/Home";
import { UserAds } from "@screens/UserAds";

type AppRoutes = {
	home: undefined;
	userAds: undefined;
	signOut: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
	const { colors, sizes } = useTheme();

	const iconsSizes = sizes[6];

	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: colors.gray[600],
				tabBarInactiveTintColor: colors.gray[400],
				tabBarStyle: {
					backgroundColor: colors.gray[100],
					borderTopWidth: 0,
					height: Platform.OS === "android" ? "auto" : 96,
					paddingBottom: sizes[8],
					paddingTop: sizes[8],
					justifyContent: "center",
					alignItems: "center"
				}
			}}
		>
			<Screen
				name="home"
				component={Home}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<House
							size={iconsSizes}
							color={color}
							weight={focused ? "bold" : "regular"}
						/>
					)
				}}
			/>

			<Screen
				name="userAds"
				component={UserAds}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<Tag
							size={iconsSizes}
							color={color}
							weight={focused ? "bold" : "regular"}
						/>
					)
				}}
			/>

			<Screen
				name="signOut"
				component={UserAds}
				options={{
					tabBarIcon: () => (
						<SignOut size={iconsSizes} color={colors.red[400]} />
					)
				}}
			/>
		</Navigator>
	);
}
