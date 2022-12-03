import { Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";

export function Routes() {
	return (
		<Box flex={1} bgColor="gray.200">
			<NavigationContainer>
				<AuthRoutes />
			</NavigationContainer>
		</Box>
	);
}
