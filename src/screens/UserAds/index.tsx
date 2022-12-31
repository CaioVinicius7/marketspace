import { useState } from "react";
import { HStack, Text, VStack } from "native-base";

import { Header } from "./Header";
import { Select } from "./Select";
import { ProductsList } from "./ProductsList";

const products = ["1", "2", "3", "4", "5", "6", "8", "9"];

export function UserAds() {
	const [selectedItem, setSelectedItem] = useState("all");

	return (
		<VStack flex={1} pt={6} px={6} safeArea>
			<Header />

			<HStack justifyContent="space-between" alignItems="center" mt={8}>
				<Text color="gray.600"> {products.length} anúncios </Text>

				<Select selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			</HStack>

			<ProductsList products={products} />
		</VStack>
	);
}
