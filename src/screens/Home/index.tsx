import { useState } from "react";
import { Text, VStack } from "native-base";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Header } from "./Header";
import { SearchInput } from "./SearchInput";
import { FilterBottomSheet } from "./FilterBottomSheet";
import { UserAdsIndicator } from "./UserAdsIndicator";
import { ProductsList } from "./ProductsList";

export function Home() {
	const [filterOptionsIsOpen, setFilterOptionsIsOpen] = useState(false);

	function handleChangeFilterOptionsVisibility() {
		setFilterOptionsIsOpen((state) => !state);
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<VStack flex={1} pt={4} px={6} space={8} safeArea>
				<Header />

				<VStack>
					<Text color="gray.500">Seus produtos anunciados para venda</Text>

					<UserAdsIndicator />
				</VStack>

				<VStack>
					<Text color="gray.500">Compre produtos variados</Text>

					<SearchInput
						changeFilterOptionsVisibility={handleChangeFilterOptionsVisibility}
					/>
				</VStack>

				<ProductsList />
			</VStack>

			<FilterBottomSheet
				isOpen={filterOptionsIsOpen}
				changeFilterOptionsVisibility={handleChangeFilterOptionsVisibility}
			/>
		</GestureHandlerRootView>
	);
}
