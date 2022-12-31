import { HStack, Image, Pressable, Text, VStack } from "native-base";

import { Avatar } from "../Avatar";
import { EmptyBox } from "../EmptyBox";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Tag } from "./Tag";

interface ProductCardProps {
	title: string;
	value: string;
	status: "used" | "new";
	productImg: string;
	vendorImg: string;
	showVendor?: boolean;
	isDisabled?: boolean;
}

export function ProductCard({
	title,
	value,
	status,
	productImg,
	vendorImg,
	showVendor = true,
	isDisabled = false
}: ProductCardProps) {
	const productIsNew = status === "new";

	function handleOnPress() {
		console.log(`Selected the product ${title}`);
	}

	return (
		<Pressable w="47.5%" onPress={handleOnPress}>
			<VStack>
				<Image
					source={{
						uri: productImg
					}}
					alt="Product Image"
					h={100}
					w="full"
					borderRadius="md"
					resizeMode="cover"
					opacity={isDisabled ? 0.9 : 1}
				/>

				{isDisabled && (
					<Text
						color="gray.100"
						fontFamily="heading"
						fontSize="xs"
						textTransform="uppercase"
						position="absolute"
						mt="75px"
						ml={2}
						opacity={1}
					>
						Anúncio desativado
					</Text>
				)}

				<Header
					isDisabled={isDisabled}
					productIsNew={productIsNew}
					showVendor={showVendor}
					vendorImg={vendorImg}
				/>

				<Footer title={title} value={value} isDisabled={isDisabled} />
			</VStack>
		</Pressable>
	);
}
