import { Divider, FlatList } from "native-base";

import { ProductCard } from "@components/ProductCard";

interface ProductsListProps {
	products: any[];
}

export function ProductsList({ products }: ProductsListProps) {
	return (
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
					showVendor={false}
					isDisabled={item > "5"}
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
	);
}
