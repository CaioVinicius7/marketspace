import { VStack } from "native-base";

import { HomeHeader } from "@components/HomeHeader";

export function Home() {
	return (
		<VStack flex="1" pt="4" px="6" safeArea>
			<HomeHeader />
		</VStack>
	);
}
