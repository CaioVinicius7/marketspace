import { useState } from "react";
import {
	CheckIcon,
	Divider,
	FlatList,
	Heading,
	HStack,
	IconButton,
	Select,
	Text,
	useTheme,
	VStack
} from "native-base";
import { CaretDown, Plus, CheckCircle } from "phosphor-react-native";

import { ProductCard } from "@components/ProductCard";
import { EmptyBox } from "@components/EmptyBox";

const products = ["1", "2", "3", "4", "5", "6", "8", "9"];

export function UserAds() {
	const [selectedItem, setSelectedItem] = useState("all");

	const { colors } = useTheme();

	return (
		<VStack flex={1} pt={6} px={6} safeArea>
			<HStack justifyContent="space-between" alignItems="center">
				<EmptyBox w={6} h={6} />

				<Heading fontSize="xl"> Meus anúncios </Heading>

				<IconButton
					onPress={() => console.log("Add product")}
					icon={<Plus size={24} weight="bold" color={colors.gray[700]} />}
					p={0}
					variant="unstyled"
					_pressed={{
						bgColor: "gray.300"
					}}
				/>
			</HStack>

			<HStack justifyContent="space-between" alignItems="center" mt={8}>
				<Text color="gray.600"> {products.length} anúncios </Text>

				<Select
					placeholder="Todos"
					accessibilityLabel="Filtre seus anúncios"
					minWidth={140}
					color="gray.700"
					fontSize="sm"
					dropdownIcon={
						<CaretDown
							size={20}
							color={colors.gray[500]}
							style={{
								marginRight: 8
							}}
						/>
					}
					_selectedItem={{
						bg: "gray.200"
					}}
					selectedValue={selectedItem}
					onValueChange={setSelectedItem}
				>
					<Select.Item label="Todos" value="all" />
					<Select.Item label="Ativos" value="active" />
					<Select.Item label="Desativados" value="disabled" />
				</Select>
			</HStack>

			<FlatList
				data={products}
				keyExtractor={(item) => item}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<ProductCard
						title="Tênis bege"
						value="59,90"
						status="used"
						productImg="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
						vendorImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						showVendor={item === "1"}
						isDisabled={item !== "1"}
					/>
				)}
				columnWrapperStyle={{
					justifyContent: "space-between"
				}}
				ItemSeparatorComponent={() => <Divider opacity={0} h={6} />}
				contentContainerStyle={{
					paddingBottom: 64
				}}
				mt={6}
			/>
		</VStack>
	);
}
