import { Box, useTheme } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AppRoutes } from "@routes/app.routes";

export function Routes() {
	const { colors } = useTheme();

	const theme = DefaultTheme;

	theme.colors.background = colors.gray[200];

	return (
		<Box flex={1} bgColor="gray.200">
			<NavigationContainer theme={theme}>
				<AppRoutes />
			</NavigationContainer>
		</Box>
	);
}
