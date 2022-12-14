import {
	Heading,
	HStack,
	Image,
	Pressable,
	Tag,
	Text,
	VStack
} from "native-base";

import { Avatar } from "./Avatar";

interface ProductCardProps {
	title: string;
	value: string;
	status: "used" | "new";
	productImg: string;
	vendorImg: string;
}

export function ProductCard({
	title,
	value,
	status,
	productImg,
	vendorImg
}: ProductCardProps) {
	const productIsNew = status == "new";

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
				/>

				<HStack position="absolute" w="full" justifyContent="space-between">
					<Avatar
						size={6}
						source={{
							uri: vendorImg
						}}
						borderColor="gray.100"
						borderWidth="1"
						top={-4}
						left={-4}
					/>

					<Tag
						bgColor={productIsNew ? "blue.600" : "gray.600"}
						borderRadius="full"
						h={4}
						px={2}
						py={0.5}
						mt={1}
						mr={1}
					>
						<Text
							fontSize="2xs"
							fontFamily="heading"
							textTransform="uppercase"
							color="white"
						>
							{productIsNew ? "Novo" : "Usado"}
						</Text>
					</Tag>
				</HStack>

				<Text color="gray.600" lineHeight="2xl">
					{title}
				</Text>

				<HStack alignItems="baseline">
					<Heading color="gray.700" fontSize="xs">
						R$
					</Heading>

					<Heading color="gray.700" fontSize="md" lineHeight="xs" pl={0.5}>
						{value}
					</Heading>
				</HStack>
			</VStack>
		</Pressable>
	);
}
